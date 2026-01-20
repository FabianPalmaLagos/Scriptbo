'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button, IconButton } from '@/components/ui';

export default function EditorPage() {
    const [showAiPanel, setShowAiPanel] = useState(true);

    return (
        <div className="flex h-full w-full">
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
                <div className="flex-1 overflow-y-auto p-2 flex flex-col gap-1">
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

            {/* Center: Zen Editor */}
            <main className="flex-1 relative flex flex-col h-full bg-[#0d0a1f]">

                {/* Top Bar */}
                <header className="flex items-center justify-between px-8 py-4 border-b border-white/5 bg-[#0d0a1f]/80 backdrop-blur-sm z-30">
                    <div className="flex items-center gap-4">
                        <h1 className="text-white font-semibold">Echoes of Entropy</h1>
                        <span className="text-slate-600">/</span>
                        <span className="text-slate-400 text-sm">Chapter 1</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-xs text-slate-500 hidden md:block">Saving...</span>
                        <Button variant="ghost" size="sm" icon="history">History</Button>
                        <Button variant="secondary" size="sm" icon="play_circle">Read Aloud</Button>
                        <Button size="sm" icon="ios_share">Export</Button>
                        <div className="w-[1px] h-6 bg-white/10 mx-1" />
                        <IconButton
                            icon="auto_awesome"
                            className={showAiPanel ? 'text-[hsl(165,100%,38%)] bg-[hsl(165,100%,38%)]/10' : ''}
                            onClick={() => setShowAiPanel(!showAiPanel)}
                        />
                    </div>
                </header>

                {/* Editor Area */}
                <div className="flex-1 overflow-y-auto relative">
                    <div className="max-w-3xl mx-auto py-16 px-8 min-h-full">
                        <input
                            type="text"
                            className="w-full bg-transparent text-4xl font-bold text-white mb-8 border-none focus:ring-0 placeholder-slate-600 px-0"
                            defaultValue="The Great Blackout"
                        />

                        <div className="prose-scriptbo text-lg leading-relaxed text-slate-300">
                            <p>The sky above the port was the color of television, tuned to a dead channel—if televisions hadn't been obsolete for fifty years. Elias pulled his coat tighter against the acid rain, the holographic advertisements of Sector 7 flickering in puddles of iridescent oil.</p>

                            <p>"You're late," Kael said, not turning around. The cyborg was leaning against a rusted railing, watching the magnet-trains glide silently over the abyss.</p>

                            <p>Elias checked his chrono. "Time is relative in the Neo-Sector, old friend. Especially when you're trying to reverse entropy."</p>

                            <p>Kael chuckled, the sound like grinding gears. "Only you would try to fix the universe with a screwdriver and a bad attitude."</p>

                            <p>The wind picked up, carrying the scent of ozone and burning plastic. It was the smell of home. It was the smell of the end of the world.</p>

                            {/* Cursor / Writing Indicator */}
                            <p className="flex items-center">
                                <span className="w-0.5 h-6 bg-[hsl(165,100%,38%)] animate-pulse inline-block mr-1"></span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar: Stats */}
                <div className="absolute bottom-0 left-0 right-0 py-2 px-6 bg-[#0d0a1f] border-t border-white/5 flex justify-between text-xs text-slate-500">
                    <div className="flex gap-4">
                        <span>Words: 4,520</span>
                        <span>Characters: 24,105</span>
                        <span>Reading Time: 18m</span>
                    </div>
                    <div>
                        <span>Markdown Supported</span>
                    </div>
                </div>
            </main>

            {/* Right: AI Co-author Panel */}
            {showAiPanel && (
                <aside className="w-[340px] border-l border-white/5 bg-[#0a0817] flex flex-col z-20 animate-slide-up">
                    <div className="p-4 border-b border-white/5 flex items-center justify-between">
                        <h2 className="text-sm font-bold text-white flex items-center gap-2">
                            <span className="material-symbols-outlined text-[hsl(165,100%,38%)]">auto_awesome</span>
                            Co-Author
                        </h2>
                        <div className="flex items-center gap-2">
                            <span className="text-xs text-[hsl(165,100%,38%)] font-mono px-2 py-0.5 rounded bg-[hsl(165,100%,38%)]/10">340 cr</span>
                            <IconButton icon="close" size="sm" onClick={() => setShowAiPanel(false)} />
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 space-y-6">

                        {/* Suggestion Card */}
                        <div className="glass-panel rounded-xl p-4 border border-[hsl(165,100%,38%)]/20">
                            <p className="text-xs font-bold text-[hsl(165,100%,38%)] mb-2 uppercase tracking-wide">Suggested Continuation</p>
                            <p className="text-sm text-slate-300 mb-3">
                                Kael turned finally, his optic eye whirring as it focused. "Do you have the data drive?" he asked, voice dropping to a whisper.
                            </p>
                            <div className="flex gap-2">
                                <Button size="sm" className="w-full">Insert</Button>
                                <IconButton size="sm" icon="refresh" />
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div>
                            <h3 className="text-xs font-bold text-slate-500 mb-3 uppercase tracking-wide">Quick Actions</h3>
                            <div className="grid grid-cols-2 gap-2">
                                <QuickActionButton icon="notes" label="Describe" />
                                <QuickActionButton icon="bolt" label="Action" />
                                <QuickActionButton icon="chat" label="Dialogue" />
                                <QuickActionButton icon="psychology" label="Brainstorm" />
                            </div>
                        </div>

                        {/* Analysis */}
                        <div>
                            <h3 className="text-xs font-bold text-slate-500 mb-3 uppercase tracking-wide">Scene Analysis</h3>
                            <div className="space-y-3">
                                <AnalysisMetric label="Tension" value={75} />
                                <AnalysisMetric label="Pacing" value={40} />
                                <AnalysisMetric label="Sentiment" value={-20} />
                            </div>
                        </div>

                    </div>

                    {/* Chat Input */}
                    <div className="p-4 border-t border-white/5">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Ask Gemini to help..."
                                className="w-full bg-[hsl(252,29%,14%)] border border-white/10 rounded-xl py-3 pl-4 pr-10 text-sm text-white focus:outline-none focus:border-[hsl(165,100%,38%)]/50 transition-colors"
                            />
                            <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-lg bg-[hsl(165,100%,38%)] text-[#0d0a1f] hover:bg-white transition-colors">
                                <span className="material-symbols-outlined text-[18px]">arrow_upward</span>
                            </button>
                        </div>
                    </div>
                </aside>
            )}
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
        <button className={`flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-all ${active ? 'bg-white/5 border border-white/5 text-white' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}>
            <span className={`text-xs font-mono ${active ? 'text-[hsl(165,100%,38%)]' : 'text-slate-600'}`}>{number}</span>
            <span className="text-sm font-medium truncate">{title}</span>
        </button>
    );
}

function QuickActionButton({ icon, label }: { icon: string; label: string }) {
    return (
        <button className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-[hsl(165,100%,38%)]/30 transition-all gap-1 group">
            <span className="material-symbols-outlined text-[20px] text-slate-400 group-hover:text-[hsl(165,100%,38%)] transition-colors">{icon}</span>
            <span className="text-xs font-medium text-slate-400 group-hover:text-white transition-colors">{label}</span>
        </button>
    );
}

function AnalysisMetric({ label, value }: { label: string; value: number }) {
    // Normalize value -100 to 100 or 0 to 100
    const displayValue = Math.abs(value);
    return (
        <div className="flex items-center gap-3">
            <span className="text-xs text-slate-400 w-16">{label}</span>
            <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div
                    className="h-full bg-[hsl(165,100%,38%)] rounded-full transition-all"
                    style={{ width: `${displayValue}%` }}
                />
            </div>
            <span className="text-xs text-white font-mono w-8 text-right">{value}%</span>
        </div>
    );
}
