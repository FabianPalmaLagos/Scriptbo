'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import { BubbleMenu, FloatingMenu } from '@tiptap/react/menus';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import CharacterCount from '@tiptap/extension-character-count';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Link from '@tiptap/extension-link';
import Highlight from '@tiptap/extension-highlight';
import ImageExtension from '@tiptap/extension-image';
import { useEffect } from 'react';
import { cn } from '@/lib/utils';
import { EditorToolbar } from './EditorToolbar';
import { VirtualPagination } from './extensions/VirtualPagination';

interface TiptapEditorProps {
    content: any;
    onChange: (content: any) => void;
    className?: string;
    placeholder?: string;
}

export function TiptapEditor({ content, onChange, className, placeholder = "Erase once, write twice..." }: TiptapEditorProps) {
    const editor = useEditor({
        immediatelyRender: false,
        extensions: [
            StarterKit.configure({
                heading: {
                    levels: [1, 2, 3],
                },
            }),
            Placeholder.configure({
                placeholder,
                emptyEditorClass: 'is-editor-empty',
            }),
            CharacterCount,
            Underline,
            TextAlign.configure({
                types: ['heading', 'paragraph'],
            }),
            Link.configure({
                openOnClick: false,
                HTMLAttributes: {
                    class: 'text-[hsl(165,100%,38%)] underline cursor-pointer',
                },
            }),
            Highlight.configure({ multicolor: true }),
            ImageExtension.configure({
                HTMLAttributes: {
                    class: 'rounded-xl border border-white/10 max-w-full h-auto my-8',
                },
            }),
            VirtualPagination,
        ],
        content: content,
        onUpdate: ({ editor }) => {
            onChange(editor.getJSON());
        },
        editorProps: {
            attributes: {
                class: cn(
                    'prose prose-scriptbo focus:outline-none transition-all duration-300',
                    className
                ),
            },
        },
    });

    // Enforce Full Page Snap (A4 Multiples)
    // This prevents the "expandable box" usage feeling
    useEffect(() => {
        if (!editor) return;

        const updateHeight = () => {
            const editorEl = document.querySelector('.prose-scriptbo') as HTMLElement;
            if (!editorEl) return;

            // Measure actual content height based on the last element position
            // This is crucial because scrollHeight locks to minHeight
            let contentBottom = 0;
            if (editorEl.lastElementChild) {
                const parentRect = editorEl.getBoundingClientRect();
                const lastChildRect = editorEl.lastElementChild.getBoundingClientRect();
                // Relative bottom position of content
                contentBottom = lastChildRect.bottom - parentRect.top;
            } else {
                // Empty editor fallback
                contentBottom = 0;
            }

            // Add safety margin to bottom (footer area)
            contentBottom += 100;

            // A4 (1123) + Gap (50) = 1173px per page block
            const PAGE_BLOCK_HEIGHT = 1173;

            // Calculate how many pages we need to cover the content
            const pagesNeeded = Math.max(1, Math.ceil(contentBottom / PAGE_BLOCK_HEIGHT));
            // Force min-height to be exactly N pages

            const finalHeight = pagesNeeded * PAGE_BLOCK_HEIGHT;

            if (editorEl.style.minHeight !== `${finalHeight}px`) {
                editorEl.style.minHeight = `${finalHeight}px`;
            }
        };

        // Run on update and selection change
        editor.on('update', updateHeight);
        editor.on('selectionUpdate', updateHeight);

        // Initial check
        setTimeout(updateHeight, 500);

        return () => {
            editor.off('update', updateHeight);
            editor.off('selectionUpdate', updateHeight);
        };
    }, [editor]);

    // Hotfix para actualizar contenido si cambia externamente
    useEffect(() => {
        if (editor && content && JSON.stringify(editor.getJSON()) !== JSON.stringify(content)) {
            editor.commands.setContent(content);
        }
    }, [content, editor]);

    if (!editor) return null;

    return (
        <div className="flex flex-col w-full h-full overflow-hidden">
            {/* Barra de Herramientas Estilo Word (Fija) */}
            <div className="flex-none z-50">
                <EditorToolbar editor={editor} className="rounded-none border-b border-white/5" />
            </div>

            {/* Canvas del Editor (Lienzo Infinito - El scroll sucede aquí) */}
            <div className="flex-1 overflow-y-auto bg-[#0d0a1f] custom-scrollbar">
                <div className="flex flex-col items-center py-20 min-h-full">
                    <div className="relative w-full max-w-[850px]">
                        <EditorContent editor={editor} />

                        {/* Menús Contextuales */}
                        <BubbleMenu
                            editor={editor}
                            options={{ offset: 10 }}
                            className="flex overflow-hidden rounded-lg border border-white/10 bg-[#1A172E]/95 backdrop-blur-md z-50"
                        >
                            <MenuButton
                                active={editor.isActive('bold')}
                                onClick={() => editor.chain().focus().toggleBold().run()}
                                icon="format_bold"
                            />
                            <MenuButton
                                active={editor.isActive('italic')}
                                onClick={() => editor.chain().focus().toggleItalic().run()}
                                icon="format_italic"
                            />
                            <MenuButton
                                active={editor.isActive('underline')}
                                onClick={() => editor.chain().focus().toggleUnderline().run()}
                                icon="format_underlined"
                            />
                        </BubbleMenu>

                        <FloatingMenu
                            editor={editor}
                            options={{ offset: 10 }}
                            className="flex gap-1 p-1 rounded-lg border border-white/5 bg-[#0d0a1f]/90 backdrop-blur-sm z-50"
                        >
                            <MenuButton
                                onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                                icon="title"
                                label="Título"
                            />
                            <MenuButton
                                onClick={() => editor.chain().focus().toggleBulletList().run()}
                                icon="format_list_bulleted"
                                label="Lista"
                            />
                        </FloatingMenu>
                    </div>

                    {/* Espacio extra al final para scroll agradable */}
                    <div className="h-[40vh] w-full" />
                </div>
            </div>

            {/* Stats flotantes */}
            <div className="fixed bottom-8 right-8 z-40 flex items-center gap-4 bg-black/60 backdrop-blur-xl border border-white/5 px-4 py-2 rounded-full text-[10px] font-bold tracking-widest text-slate-500 uppercase shadow-neon">
                <span className="flex items-center gap-1.5 text-[hsl(165,100%,38%)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[hsl(165,100%,38%)] animate-pulse" />
                    {editor.storage.characterCount.words()} PALABRAS
                </span>
                <span className="h-3 w-px bg-white/10" />
                <span className="text-slate-400">{editor.storage.characterCount.characters()} CARACTERES</span>
            </div>
        </div>
    );
}

function MenuButton({ active, onClick, icon, label }: { active?: boolean; onClick: () => void; icon: string; label?: string }) {
    return (
        <button
            onClick={onClick}
            type="button"
            className={cn(
                "flex items-center gap-2 px-3 py-2 transition-colors hover:bg-white/10",
                active ? "text-[hsl(165,100%,38%)] bg-white/5" : "text-slate-400"
            )}
            title={label}
        >
            <span className="material-symbols-outlined text-[18px]">{icon}</span>
            {label && <span className="text-[10px] font-bold uppercase tracking-wider">{label}</span>}
        </button>
    );
}
