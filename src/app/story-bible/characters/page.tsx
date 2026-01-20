import Link from 'next/link';
import { Button } from '@/components/ui';

export default function CharactersListPage() {
    return (
        <>
            <header className="relative z-10 flex items-center justify-between px-8 py-6 border-b border-white/5">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                    <Link href="/story-bible" className="hover:text-[hsl(165,100%,38%)] transition-colors">Story Bible</Link>
                    <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                    <span className="text-white font-medium">Characters</span>
                </div>
                <Button icon="add">New Character</Button>
            </header>

            <div className="relative z-10 flex-1 overflow-y-auto p-4 md:p-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-between mb-8">
                        <h1 className="text-3xl font-bold text-white">All Characters</h1>

                        {/* Filter/Sort */}
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-[18px]">search</span>
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="bg-[hsl(252,29%,14%)] border border-white/5 rounded-lg py-1.5 pl-9 pr-3 text-sm text-white focus:outline-none focus:border-[hsl(165,100%,38%)]/50 transition-colors"
                                />
                            </div>
                            <select className="bg-[hsl(252,29%,14%)] border border-white/5 rounded-lg py-1.5 px-3 text-sm text-slate-300 focus:outline-none">
                                <option>All Roles</option>
                                <option>Protagonist</option>
                                <option>Antagonist</option>
                                <option>Supporting</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {/* Character Cards */}
                        <CharacterGridItem
                            name="Elias Thorne"
                            role="Protagonist"
                            image="https://lh3.googleusercontent.com/aida-public/AB6AXuAyXRlx34bIU-hohuK4ESSKcCfi6Zy6V9NTwe41rmVcuHlYFd45Q17GTAwsQ4wAtVl66DZ1pN5530oNePxv-rfdZ-bJ2v5PnW0qCgFDUWcSN8iKTkG1xFX7JsXI-kFw9uoQsmlj1F9znqJS-mBN_Gx1bN2jXcviKVaq0S2ciY9BUh8yk5LcJT1ysRj4AV5oLTvgJAZK-x7v3cK4lSYaeiMYFJnIFR8e7G2bYE7YaJjnGNZDRzb-5XvjomM0ILbeLdfddcq-c5KP8I-_"
                            href="/story-bible/characters/elias-thorne"
                            active
                        />
                        <CharacterGridItem
                            name="Dr. Aris"
                            role="Antagonist"
                            image="https://lh3.googleusercontent.com/aida-public/AB6AXuAC-b3Z3YiQ12cC6oj-1-TL53WKPzI1rpUJRcvVjo4GBuXCkZU6pqR0fNRDmxBmxwiK8SChw40cg-6kujOmNOpqcrSrnzU_F6cJfN68UvZPkox3PaCySDrvaZgAli2bLSiNVaMzM1zcuiYHPOYOh13h7TKeF2PkjzYxzmN_8CWP1sdyb33SGOuHDWohmf97b-payKuQnzsw47vk1bgqYvyapAi0f-suF3EM4VVRbnvc4ROsHoXpAcYTX_f-dB8ITwTcBFq-LGmPhnnf"
                            href="/story-bible/characters/dr-aris"
                            deceased
                        />
                        <CharacterGridItem
                            name="Kael"
                            role="Supporting"
                            image="https://images.unsplash.com/photo-1549556272-74892c57f920?q=80&w=2576&auto=format&fit=crop"
                            href="/story-bible/characters/kael"
                        />
                        <CharacterGridItem
                            name="Valeria"
                            role="Protagonist"
                            image="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop"
                            href="/story-bible/characters/valeria"
                        />
                        <CharacterGridItem
                            name="The Architect"
                            role="Unknown"
                            image="https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=2574&auto=format&fit=crop"
                            href="/story-bible/characters/architect"
                        />

                        {/* Add New Placeholder */}
                        <Link
                            href="/story-bible/characters/new"
                            className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-white/10 rounded-xl hover:bg-white/5 hover:border-[hsl(165,100%,38%)]/30 transition-all group min-h-[280px]"
                        >
                            <div className="h-14 w-14 rounded-full bg-white/5 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-[24px] text-slate-400 group-hover:text-[hsl(165,100%,38%)]">add</span>
                            </div>
                            <span className="text-sm font-medium text-slate-400 group-hover:text-white">Create Character</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

function CharacterGridItem({ name, role, image, href, active, deceased }: { name: string; role: string; image: string; href: string; active?: boolean; deceased?: boolean }) {
    return (
        <Link href={href} className="glass-panel p-0 rounded-xl overflow-hidden group hover:border-[hsl(165,100%,38%)]/30 transition-all flex flex-col">
            <div className="relative h-48 w-full overflow-hidden">
                <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(252,29%,14%)] to-transparent opacity-80" />

                {active && (
                    <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/60 backdrop-blur-md px-2 py-1 rounded-full border border-white/10">
                        <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-[10px] font-bold text-white uppercase tracking-wider">Active</span>
                    </div>
                )}

                <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="text-lg font-bold text-white truncate group-hover:text-[hsl(165,100%,38%)] transition-colors">{name}</h3>
                    <p className={`text-xs font-semibold uppercase tracking-wider ${deceased ? 'text-red-400' : 'text-[hsl(165,100%,38%)]'}`}>
                        {role} {deceased && '(Deceased)'}
                    </p>
                </div>
            </div>
            <div className="p-4 border-t border-white/5 bg-[hsl(252,29%,14%)]/50">
                <div className="flex justify-between text-xs text-slate-400">
                    <span>Appearances</span>
                    <span className="text-white">12 ch.</span>
                </div>
            </div>
        </Link>
    );
}
