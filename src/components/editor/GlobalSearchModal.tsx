'use client';

import { useState } from 'react';
import { Button, IconButton } from '@/components/ui';
import { cn } from '@/lib/utils';

interface GlobalSearchModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function GlobalSearchModal({ isOpen, onClose }: GlobalSearchModalProps) {
    if (!isOpen) return null;

    const [query, setQuery] = useState('');
    const [replaceText, setReplaceText] = useState('');
    const [scope, setScope] = useState<'project' | 'chapter'>('project');
    const [isReplaceMode, setIsReplaceMode] = useState(false);

    // Mock Results
    const results = [
        { chapter: 'Chapter 1', context: '...the shadows of the [old city] were long...', line: 45 },
        { chapter: 'Chapter 3', context: '...forgotten beneath the [old city] ruins...', line: 12 },
        { chapter: 'Chapter 5', context: '...map of the [old city] he found...', line: 89 },
    ];

    return (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 bg-black/50 backdrop-blur-sm animate-fade-in" onClick={onClose}>
            <div className="w-full max-w-lg bg-[#0d0a1f] border border-white/10 rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh] ml-[60px]" onClick={(e) => e.stopPropagation()}>

                {/* Header / Search Bar */}
                <div className="p-4 border-b border-white/5 bg-[#1A172E]">
                    <div className="flex items-center justify-between mb-3">
                        <h3 className="text-sm font-bold text-white flex items-center gap-2">
                            <span className="material-symbols-outlined text-[hsl(165,100%,38%)]">search</span>
                            {isReplaceMode ? 'Global Search & Replace' : 'Global Search'}
                        </h3>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => setIsReplaceMode(!isReplaceMode)}
                                className={cn("text-[10px] font-bold uppercase transition-colors", isReplaceMode ? "text-[hsl(165,100%,38%)]" : "text-slate-500 hover:text-white")}
                            >
                                {isReplaceMode ? 'Hide Replace' : 'Show Replace'}
                            </button>
                            <IconButton icon="close" size="sm" onClick={onClose} />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div className="relative">
                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-[18px]">search</span>
                            <input
                                type="text"
                                placeholder="Search..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="w-full bg-[#0a0817] border border-white/10 rounded-lg py-2 pl-9 pr-4 text-sm text-white focus:outline-none focus:border-[hsl(165,100%,38%)]/50 transition-colors"
                                autoFocus
                            />
                        </div>

                        {isReplaceMode && (
                            <div className="relative animate-slide-down">
                                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-[18px] rotate-180">flip_camera_android</span>
                                <input
                                    type="text"
                                    placeholder="Replace with..."
                                    value={replaceText}
                                    onChange={(e) => setReplaceText(e.target.value)}
                                    className="w-full bg-[#0a0817] border border-white/10 rounded-lg py-2 pl-9 pr-4 text-sm text-white focus:outline-none focus:border-purple-500/50 transition-colors"
                                />
                            </div>
                        )}
                    </div>

                    <div className="flex items-center gap-2 mt-3">
                        <button
                            onClick={() => setScope('project')}
                            className={cn("px-2 py-1 rounded text-[10px] font-bold uppercase transition-all border border-transparent", scope === 'project' ? "bg-white/10 text-white border-white/5" : "text-slate-500 hover:text-white")}
                        >
                            All Chapters
                        </button>
                        <button
                            onClick={() => setScope('chapter')}
                            className={cn("px-2 py-1 rounded text-[10px] font-bold uppercase transition-all border border-transparent", scope === 'chapter' ? "bg-white/10 text-white border-white/5" : "text-slate-500 hover:text-white")}
                        >
                            Current File
                        </button>
                        <span className="ml-auto text-[10px] text-slate-500 font-mono">
                            {query ? `${results.length} matches` : '0 matches'}
                        </span>
                    </div>
                </div>

                {/* Results List */}
                <div className="flex-1 overflow-y-auto custom-scrollbar p-2 space-y-1 bg-[#0d0a1f]">
                    {query ? (
                        results.map((res, idx) => (
                            <div key={idx} className="group p-3 rounded-lg hover:bg-white/5 cursor-pointer border border-transparent hover:border-white/5 transition-colors">
                                <div className="flex justify-between items-start mb-1">
                                    <span className="text-[10px] font-bold text-[hsl(165,100%,38%)] uppercase tracking-wider">{res.chapter} <span className="text-slate-600">• Line {res.line}</span></span>
                                    {isReplaceMode && (
                                        <button className="opacity-0 group-hover:opacity-100 text-[10px] font-bold bg-purple-500/10 text-purple-400 px-2 py-0.5 rounded hover:bg-purple-500 hover:text-white transition-all">
                                            Replace
                                        </button>
                                    )}
                                </div>
                                <p className="text-sm text-slate-400 font-mono leading-relaxed truncate">
                                    {res.context.split('[').map((part, i) => (
                                        i === 0 ? part : (
                                            <span key={i}>
                                                <span className="text-white bg-[hsl(165,100%,38%)]/20 px-0.5 rounded">{part.split(']')[0]}</span>
                                                {part.split(']')[1]}
                                            </span>
                                        )
                                    ))}
                                </p>
                            </div>
                        ))
                    ) : (
                        <div className="flex flex-col items-center justify-center py-12 text-slate-600">
                            <span className="material-symbols-outlined text-4xl mb-2 opacity-50">find_in_page</span>
                            <p className="text-xs">Type to search...</p>
                        </div>
                    )}
                </div>

                {/* Footer Actions (Batch Replace) */}
                {isReplaceMode && query && (
                    <div className="p-4 border-t border-white/5 bg-[#1A172E]/50 flex justify-end">
                        <Button className="bg-purple-600 text-white hover:bg-purple-500">
                            Replace All ({results.length})
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
}
