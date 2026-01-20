import Link from 'next/link';
import { Button } from '@/components/ui';

export default function StoryBiblePage() {
    return (
        <>
            {/* Header */}
            <header className="relative z-10 flex items-center justify-between px-8 py-6 border-b border-white/5">
                <div className="flex items-center gap-2 text-sm">
                    <span className="text-white font-medium">Story Bible</span>
                </div>
                <div className="flex items-center gap-3">
                    <Button variant="secondary" icon="add">
                        New Character
                    </Button>
                </div>
            </header>

            {/* Content */}
            <div className="relative z-10 flex-1 overflow-y-auto p-4 md:p-8">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-3xl font-bold text-white mb-2">Story Bible</h1>
                    <p className="text-slate-400 mb-8">
                        Manage your characters, locations, and world-building elements.
                    </p>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        <StatCard icon="diversity_3" label="Characters" value="12" />
                        <StatCard icon="location_on" label="Locations" value="8" />
                        <StatCard icon="public" label="World Elements" value="24" />
                        <StatCard icon="event_note" label="Timeline Events" value="45" />
                    </div>

                    {/* Characters Grid */}
                    <div className="mb-8">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                                <span className="material-symbols-outlined text-[hsl(165,100%,38%)]">diversity_3</span>
                                Characters
                            </h2>
                            <Link href="/story-bible/characters" className="text-sm text-[hsl(165,100%,38%)] hover:underline">
                                View all →
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <CharacterCard
                                name="Elias Thorne"
                                role="Protagonist / Anti-Hero"
                                image="https://lh3.googleusercontent.com/aida-public/AB6AXuAyXRlx34bIU-hohuK4ESSKcCfi6Zy6V9NTwe41rmVcuHlYFd45Q17GTAwsQ4wAtVl66DZ1pN5530oNePxv-rfdZ-bJ2v5PnW0qCgFDUWcSN8iKTkG1xFX7JsXI-kFw9uoQsmlj1F9znqJS-mBN_Gx1bN2jXcviKVaq0S2ciY9BUh8yk5LcJT1ysRj4AV5oLTvgJAZK-x7v3cK4lSYaeiMYFJnIFR8e7G2bYE7YaJjnGNZDRzb-5XvjomM0ILbeLdfddcq-c5KP8I-_"
                                tags={['Brooding', 'Brilliant', 'Obsessive']}
                                href="/story-bible/characters/elias-thorne"
                            />
                            <CharacterCard
                                name="Dr. Aris"
                                role="Mentor / Antagonist"
                                image="https://lh3.googleusercontent.com/aida-public/AB6AXuAC-b3Z3YiQ12cC6oj-1-TL53WKPzI1rpUJRcvVjo4GBuXCkZU6pqR0fNRDmxBmxwiK8SChw40cg-6kujOmNOpqcrSrnzU_F6cJfN68UvZPkox3PaCySDrvaZgAli2bLSiNVaMzM1zcuiYHPOYOh13h7TKeF2PkjzYxzmN_8CWP1sdyb33SGOuHDWohmf97b-payKuQnzsw47vk1bgqYvyapAi0f-suF3EM4VVRbnvc4ROsHoXpAcYTX_f-dB8ITwTcBFq-LGmPhnnf"
                                tags={['Stern', 'Manipulative', 'Tragic']}
                                deceased
                                href="/story-bible/characters/dr-aris"
                            />
                            <AddNewCard label="Add Character" href="/story-bible/characters/new" />
                        </div>
                    </div>

                    {/* Locations Grid */}
                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                                <span className="material-symbols-outlined text-[hsl(165,100%,38%)]">location_on</span>
                                Locations
                            </h2>
                            <Link href="/story-bible/locations" className="text-sm text-[hsl(165,100%,38%)] hover:underline">
                                View all →
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <LocationCard
                                name="The Thorne Institute"
                                type="Research Facility"
                                description="A secretive research center specializing in quantum physics and temporal mechanics."
                            />
                            <LocationCard
                                name="Neo-Sector District 7"
                                type="Urban Area"
                                description="The ruins of the Old Library, now a sprawling urban wasteland."
                            />
                            <AddNewCard label="Add Location" href="/story-bible/locations/new" />
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

function StatCard({ icon, label, value }: { icon: string; label: string; value: string }) {
    return (
        <div className="glass-panel rounded-xl p-4 flex items-center gap-4">
            <div className="h-12 w-12 rounded-lg bg-[hsl(165,100%,38%)]/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-[hsl(165,100%,38%)] text-[24px]">{icon}</span>
            </div>
            <div>
                <p className="text-2xl font-bold text-white">{value}</p>
                <p className="text-xs text-slate-400">{label}</p>
            </div>
        </div>
    );
}

function CharacterCard({
    name,
    role,
    image,
    tags,
    deceased,
    href,
}: {
    name: string;
    role: string;
    image: string;
    tags: string[];
    deceased?: boolean;
    href: string;
}) {
    return (
        <Link href={href} className="glass-panel-heavy rounded-xl p-5 group hover:border-[hsl(165,100%,38%)]/30 transition-all">
            <div className="flex items-start gap-4">
                <div className={`relative h-16 w-16 rounded-xl overflow-hidden ring-2 ${deceased ? 'ring-red-500/30 grayscale' : 'ring-white/10'}`}>
                    <div
                        className="w-full h-full bg-cover bg-center transform transition-transform duration-500 group-hover:scale-110"
                        style={{ backgroundImage: `url('${image}')` }}
                    />
                </div>
                <div className="flex-1">
                    <h3 className="text-white font-semibold group-hover:text-[hsl(165,100%,38%)] transition-colors">{name}</h3>
                    <p className={`text-xs ${deceased ? 'text-red-400' : 'text-[hsl(165,100%,38%)]'} uppercase tracking-wider`}>
                        {role} {deceased && '(Deceased)'}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                        {tags.map((tag) => (
                            <span key={tag} className="tag text-[10px]">{tag}</span>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    );
}

function LocationCard({
    name,
    type,
    description,
}: {
    name: string;
    type: string;
    description: string;
}) {
    return (
        <div className="glass-panel rounded-xl p-5 group hover:border-[hsl(165,100%,38%)]/30 transition-all cursor-pointer">
            <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-[hsl(165,100%,38%)] text-[18px]">location_on</span>
                <span className="text-xs text-slate-400 uppercase tracking-wider">{type}</span>
            </div>
            <h3 className="text-white font-semibold mb-2 group-hover:text-[hsl(165,100%,38%)] transition-colors">{name}</h3>
            <p className="text-sm text-slate-400 line-clamp-2">{description}</p>
        </div>
    );
}

function AddNewCard({ label, href }: { label: string; href: string }) {
    return (
        <Link
            href={href}
            className="glass-panel rounded-xl p-5 border-dashed border-2 border-white/10 flex items-center justify-center text-slate-500 hover:text-[hsl(165,100%,38%)] hover:border-[hsl(165,100%,38%)]/30 hover:bg-white/5 transition-all min-h-[120px]"
        >
            <span className="flex items-center gap-2 text-sm font-medium">
                <span className="material-symbols-outlined">add</span>
                {label}
            </span>
        </Link>
    );
}
