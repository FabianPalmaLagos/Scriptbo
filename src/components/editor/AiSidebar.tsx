'use client';

import { useState } from 'react';
import { Button, IconButton } from '@/components/ui';
import { cn } from '@/lib/utils';

interface AiSidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

export function AiSidebar({ isOpen, onClose }: AiSidebarProps) {
    if (!isOpen) return null;

    const [activeTab, setActiveTab] = useState<'chat' | 'history'>('chat');
    const [input, setInput] = useState('');
    const [mode, setMode] = useState<'ask' | 'edit'>('ask');
    const [model, setModel] = useState<'gemini-3-pro' | 'gemini-2-flash'>('gemini-3-pro');
    const [currentProject, setCurrentProject] = useState('Echoes of Entropy');

    // Mock Chat Data
    const [messages, setMessages] = useState([
        { role: 'system', content: 'Hello! I\'m Gemini 3. How can I help you with "Echoes of Entropy" today?' },
    ]);

    return (
        <aside className="w-[400px] border-l border-white/5 bg-[#0a0817] flex flex-col z-20 animate-slide-in-right shadow-2xl h-full">

            {/* --- HEADER: Project & Navigation --- */}
            <div className="p-4 border-b border-white/5 bg-[#1A172E]/50 flex items-center justify-between">
                {/* Project Context */}
                <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest mb-1">Context</span>
                    <button className="flex items-center gap-2 text-sm font-bold text-white hover:text-[hsl(165,100%,38%)] transition-colors text-left group">
                        <span className="truncate max-w-[180px] group-hover:underline decoration-[hsl(165,100%,38%)] underline-offset-4 decoration-2">{currentProject}</span>
                        <span className="material-symbols-outlined text-[16px] text-slate-500 group-hover:text-[hsl(165,100%,38%)]">expand_more</span>
                    </button>
                </div>

                {/* Actions: History, New Chat, Close */}
                <div className="flex items-center gap-1">
                    <IconButton
                        icon="history"
                        size="sm"
                        onClick={() => setActiveTab(activeTab === 'chat' ? 'history' : 'chat')}
                        className={activeTab === 'history' ? "text-[hsl(165,100%,38%)] bg-[hsl(165,100%,38%)]/10" : "text-slate-400 hover:text-white"}
                        title="History"
                    />
                    <IconButton
                        icon="add"
                        size="sm"
                        onClick={() => { setActiveTab('chat'); setMessages([]); }}
                        className="text-slate-400 hover:text-white"
                        title="New Chat"
                    />
                    <div className="w-[1px] h-4 bg-white/10 mx-1" />
                    <IconButton icon="close" size="sm" onClick={onClose} />
                </div>
            </div>

            {/* --- MAIN CONTENT: Chat or History --- */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-4">
                {activeTab === 'chat' ? (
                    <>
                        {messages.length === 0 && (
                            <div className="flex flex-col items-center justify-center h-full text-slate-500 opacity-50">
                                <span className="material-symbols-outlined text-4xl mb-2">auto_awesome</span>
                                <p className="text-xs">Start a new conversation</p>
                            </div>
                        )}
                        {messages.map((msg, idx) => (
                            <div key={idx} className={cn(
                                "max-w-[90%] rounded-2xl p-3 text-sm leading-relaxed animate-fade-in",
                                msg.role === 'user'
                                    ? "ml-auto bg-[hsl(165,100%,38%)]/10 border border-[hsl(165,100%,38%)]/20 text-[hsl(165,100%,38%)]"
                                    : "bg-white/5 border border-white/5 text-slate-300"
                            )}>
                                {msg.content}
                            </div>
                        ))}
                    </>
                ) : (
                    <div className="space-y-2 animate-fade-in">
                        <h3 className="text-[10px] uppercase font-bold text-slate-500 tracking-widest mb-3">Recent Sessions</h3>
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 cursor-pointer transition-colors group">
                                <div className="flex justify-between items-start mb-1">
                                    <span className="text-xs font-bold text-white group-hover:text-[hsl(165,100%,38%)]">Chapter {i} Brainstorming</span>
                                    <span className="text-[10px] text-slate-500">2h ago</span>
                                </div>
                                <p className="text-xs text-slate-400 truncate">Thinking about the protagonist's motivation...</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* --- FOOTER: Advanced Input Area --- */}
            <div className="p-4 border-t border-white/5 bg-[#0d0a1f]">

                {/* Controls Row: Model & Mode Dropdowns */}
                <div className="flex items-center justify-between mb-3 px-1">
                    {/* Model Selector */}
                    <div className="relative group">
                        <select
                            value={model}
                            onChange={(e) => setModel(e.target.value as any)}
                            className="appearance-none bg-transparent text-[10px] font-bold uppercase text-slate-400 hover:text-white cursor-pointer focus:outline-none pr-4 transition-colors"
                        >
                            <option value="gemini-3-pro" className="bg-[#0a0817] text-white">Gemini 3 Pro</option>
                            <option value="gemini-2-flash" className="bg-[#0a0817] text-white">Gemini 2 Flash</option>
                        </select>
                        <span className="material-symbols-outlined text-[10px] text-slate-500 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none group-hover:text-white">expand_more</span>
                    </div>

                    {/* Mode Selector */}
                    <div className="relative group">
                        <select
                            value={mode}
                            onChange={(e) => setMode(e.target.value as any)}
                            className={cn(
                                "appearance-none bg-transparent text-[10px] font-bold uppercase cursor-pointer focus:outline-none pr-4 transition-colors",
                                mode === 'ask' ? "text-[hsl(165,100%,38%)]" : "text-purple-500"
                            )}
                        >
                            <option value="ask" className="bg-[#0a0817] text-[hsl(165,100%,38%)]">Ask Mode</option>
                            <option value="edit" className="bg-[#0a0817] text-purple-500">Edit Mode</option>
                        </select>
                        <span className={cn(
                            "material-symbols-outlined text-[10px] absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none",
                            mode === 'ask' ? "text-[hsl(165,100%,38%)]" : "text-purple-500"
                        )}>expand_more</span>
                    </div>
                </div>

                {/* Input Field */}
                <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[hsl(165,100%,38%)] to-blue-500 rounded-2xl blur opacity-0 group-focus-within:opacity-20 transition duration-500"></div>
                    <div className="relative flex flex-col bg-[#1A172E] border border-white/10 rounded-2xl overflow-hidden focus-within:border-white/20 transition-colors">
                        <textarea
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder={mode === 'ask' ? "Ask something or mention @..." : "Describe changes to apply..."}
                            className="w-full bg-transparent p-3 text-sm text-white focus:outline-none placeholder-slate-600 resize-none min-h-[50px] max-h-[150px] custom-scrollbar"
                            rows={2}
                        />

                        {/* Attachments & Send */}
                        <div className="flex items-center justify-between px-2 pb-2">
                            <div className="flex gap-1">
                                <IconButton icon="image" size="sm" className="text-slate-400 hover:text-white" />
                                <IconButton icon="mic" size="sm" className="text-slate-400 hover:text-white" />
                                <span className="w-[1px] h-4 bg-white/10 mx-1 self-center" />
                                <IconButton icon="alternate_email" size="sm" className="text-[hsl(165,100%,38%)] hover:bg-[hsl(165,100%,38%)]/10" title="Mention Context" />
                            </div>

                            <button className={cn(
                                "p-2 rounded-xl transition-all flex items-center gap-2",
                                input.trim() ? "bg-[hsl(165,100%,38%)] text-[#0d0a1f] hover:scale-105" : "bg-white/5 text-slate-600 cursor-not-allowed"
                            )}>
                                {mode === 'edit' ? <span className="material-symbols-outlined text-[18px]">auto_fix_high</span> : <span className="material-symbols-outlined text-[18px]">arrow_upward</span>}
                            </button>
                        </div>
                    </div>
                </div>

                <p className="text-[9px] text-slate-500 text-center mt-3 font-mono">
                    Use <span className="text-[hsl(165,100%,38%)]">@</span> to reference Characters or Locations.
                </p>
            </div>
        </aside>
    );
}
