'use client';

import { Editor } from '@tiptap/react';
import { cn } from '@/lib/utils';

interface EditorToolbarProps {
    editor: Editor | null;
    className?: string;
}

export function EditorToolbar({ editor, className }: EditorToolbarProps) {
    if (!editor) return null;

    const addImage = () => {
        const url = window.prompt('URL de la imagen:');
        if (url) {
            editor.chain().focus().setImage({ src: url }).run();
        }
    };

    const setLink = () => {
        const previousUrl = editor.getAttributes('link').href;
        const url = window.prompt('URL del enlace:', previousUrl);

        if (url === null) return;
        if (url === '') {
            editor.chain().focus().extendMarkRange('link').unsetLink().run();
            return;
        }

        editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
    };

    return (
        <div className={cn(
            "flex flex-wrap items-center gap-1 p-1 bg-[#1A172E]/80 backdrop-blur-md border border-white/5 rounded-t-xl sticky top-0 z-40",
            className
        )}>
            {/* Grupo: Fuente (Word Style) */}
            <div className="flex items-center bg-white/5 rounded-lg p-0.5 mr-1">
                <ToolbarButton
                    active={editor.isActive('bold')}
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    icon="format_bold"
                    tooltip="Negrita"
                />
                <ToolbarButton
                    active={editor.isActive('italic')}
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    icon="format_italic"
                    tooltip="Cursiva"
                />
                <ToolbarButton
                    active={editor.isActive('underline')}
                    onClick={() => editor.chain().focus().toggleUnderline().run()}
                    icon="format_underlined"
                    tooltip="Subrayado"
                />
                <ToolbarButton
                    active={editor.isActive('strike')}
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    icon="format_strikethrough"
                    tooltip="Tachado"
                />
            </div>

            {/* Grupo: Alineación */}
            <div className="flex items-center bg-white/5 rounded-lg p-0.5 mr-1">
                <ToolbarButton
                    active={editor.isActive({ textAlign: 'left' })}
                    onClick={() => editor.chain().focus().setTextAlign('left').run()}
                    icon="format_align_left"
                    tooltip="Izquierda"
                />
                <ToolbarButton
                    active={editor.isActive({ textAlign: 'center' })}
                    onClick={() => editor.chain().focus().setTextAlign('center').run()}
                    icon="format_align_center"
                    tooltip="Centro"
                />
                <ToolbarButton
                    active={editor.isActive({ textAlign: 'right' })}
                    onClick={() => editor.chain().focus().setTextAlign('right').run()}
                    icon="format_align_right"
                    tooltip="Derecha"
                />
                <ToolbarButton
                    active={editor.isActive({ textAlign: 'justify' })}
                    onClick={() => editor.chain().focus().setTextAlign('justify').run()}
                    icon="format_align_justify"
                    tooltip="Justificar"
                />
            </div>

            {/* Grupo: Títulos y Listas */}
            <div className="flex items-center bg-white/5 rounded-lg p-0.5 mr-1">
                <ToolbarButton
                    active={editor.isActive('heading', { level: 1 })}
                    onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                    icon="format_h1"
                    tooltip="Título 1"
                />
                <ToolbarButton
                    active={editor.isActive('heading', { level: 2 })}
                    onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                    icon="format_h2"
                    tooltip="Título 2"
                />
                <ToolbarButton
                    active={editor.isActive('bulletList')}
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    icon="format_list_bulleted"
                    tooltip="Lista de Viñetas"
                />
                <ToolbarButton
                    active={editor.isActive('orderedList')}
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    icon="format_list_numbered"
                    tooltip="Lista Numerada"
                />
            </div>

            {/* Grupo: Insertar */}
            <div className="flex items-center bg-white/5 rounded-lg p-0.5 mr-1">
                <ToolbarButton
                    onClick={setLink}
                    active={editor.isActive('link')}
                    icon="link"
                    tooltip="Insertar Enlace"
                />
                <ToolbarButton
                    onClick={addImage}
                    icon="image"
                    tooltip="Insertar Imagen"
                />
                <ToolbarButton
                    active={editor.isActive('blockquote')}
                    onClick={() => editor.chain().focus().toggleBlockquote().run()}
                    icon="format_quote"
                    tooltip="Cita"
                />
                <ToolbarButton
                    onClick={() => editor.chain().focus().setHardBreak().run()}
                    icon="keyboard_return"
                    tooltip="Salto de Línea"
                />
            </div>

            {/* Grupo: Estilo / Color */}
            <div className="flex items-center bg-white/5 rounded-lg p-0.5 mr-1">
                <ToolbarButton
                    active={editor.isActive('highlight')}
                    onClick={() => editor.chain().focus().toggleHighlight().run()}
                    icon="stylus_note"
                    tooltip="Resaltar"
                />
                <ToolbarButton
                    onClick={() => editor.chain().focus().unsetAllMarks().run()}
                    icon="format_clear"
                    tooltip="Limpiar Formato"
                />
            </div>

            {/* Grupo: Acciones */}
            <div className="flex items-center ml-auto">
                <ToolbarButton
                    onClick={() => editor.chain().focus().undo().run()}
                    disabled={!editor.can().undo()}
                    icon="undo"
                    tooltip="Deshacer"
                />
                <ToolbarButton
                    onClick={() => editor.chain().focus().redo().run()}
                    disabled={!editor.can().redo()}
                    icon="redo"
                    tooltip="Rehacer"
                />
            </div>
        </div>
    );
}

function ToolbarButton({
    active,
    onClick,
    icon,
    tooltip,
    disabled
}: {
    active?: boolean;
    onClick: () => void;
    icon: string;
    tooltip: string;
    disabled?: boolean;
}) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            type="button"
            className={cn(
                "h-8 w-8 rounded-md flex items-center justify-center transition-all",
                "hover:bg-white/10 text-slate-400 hover:text-white",
                active && "text-[hsl(165,100%,38%)] bg-white/10",
                disabled && "opacity-30 cursor-not-allowed"
            )}
            title={tooltip}
        >
            <span className="material-symbols-outlined text-[18px]">{icon}</span>
        </button>
    );
}
