'use client';

import { useState } from 'react';
import { Button, IconButton } from '@/components/ui';
import { cn } from '@/lib/utils';

interface SmartImportModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function SmartImportModal({ isOpen, onClose }: SmartImportModalProps) {
    if (!isOpen) return null;

    const [step, setStep] = useState<'upload' | 'analyzing' | 'review' | 'success'>('upload');
    const [file, setFile] = useState<File | null>(null);
    const [progress, setProgress] = useState(0);

    // Mock Simulation
    const startAnalysis = () => {
        setStep('analyzing');
        let p = 0;
        const interval = setInterval(() => {
            p += 2;
            setProgress(p);
            if (p >= 100) {
                clearInterval(interval);
                setStep('review');
            }
        }, 50);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        const droppedFile = e.dataTransfer.files[0];
        if (droppedFile && droppedFile.type === 'application/pdf') {
            setFile(droppedFile);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
            <div className="w-full max-w-2xl bg-[#0d0a1f] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">

                {/* Header */}
                <div className="p-6 border-b border-white/5 flex justify-between items-center bg-[#1A172E]/50">
                    <div>
                        <h2 className="text-xl font-bold text-white flex items-center gap-2">
                            <span className="material-symbols-outlined text-[hsl(165,100%,38%)]">auto_awesome</span>
                            Smart Import
                        </h2>
                        <p className="text-sm text-slate-400 mt-1">Transform your PDF into a structured Scriptbo Project</p>
                    </div>
                    <IconButton icon="close" onClick={onClose} />
                </div>

                {/* Content */}
                <div className="p-8 flex-1 flex flex-col items-center justify-center min-h-[300px]">

                    {step === 'upload' && (
                        <div
                            className={cn(
                                "w-full h-64 border-2 border-dashed rounded-2xl flex flex-col items-center justify-center transition-all bg-white/5",
                                file ? "border-[hsl(165,100%,38%)] bg-[hsl(165,100%,38%)]/5" : "border-white/10 hover:border-white/20 hover:bg-white/10"
                            )}
                            onDragOver={(e) => e.preventDefault()}
                            onDrop={handleDrop}
                        >
                            {file ? (
                                <div className="text-center">
                                    <span className="material-symbols-outlined text-4xl text-[hsl(165,100%,38%)] mb-4">description</span>
                                    <p className="text-lg font-bold text-white">{file.name}</p>
                                    <p className="text-sm text-slate-500 mt-2">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                                    <Button onClick={startAnalysis} className="mt-6 bg-[hsl(165,100%,38%)] text-[#0d0a1f] hover:bg-[hsl(165,100%,38%)]/90">
                                        Start Analysis
                                        <span className="material-symbols-outlined ml-2 text-lg">arrow_forward</span>
                                    </Button>
                                    <button onClick={() => setFile(null)} className="block mt-4 text-xs text-slate-500 hover:text-white underline">Remove file</button>
                                </div>
                            ) : (
                                <div className="text-center pointer-events-none">
                                    <span className="material-symbols-outlined text-4xl text-slate-500 mb-4">cloud_upload</span>
                                    <p className="text-lg font-bold text-white">Drag & drop your PDF here</p>
                                    <p className="text-sm text-slate-500 mt-2">or click to browse</p>
                                </div>
                            )}
                            {/* Hidden Input for Click */}
                            {!file && (
                                <input
                                    type="file"
                                    accept=".pdf"
                                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                                    className="absolute inset-0 opacity-0 cursor-pointer"
                                />
                            )}
                        </div>
                    )}

                    {step === 'analyzing' && (
                        <div className="w-full max-w-md text-center">
                            <div className="relative w-24 h-24 mx-auto mb-6">
                                <svg className="w-full h-full animate-spin-slow text-[hsl(165,100%,38%)]" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                <span className="absolute inset-0 flex items-center justify-center font-bold text-[hsl(165,100%,38%)]">{progress}%</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Analyzing your Story...</h3>
                            <div className="space-y-2 text-sm text-slate-400">
                                <p className={progress > 10 ? "text-[hsl(165,100%,38%)] transition-colors" : ""}>Extracting visible text...</p>
                                <p className={progress > 40 ? "text-[hsl(165,100%,38%)] transition-colors" : ""}>Identifying Chapters (12 detected)...</p>
                                <p className={progress > 70 ? "text-[hsl(165,100%,38%)] transition-colors" : ""}>Building Character Profiles...</p>
                            </div>
                        </div>
                    )}

                    {step === 'review' && (
                        <div className="w-full animate-slide-up">
                            <div className="grid grid-cols-3 gap-4 mb-8">
                                <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
                                    <span className="block text-2xl font-bold text-white mb-1">12</span>
                                    <span className="text-xs text-slate-500 uppercase tracking-wider">Chapters</span>
                                </div>
                                <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
                                    <span className="block text-2xl font-bold text-[hsl(165,100%,38%)] mb-1">8</span>
                                    <span className="text-xs text-slate-500 uppercase tracking-wider">Characters</span>
                                </div>
                                <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
                                    <span className="block text-2xl font-bold text-purple-400 mb-1">3</span>
                                    <span className="text-xs text-slate-500 uppercase tracking-wider">Locations</span>
                                </div>
                            </div>

                            <div className="bg-[#1A172E] rounded-xl p-4 border border-white/5 mb-8 max-h-40 overflow-y-auto custom-scrollbar">
                                <h4 className="text-xs font-bold text-slate-500 uppercase mb-3">Detected Structure</h4>
                                <ul className="space-y-2 text-sm text-slate-300">
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <li key={i} className="flex justify-between border-b border-white/5 pb-2">
                                            <span>Chapter {i}</span>
                                            <span className="text-slate-500">~2,400 words</span>
                                        </li>
                                    ))}
                                    <li className="text-center text-xs text-slate-500 pt-2">+ 7 more chapters</li>
                                </ul>
                            </div>

                            <div className="flex justify-end gap-3">
                                <Button variant="secondary" onClick={() => setStep('upload')}>Cancel</Button>
                                <Button onClick={onClose} className="bg-[hsl(165,100%,38%)] text-[#0d0a1f] px-8">
                                    Import Project
                                </Button>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}
