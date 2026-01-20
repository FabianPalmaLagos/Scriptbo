import { Metadata } from 'next';
import Link from 'next/link';
import { Button, IconButton } from '@/components/ui';

export const metadata: Metadata = {
    title: 'Elias Thorne | Story Bible | Scriptbo',
};

export default function CharacterProfilePage() {
    return (
        <>
            {/* Top Bar / Breadcrumbs */}
            <header className="relative z-10 flex items-center justify-between px-8 py-6 border-b border-white/5">
                <div className="flex items-center gap-2 text-sm">
                    <Link href="/story-bible" className="text-slate-400 hover:text-[hsl(165,100%,38%)] transition-colors">
                        Story Bible
                    </Link>
                    <span className="material-symbols-outlined text-slate-600 text-[16px]">chevron_right</span>
                    <Link href="/story-bible/characters" className="text-slate-400 hover:text-[hsl(165,100%,38%)] transition-colors">
                        Characters
                    </Link>
                    <span className="material-symbols-outlined text-slate-600 text-[16px]">chevron_right</span>
                    <span className="text-white font-medium">Elias Thorne</span>
                </div>
                <div className="flex items-center gap-3">
                    <span className="text-xs text-slate-400">Last saved 2m ago</span>
                    <Button variant="secondary" icon="share">Share</Button>
                </div>
            </header>

            {/* Scrollable Content */}
            <div className="relative z-10 flex-1 overflow-y-auto p-4 md:p-8">
                <div className="max-w-7xl mx-auto h-full flex flex-col lg:flex-row gap-6">

                    {/* Left Column: Character Identity Card */}
                    <div className="w-full lg:w-[340px] flex flex-col gap-6 flex-shrink-0">
                        <div className="glass-panel-heavy rounded-2xl p-6 shadow-glass relative overflow-hidden group">
                            {/* Decorative gradient blob */}
                            <div className="blob-gradient -top-20 -right-20" />

                            <div className="relative flex flex-col items-center">
                                {/* Avatar */}
                                <div className="relative mb-5">
                                    <div className="w-40 h-40 rounded-2xl overflow-hidden ring-4 ring-white/5 shadow-2xl">
                                        <div
                                            className="w-full h-full bg-cover bg-center transform transition-transform duration-500 hover:scale-110"
                                            style={{
                                                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAyXRlx34bIU-hohuK4ESSKcCfi6Zy6V9NTwe41rmVcuHlYFd45Q17GTAwsQ4wAtVl66DZ1pN5530oNePxv-rfdZ-bJ2v5PnW0qCgFDUWcSN8iKTkG1xFX7JsXI-kFw9uoQsmlj1F9znqJS-mBN_Gx1bN2jXcviKVaq0S2ciY9BUh8yk5LcJT1ysRj4AV5oLTvgJAZK-x7v3cK4lSYaeiMYFJnIFR8e7G2bYE7YaJjnGNZDRzb-5XvjomM0ILbeLdfddcq-c5KP8I-_')`,
                                            }}
                                        />
                                    </div>
                                    <div className="badge-status absolute -bottom-3 -right-3 shadow-lg">
                                        <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                                        <span className="text-slate-300 px-1">Active</span>
                                    </div>
                                </div>

                                <h2 className="text-2xl font-bold text-white mb-1 tracking-tight">Elias Thorne</h2>
                                <p className="text-[hsl(165,100%,38%)] font-medium text-sm uppercase tracking-widest mb-6">
                                    Protagonist / Anti-Hero
                                </p>

                                {/* Quick Stats */}
                                <div className="w-full grid grid-cols-2 gap-3 mb-6">
                                    <div className="card-stats">
                                        <span className="block text-slate-400 text-xs mb-1">Age</span>
                                        <span className="block text-white font-semibold">34</span>
                                    </div>
                                    <div className="card-stats">
                                        <span className="block text-slate-400 text-xs mb-1">MBTI</span>
                                        <span className="block text-white font-semibold">INTJ</span>
                                    </div>
                                </div>

                                {/* Details */}
                                <div className="w-full flex flex-col gap-0 border-t border-white/10 pt-4">
                                    <DetailRow label="Occupation" value="Quantum Physicist" />
                                    <DetailRow label="Archetype" value="Cynical Idealist" />
                                    <DetailRow label="Goal" value="Reverse Entropy" isLast />
                                </div>

                                {/* Tags */}
                                <div className="w-full pt-4 flex flex-wrap gap-2">
                                    <span className="tag">Brooding</span>
                                    <span className="tag">Brilliant</span>
                                    <span className="tag">Obsessive</span>
                                </div>
                            </div>
                        </div>

                        {/* Character Arc Progress */}
                        <div className="glass-panel rounded-xl p-5">
                            <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                                <span className="material-symbols-outlined text-[hsl(165,100%,38%)] text-sm">trending_up</span>
                                Character Arc
                            </h3>
                            <div className="space-y-4">
                                <ProgressItem label="Redemption" value={45} color="primary" />
                                <ProgressItem label="Sanity" value={20} color="danger" />
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Narrative Panels */}
                    <div className="flex-1 flex flex-col h-full min-h-[600px]">
                        {/* Tabs */}
                        <div className="flex items-center gap-6 border-b border-white/10 mb-6 px-2 overflow-x-auto">
                            <button className="tab tab-active">Backstory</button>
                            <button className="tab">Appearance</button>
                            <button className="tab">Psychology</button>
                            <button className="tab">Relationships</button>
                            <button className="tab">Voice & Dialogue</button>
                        </div>

                        {/* Content Editor Area */}
                        <div className="glass-panel flex-1 rounded-2xl p-8 relative flex flex-col group/editor">
                            {/* Toolbar overlay */}
                            <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover/editor:opacity-100 transition-opacity">
                                <IconButton icon="edit" />
                                <IconButton icon="history_edu" />
                            </div>

                            <article className="prose-scriptbo">
                                <h3>Origins: The Great Blackout</h3>
                                <p>
                                    Elias was born during the chaos of the Great Blackout of '42, a singular event
                                    that defined the failing infrastructure of the Neo-Sector. Raised in the ruins
                                    of the Old Library, his childhood was less about play and more about survival
                                    through information. He learned to read before he learned to run, finding
                                    solace in dusty physics textbooks while the world outside burned in neon fire.
                                </p>
                                <p>
                                    His father, a disgraced engineer, taught him that the universe was a machine
                                    that could be fixed. This belief became Elias's central dogma and his ultimate
                                    tragedy. When the reactor leak took his parents, Elias didn't cry—he calculated
                                    the decay rate.
                                </p>

                                <blockquote>
                                    <span className="quote-label">Core Memory:</span>
                                    "The smell of ozone and burning paper. The sound of the Geiger counter clicking
                                    like a frantic metronome. The realization that safety is a statistical anomaly."
                                </blockquote>

                                <h3>The Institute Years</h3>
                                <p>
                                    By twenty, he was the youngest fellow at the Thorne Institute (no relation, a
                                    cruel irony he never acknowledged). His work on localized entropy reversal was
                                    dismissed as pseudoscience until the "Incident" in Sector 4 proved that time
                                    could, in fact, stutter.
                                </p>
                            </article>

                            {/* AI Suggestion */}
                            <div className="ai-suggestion mt-8 w-fit">
                                <div className="ai-suggestion-icon">
                                    <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
                                </div>
                                <span className="text-sm text-[hsl(165,100%,38%)] font-medium group-hover/ai:text-white transition-colors">
                                    AI Suggestion: Expand on his rivalry with Dr. Aris during the Institute years?
                                </span>
                            </div>
                        </div>

                        {/* Relationships Teaser */}
                        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="glass-panel rounded-xl p-5">
                                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                                    Key Relationship
                                </h4>
                                <div className="flex items-center gap-4">
                                    <div
                                        className="h-12 w-12 rounded-full bg-cover bg-center ring-2 ring-red-500/30 grayscale"
                                        style={{
                                            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAC-b3Z3YiQ12cC6oj-1-TL53WKPzI1rpUJRcvVjo4GBuXCkZU6pqR0fNRDmxBmxwiK8SChw40cg-6kujOmNOpqcrSrnzU_F6cJfN68UvZPkox3PaCySDrvaZgAli2bLSiNVaMzM1zcuiYHPOYOh13h7TKeF2PkjzYxzmN_8CWP1sdyb33SGOuHDWohmf97b-payKuQnzsw47vk1bgqYvyapAi0f-suF3EM4VVRbnvc4ROsHoXpAcYTX_f-dB8ITwTcBFq-LGmPhnnf')`,
                                        }}
                                    />
                                    <div>
                                        <p className="text-white font-medium">Dr. Aris</p>
                                        <p className="text-xs text-red-400">Mentor / Antagonist (Deceased)</p>
                                    </div>
                                </div>
                            </div>

                            <Link
                                href="/story-bible/characters/elias-thorne/relationships/new"
                                className="glass-panel rounded-xl p-5 border-dashed border-2 border-white/10 flex items-center justify-center text-slate-500 hover:text-[hsl(165,100%,38%)] hover:border-[hsl(165,100%,38%)]/30 hover:bg-white/5 transition-all cursor-pointer"
                            >
                                <span className="flex items-center gap-2 text-sm font-medium">
                                    <span className="material-symbols-outlined">add</span>
                                    Add Relationship
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Action Button */}
            <button className="fab">
                <span className="material-symbols-outlined text-[24px] animate-pulse">stars</span>
                <span>Brainstorm</span>
            </button>
        </>
    );
}

// Sub-components

function DetailRow({ label, value, isLast }: { label: string; value: string; isLast?: boolean }) {
    return (
        <div className={`flex justify-between py-3 ${!isLast ? 'border-b border-white/5' : ''}`}>
            <span className="text-slate-400 text-sm">{label}</span>
            <span className="text-white text-sm font-medium text-right">{value}</span>
        </div>
    );
}

function ProgressItem({ label, value, color }: { label: string; value: number; color: 'primary' | 'danger' }) {
    const colorClasses = {
        primary: 'text-[hsl(165,100%,38%)]',
        danger: 'text-red-400',
    };

    const barClasses = {
        primary: 'progress-bar-fill-primary',
        danger: 'progress-bar-fill-danger',
    };

    return (
        <div>
            <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-400">{label}</span>
                <span className={colorClasses[color]}>{value}%</span>
            </div>
            <div className="progress-bar">
                <div className={`progress-bar-fill ${barClasses[color]}`} style={{ width: `${value}%` }} />
            </div>
        </div>
    );
}
