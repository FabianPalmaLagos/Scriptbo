import Link from 'next/link';

export default function WorldPage() {
    return (
        <div className="relative z-10 flex-1 overflow-y-auto p-4 md:p-8">
            <div className="max-w-7xl mx-auto">
                <header className="flex items-center justify-between mb-8">
                    <div>
                        <div className="flex items-center gap-2 text-sm text-slate-400 mb-1">
                            <Link href="/story-bible" className="hover:text-[hsl(165,100%,38%)] transition-colors">Story Bible</Link>
                            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                            <span className="text-white">World</span>
                        </div>
                        <h1 className="text-3xl font-bold text-white">World Building</h1>
                    </div>
                    <button className="btn-primary">
                        <span className="material-symbols-outlined">add</span>
                        Add Element
                    </button>
                </header>

                {/* Categories */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <CategoryCard
                        title="Locations"
                        count={12}
                        icon="location_on"
                        color="text-blue-400"
                        items={["Neo-Sector 7", "The Thorne Institute", "The Abyss"]}
                    />
                    <CategoryCard
                        title="Lore & History"
                        count={8}
                        icon="history_edu"
                        color="text-purple-400"
                        items={["The Great Blackout", "Treaty of 2099", "The Incident"]}
                    />
                    <CategoryCard
                        title="Magic/Tech Systems"
                        count={5}
                        icon="bolt"
                        color="text-[hsl(165,100%,38%)]"
                        items={["Entropy Reversal", "Hard-light Constructs", "Neural Lace"]}
                    />
                </div>

                {/* Recent Updates */}
                <h2 className="text-xl font-bold text-white mb-4">Recent Updates</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <WorldItemCard
                        title="Neo-Sector 7"
                        type="Location"
                        description="A sprawling urban wasteland controlled by the Triad syndicates. Known for its acid rain and neon markets."
                        image="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2670&auto=format&fit=crop"
                    />
                    <WorldItemCard
                        title="Entropy Reversal"
                        type="Physics System"
                        description="The theoretical framework developed by Elias Thorne to stabilize localized time distortions."
                        image="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2670&auto=format&fit=crop"
                    />
                    <WorldItemCard
                        title="The Syndicate"
                        type="Faction"
                        description="The ruling criminal organization that effectively governs the lower sectors."
                        image="https://images.unsplash.com/photo-1555617766-c94804975da3?q=80&w=2670&auto=format&fit=crop"
                    />
                </div>

            </div>
        </div>
    );
}

function CategoryCard({ title, count, icon, color, items }: { title: string; count: number; icon: string; color: string; items: string[] }) {
    return (
        <div className="glass-panel rounded-2xl p-6 group h-full">
            <div className="flex items-center justify-between mb-4">
                <div className={`h-12 w-12 rounded-xl bg-white/5 flex items-center justify-center ${color}`}>
                    <span className="material-symbols-outlined text-[24px]">{icon}</span>
                </div>
                <div className="text-2xl font-bold text-white">{count}</div>
            </div>
            <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[hsl(165,100%,38%)] transition-colors">{title}</h3>
            <ul className="space-y-2">
                {items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-400">
                        <span className={`h-1.5 w-1.5 rounded-full ${color.replace('text-', 'bg-')}`}></span>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

function WorldItemCard({ title, type, description, image }: { title: string; type: string; description: string; image: string }) {
    return (
        <div className="glass-panel p-4 rounded-xl flex gap-4 group hover:bg-white/5 transition-colors cursor-pointer border border-transparent hover:border-white/10">
            <div className="h-20 w-20 rounded-lg overflow-hidden flex-shrink-0 bg-white/5">
                <div
                    className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url('${image}')` }}
                />
            </div>
            <div>
                <span className="text-xs font-bold text-[hsl(165,100%,38%)] uppercase tracking-wide">{type}</span>
                <h3 className="text-white font-bold mb-1 group-hover:text-[hsl(165,100%,38%)] transition-colors">{title}</h3>
                <p className="text-xs text-slate-400 line-clamp-2">{description}</p>
            </div>
        </div>
    );
}
