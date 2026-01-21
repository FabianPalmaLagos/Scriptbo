'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button, IconButton } from '@/components/ui';
import { TiptapEditor } from '@/components/editor/TiptapEditor';
import { AiSidebar } from '@/components/editor/AiSidebar';

export default function EditorPage() {
    const [showAiPanel, setShowAiPanel] = useState(true);
    const [content, setContent] = useState<any>({
        type: 'doc',
        content: [
            {
                type: 'heading',
                attrs: { level: 2, textAlign: 'center' },
                content: [{ type: 'text', text: 'The Great Blackout' }],
            },
            {
                type: 'paragraph',
                attrs: { textAlign: 'justify' },
                content: [
                    { type: 'text', text: 'The sky above the port was the color of television, tuned to a dead channel—if televisions hadn\'t been obsolete for fifty years. Elias pulled his coat tighter against the acid rain, the holographic advertisements of Sector 7 flickering in puddles of iridescent oil.' },
                ],
            },
            {
                type: 'paragraph',
                content: [
                    { type: 'text', text: '"You\'re late," Kael said, not turning around. The cyborg was leaning against a rusted railing, watching the magnet-trains glide silently over the abyss.' },
                ],
            },
            {
                type: 'paragraph',
                content: [
                    { type: 'text', text: 'Elias checked his chrono. "Time is relative in the Neo-Sector, old friend. Especially when you\'re trying to reverse entropy."' },
                ],
            },
        ],
    });

    const handleEditorChange = (newContent: any) => {
        setContent(newContent);
    };

    return (
        <div className="flex h-full w-full bg-[#0d0a1f]">
            {/* Left: Navigation / Structure (Collapsed) */}
            <aside className="hidden md:flex flex-col w-12 h-full border-r border-white/5 bg-[#0a0817] z-20 items-center py-4 gap-4">
                <Link href="/dashboard" className="h-8 w-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/5 transition-colors">
                    <span className="material-symbols-outlined text-[20px]">arrow_back</span>
                </Link>
                <div className="w-6 h-[1px] bg-white/5" />
                <NavIcon icon="folder_open" active />
                <NavIcon icon="auto_stories" />
                <NavIcon icon="search" />
                <NavIcon icon="settings" className="mt-auto" />
            </aside>

            {/* File Explorer (Secondary Sidebar) */}
            <aside className="hidden lg:flex flex-col w-64 h-full border-r border-white/5 bg-[#0a0817]/50 z-10 backdrop-blur-sm">
                <div className="p-4 border-b border-white/5 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Chapters</span>
                    <IconButton icon="add" size="sm" />
                </div>
                <div className="flex-1 overflow-y-auto p-2 flex flex-col gap-1 custom-scrollbar">
                    <ChapterItem number="01" title="The Great Blackout" active />
                    <ChapterItem number="02" title="Neon Shadows" />
                    <ChapterItem number="03" title="Entropy's Kiss" />
                    <ChapterItem number="04" title="Protocol Zero" />
                    <ChapterItem number="05" title="The Architect" />
                </div>
                <div className="p-4 border-t border-white/5">
                    <div className="flex items-center justify-between text-xs text-slate-400">
                        <span>Goal: 50,000 words</span>
                        <span>78%</span>
                    </div>
                    <div className="h-1 w-full bg-white/5 rounded-full mt-2 overflow-hidden">
                        <div className="h-full bg-[hsl(165,100%,38%)] w-[78%]" />
                    </div>
                </div>
            </aside>

            {/* Center: Robust Editor */}
            <main className="flex-1 relative flex flex-col h-full overflow-hidden">
                {/* Top Bar (Project Info & Primary Actions) */}
                <header className="flex items-center justify-between px-8 py-3 border-b border-white/5 bg-[#0d0a1f] z-30">
                    <div className="flex items-center gap-4">
                        <div className="h-8 w-8 rounded bg-[hsl(165,100%,38%)]/10 flex items-center justify-center">
                            <span className="material-symbols-outlined text-[hsl(165,100%,38%)] text-[20px]">description</span>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-white text-sm font-bold leading-none mb-1">Echoes of Entropy</h1>
                            <span className="text-[10px] text-slate-500 font-mono tracking-widest">PROJECT ID: SCB-2026-0X</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <Button variant="ghost" size="sm" icon="cloud_done" className="text-emerald-500 text-[10px] font-bold">Synced</Button>
                        <div className="w-[1px] h-4 bg-white/10" />
                        <Button variant="secondary" size="sm" icon="visibility">Preview</Button>
                        <Button size="sm" icon="ios_share">Export</Button>
                        <IconButton
                            icon="auto_awesome"
                            className={showAiPanel ? 'text-[hsl(165,100%,38%)] bg-[hsl(165,100%,38%)]/10 shadow-neon' : ''}
                            onClick={() => setShowAiPanel(!showAiPanel)}
                        />
                    </div>
                </header>

                {/* Main Content Area (Full Canvas) */}
                <div className="flex-1 overflow-hidden bg-[#0d0a1f]">
                    <TiptapEditor
                        content={content}
                        onChange={handleEditorChange}
                        className=""
                        isAiPanelOpen={showAiPanel}
                    />
                </div>
            </main>

            {/* Right: AI Co-author Panel */}
            <AiSidebar isOpen={showAiPanel} onClose={() => setShowAiPanel(false)} />
        </div>
    );
}

// Sub-components

function NavIcon({ icon, active, className }: { icon: string; active?: boolean; className?: string }) {
    return (
        <button className={`h-10 w-10 rounded-xl flex items-center justify-center transition-all ${active ? 'bg-[hsl(165,100%,38%)] text-[#0d0a1f] shadow-neon' : 'text-slate-400 hover:text-white hover:bg-white/5'} ${className}`}>
            <span className="material-symbols-outlined text-[24px]">{icon}</span>
        </button>
    );
}

function ChapterItem({ number, title, active }: { number: string; title: string; active?: boolean }) {
    return (
        <button className={`flex items-center gap-3 px-3 py-3 rounded-xl text-left transition-all ${active ? 'bg-white/10 border border-white/10 text-white' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}>
            <div className={`text-[10px] font-mono w-5 h-5 rounded flex items-center justify-center ${active ? 'bg-[hsl(165,100%,38%)] text-[#0d0a1f]' : 'bg-white/5 text-slate-600'}`}>
                {number}
            </div>
            <span className="text-sm font-semibold truncate flex-1">{title}</span>
        </button>
    );
}

function AnalysisMetric({ label, value }: { label: string; value: number }) {
    return (
        <div className="space-y-1.5">
            <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-slate-500">
                <span>{label}</span>
                <span className="text-white">{value}%</span>
            </div>
            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div
                    className="h-full bg-gradient-to-r from-[hsl(165,100%,38%)] to-[hsl(165,100%,58%)] rounded-full transition-all duration-1000"
                    style={{ width: `${value}%` }}
                />
            </div>
        </div>
    );
}
