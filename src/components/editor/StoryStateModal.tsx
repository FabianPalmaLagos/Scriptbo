'use client';

import { useState } from 'react';
import { Button, IconButton } from '@/components/ui';
import { cn } from '@/lib/utils';

interface StoryStateModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function StoryStateModal({ isOpen, onClose }: StoryStateModalProps) {
    if (!isOpen) return null;

    const [isAnalyzing, setIsAnalyzing] = useState(true);
    const [progress, setProgress] = useState(0);

    // Mock Automatic Analysis on Open
    if (isOpen && isAnalyzing && progress === 0) {
        let p = 0;
        const interval = setInterval(() => {
            p += 5;
            setProgress(p);
            if (p >= 100) {
                clearInterval(interval);
                setIsAnalyzing(false);
            }
        }, 80);
    }

    // Mock Result Data
    const detectedEvent = {
        summary: "Kael was critically injured during the magnet-train heist in Sector 7. Elias successfully retrieved the data core but the team is now being pursued by the Syndicate.",
        entitiesAffected: ['Kael (Health: Critical)', 'Faction: The Syndicate (Hostile)', 'Item: Data Core (Acquired)']
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in" onClick={onClose}>
            <div className="w-full max-w-lg bg-[#0d0a1f] border border-white/10 rounded-xl shadow-2xl overflow-hidden flex flex-col" onClick={(e) => e.stopPropagation()}>

                {/* Header */}
                <div className="p-4 border-b border-white/5 bg-[#1A172E] flex justify-between items-center">
                    <h3 className="text-sm font-bold text-white flex items-center gap-2">
                        <span className="material-symbols-outlined text-[hsl(165,100%,38%)]">history_edu</span>
                        Auto-detect Context
                    </h3>
                    <IconButton icon="close" size="sm" onClick={onClose} />
                </div>

                {/* Content */}
                <div className="p-6 min-h-[200px] flex flex-col justify-center">
                    {isAnalyzing ? (
                        <div className="text-center space-y-4">
                            <div className="relative w-16 h-16 mx-auto">
                                <svg className="w-full h-full animate-spin text-[hsl(165,100%,38%)]" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-white font-bold animate-pulse">Scanning Chapter Content...</h4>
                                <p className="text-sm text-slate-500 mt-1">AI is analyzing new narrative developments</p>
                            </div>
                            <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden max-w-xs mx-auto">
                                <div className="h-full bg-[hsl(165,100%,38%)] transition-all duration-100" style={{ width: `${progress}%` }} />
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-4 animate-slide-up">
                            <div className="bg-white/5 border border-white/5 rounded-lg p-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="material-symbols-outlined text-[hsl(165,100%,38%)] text-lg">bolt</span>
                                    <span className="text-xs font-bold text-[hsl(165,100%,38%)] uppercase tracking-widest">New Event Detected</span>
                                </div>
                                <p className="text-sm text-slate-200 leading-relaxed">
                                    {detectedEvent.summary}
                                </p>
                            </div>

                            <div>
                                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2">Context Updates</span>
                                <div className="flex flex-wrap gap-2">
                                    {detectedEvent.entitiesAffected.map((entity, i) => (
                                        <span key={i} className="px-2 py-1 rounded bg-white/5 border border-white/10 text-xs text-slate-300">
                                            {entity}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer */}
                {!isAnalyzing && (
                    <div className="p-4 border-t border-white/5 bg-[#0d0a1f] flex justify-end gap-2 animate-fade-in">
                        <Button variant="ghost" onClick={onClose}>Discard</Button>
                        <Button
                            onClick={() => {
                                alert("RAG Context Updated! (Mock)");
                                onClose();
                            }}
                            className="bg-[hsl(165,100%,38%)] text-[#0d0a1f]"
                            icon="check_circle"
                        >
                            Confirm Update
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
}
