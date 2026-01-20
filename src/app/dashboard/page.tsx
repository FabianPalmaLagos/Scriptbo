import Link from 'next/link';
import { Button, IconButton } from '@/components/ui';

export default function DashboardPage() {
    return (
        <>
            <header className="relative z-10 flex items-center justify-between px-8 py-6 border-b border-white/5">
                <h1 className="text-xl font-bold text-white tracking-tight">Projects</h1>
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-[20px]">search</span>
                        <input
                            type="text"
                            placeholder="Search projects..."
                            className="bg-[hsl(252,29%,14%)] border border-white/5 rounded-lg py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-[hsl(165,100%,38%)]/50 transition-colors w-64"
                        />
                    </div>
                    <Button icon="add">New Project</Button>
                </div>
            </header>

            <div className="relative z-10 flex-1 overflow-y-auto p-8">
                <div className="max-w-7xl mx-auto">

                    {/* Recent Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {/* Project Card: Active */}
                        <ProjectCard
                            title="Echoes of Entropy"
                            genre="Sci-Fi / Noir"
                            lastEdited="2 mins ago"
                            wordCount={45200}
                            progress={35}
                            coverImage="https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=2508&auto=format&fit=crop"
                            status="active"
                        />

                        {/* Project Card */}
                        <ProjectCard
                            title="The Crimson Pact"
                            genre="Fantasy / Romance"
                            lastEdited="2 days ago"
                            wordCount={12500}
                            progress={12}
                            coverImage="https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?q=80&w=2574&auto=format&fit=crop"
                        />

                        {/* Project Card */}
                        <ProjectCard
                            title="Neon Tokyo Protocol"
                            genre="Cyberpunk / Thriller"
                            lastEdited="1 week ago"
                            wordCount={89000}
                            progress={78}
                            coverImage="https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=2670&auto=format&fit=crop"
                        />

                        {/* Create New Card */}
                        <button className="group flex flex-col items-center justify-center gap-4 h-[320px] rounded-2xl border-2 border-dashed border-white/10 hover:border-[hsl(165,100%,38%)]/50 hover:bg-white/5 transition-all">
                            <div className="h-16 w-16 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-3xl text-slate-400 group-hover:text-[hsl(165,100%,38%)]">add</span>
                            </div>
                            <div className="text-center">
                                <p className="text-white font-semibold">Create New Project</p>
                                <p className="text-sm text-slate-500 mt-1">Novel, Script, Anime, Manhwa...</p>
                            </div>
                        </button>

                    </div>
                </div>
            </div>
        </>
    );
}

function ProjectCard({
    title,
    genre,
    lastEdited,
    wordCount,
    progress,
    coverImage,
    status
}: {
    title: string;
    genre: string;
    lastEdited: string;
    wordCount: number;
    progress: number;
    coverImage: string;
    status?: 'active';
}) {
    return (
        <Link href="/editor" className="group relative flex flex-col h-[320px] rounded-2xl overflow-hidden bg-[hsl(252,29%,14%)] border border-white/5 hover:border-[hsl(165,100%,38%)]/50 hover:shadow-neon-hover transition-all">
            {/* Cover Image Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(252,29%,14%)] via-[hsl(252,29%,14%)]/50 to-transparent z-10" />
                <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${coverImage}')` }}
                />
            </div>

            {/* Status Badge */}
            {status === 'active' && (
                <div className="absolute top-4 right-4 z-20 badge-status bg-black/50 backdrop-blur-md border border-[hsl(165,100%,38%)]/30 text-[hsl(165,100%,38%)] shadow-lg">
                    <div className="h-1.5 w-1.5 rounded-full bg-[hsl(165,100%,38%)] animate-pulse" />
                    Writing Now
                </div>
            )}

            {/* Content */}
            <div className="relative z-20 mt-auto p-6 flex flex-col gap-4">
                <div>
                    <p className="text-xs font-bold text-[hsl(165,100%,38%)] uppercase tracking-wider mb-1 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        {genre}
                    </p>
                    <h3 className="text-2xl font-bold text-white leading-tight group-hover:text-[hsl(165,100%,38%)] transition-colors">
                        {title}
                    </h3>
                    <p className="text-sm text-slate-300 mt-1 flex items-center gap-2">
                        <span className="material-symbols-outlined text-[16px]">schedule</span>
                        Edited {lastEdited}
                    </p>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 gap-2 py-3 border-t border-white/10 bg-black/20 -mx-6 px-6 -mb-6 backdrop-blur-sm">
                    <div>
                        <span className="text-xs text-slate-400 block">Words</span>
                        <span className="text-sm font-semibold text-white">{wordCount.toLocaleString()}</span>
                    </div>
                    <div>
                        <span className="text-xs text-slate-400 block mb-1">Progress</span>
                        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-[hsl(165,100%,38%)] rounded-full"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
