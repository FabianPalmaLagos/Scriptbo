import Link from 'next/link';
import { Button } from '@/components/ui';

export default function LocationsListPage() {
    return (
        <>
            <header className="relative z-10 flex items-center justify-between px-8 py-6 border-b border-white/5">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                    <Link href="/story-bible" className="hover:text-[hsl(165,100%,38%)] transition-colors">Story Bible</Link>
                    <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                    <span className="text-white font-medium">Locations</span>
                </div>
                <Button icon="add">New Location</Button>
            </header>

            <div className="relative z-10 flex-1 overflow-y-auto p-4 md:p-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-between mb-8">
                        <h1 className="text-3xl font-bold text-white">Locations</h1>
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-[18px]">search</span>
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="bg-[hsl(252,29%,14%)] border border-white/5 rounded-lg py-1.5 pl-9 pr-3 text-sm text-white focus:outline-none focus:border-[hsl(165,100%,38%)]/50 transition-colors"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        {/* List View */}
                        <LocationListItem
                            name="The Thorne Institute"
                            type="Research Facility"
                            description="A secretive research center specializing in quantum physics and temporal mechanics. Located in the upper sector."
                            image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"
                            scenes={8}
                            href="/story-bible/locations/thorne-institute"
                        />
                        <LocationListItem
                            name="Neo-Sector 7"
                            type="Urban District"
                            description="The ruins of the Old Library, now a sprawling urban wasteland controlled by the Triad. Features neon markets and acid rain."
                            image="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2670&auto=format&fit=crop"
                            scenes={15}
                            href="/story-bible/locations/neo-sector-7"
                        />
                        <LocationListItem
                            name="The Abyss"
                            type="Natural Feature"
                            description="A massive chasm running through the center of the city. Rumored to be bottomless."
                            image="https://images.unsplash.com/photo-1516542076529-1ea3854896f2?q=80&w=2673&auto=format&fit=crop"
                            scenes={3}
                            href="/story-bible/locations/the-abyss"
                        />
                    </div>

                </div>
            </div>
        </>
    );
}

function LocationListItem({ name, type, description, image, scenes, href }: { name: string; type: string; description: string; image: string; scenes: number; href: string }) {
    return (
        <Link href={href} className="glass-panel p-4 rounded-xl flex gap-6 group hover:border-[hsl(165,100%,38%)]/30 transition-all items-center">
            <div className="h-24 w-32 rounded-lg overflow-hidden flex-shrink-0 relative">
                <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url('${image}')` }}
                />
            </div>
            <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-[hsl(165,100%,38%)] uppercase tracking-wide">{type}</span>
                    <span className="h-1 w-1 rounded-full bg-slate-600"></span>
                    <span className="text-xs text-slate-400">{scenes} scenes linked</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[hsl(165,100%,38%)] transition-colors">{name}</h3>
                <p className="text-sm text-slate-400 line-clamp-2">{description}</p>
            </div>
            <div className="px-4">
                <span className="material-symbols-outlined text-slate-500 group-hover:text-[hsl(165,100%,38%)] transition-colors">chevron_right</span>
            </div>
        </Link>
    );
}
