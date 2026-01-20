import Link from 'next/link';
import { Button, IconButton } from '@/components/ui';

export default function LocationDetailPage() {
    return (
        <>
            <header className="relative z-10 flex items-center justify-between px-8 py-6 border-b border-white/5">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                    <Link href="/story-bible" className="hover:text-[hsl(165,100%,38%)] transition-colors">Story Bible</Link>
                    <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                    <Link href="/story-bible/locations" className="hover:text-[hsl(165,100%,38%)] transition-colors">Locations</Link>
                    <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                    <span className="text-white font-medium">The Thorne Institute</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-400">Last edited 1 day ago</span>
                    <Button variant="secondary" icon="share">Share</Button>
                </div>
            </header>

            <div className="relative z-10 flex-1 overflow-y-auto p-4 md:p-8">
                <div className="max-w-7xl mx-auto h-full flex flex-col gap-8">

                    {/* Header Image & Info */}
                    <div className="relative h-64 rounded-2xl overflow-hidden group">
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop')` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0a1f] via-[#0d0a1f]/60 to-transparent" />

                        <div className="absolute bottom-6 left-8 right-8 flex items-end justify-between">
                            <div>
                                <span className="text-[hsl(165,100%,38%)] font-bold text-sm uppercase tracking-widest mb-2 block">Research Facility</span>
                                <h1 className="text-4xl font-bold text-white mb-2">The Thorne Institute</h1>
                                <div className="flex items-center gap-4 text-sm text-slate-300">
                                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[18px] text-[hsl(165,100%,38%)]">map</span> Upper Sector</span>
                                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[18px] text-[hsl(165,100%,38%)]">cloud</span> Acid Rain Prone</span>
                                </div>
                            </div>
                            <Button icon="edit">Edit Details</Button>
                        </div>
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                        {/* Main Desc & Lore */}
                        <div className="lg:col-span-2 space-y-6">
                            <div className="glass-panel p-6 rounded-2xl">
                                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-[hsl(165,100%,38%)]">description</span>
                                    Description
                                </h2>
                                <div className="prose-scriptbo">
                                    <p>The Thorne Institute stands as a monolithic testament to pre-Blackout architecture. Constructed of reinforced concrete and blast-resistant glass, it looms over the Upper Sector like a silent sentinel. Its angular brutalist design is softened only by the persistent acid rain streaking its facades.</p>
                                    <p>Inside, the facility is a maze of clean rooms, particle colliders, and stasis chambers. The air is always filtered, smelling of ozone and disinfectant.</p>
                                </div>
                            </div>

                            <div className="glass-panel p-6 rounded-2xl">
                                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-[hsl(165,100%,38%)]">history_edu</span>
                                    History & Significance
                                </h2>
                                <div className="prose-scriptbo">
                                    <p>Ideally founded to solve the energy crisis, the Institute pivoted to temporal mechanics after Dr. Aris discovered the "Echo Anomaly." It was here that Elias Thorne was trained, and here that his parents died during the containment breach of '45.</p>
                                </div>
                            </div>

                            {/* Gallery */}
                            <div>
                                <h3 className="text-lg font-bold text-white mb-4">Visual References</h3>
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="aspect-video rounded-lg bg-white/5 bg-cover bg-center border border-white/10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop')" }} />
                                    <div className="aspect-video rounded-lg bg-white/5 bg-cover bg-center border border-white/10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518544806314-5f803c2858fa?q=80&w=2574&auto=format&fit=crop')" }} />
                                    <div className="aspect-video rounded-lg border-2 border-dashed border-white/10 flex items-center justify-center text-slate-500 hover:text-white hover:border-[hsl(165,100%,38%)]/50 transition-colors cursor-pointer">
                                        <span className="material-symbols-outlined">add_photo_alternate</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar Info */}
                        <div className="space-y-6">
                            {/* Maps */}
                            <div className="glass-panel p-4 rounded-xl">
                                <h3 className="text-sm font-bold text-white mb-3">Location Map</h3>
                                <div className="aspect-square rounded-lg bg-slate-900 border border-white/10 relative overflow-hidden group cursor-pointer">
                                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2674&auto=format&fit=crop')] bg-cover bg-center opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500" />
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-[hsl(165,100%,38%)] shadow-neon animate-pulse" />
                                </div>
                            </div>

                            {/* Linked Characters */}
                            <div className="glass-panel p-4 rounded-xl">
                                <h3 className="text-sm font-bold text-white mb-3">Key Characters</h3>
                                <div className="space-y-3">
                                    <LinkedChar name="Elias Thorne" relation="Former Fellow" image="https://lh3.googleusercontent.com/aida-public/AB6AXuAyXRlx34bIU-hohuK4ESSKcCfi6Zy6V9NTwe41rmVcuHlYFd45Q17GTAwsQ4wAtVl66DZ1pN5530oNePxv-rfdZ-bJ2v5PnW0qCgFDUWcSN8iKTkG1xFX7JsXI-kFw9uoQsmlj1F9znqJS-mBN_Gx1bN2jXcviKVaq0S2ciY9BUh8yk5LcJT1ysRj4AV5oLTvgJAZK-x7v3cK4lSYaeiMYFJnIFR8e7G2bYE7YaJjnGNZDRzb-5XvjomM0ILbeLdfddcq-c5KP8I-_" />
                                    <LinkedChar name="Dr. Aris" relation="Director (Deceased)" image="https://lh3.googleusercontent.com/aida-public/AB6AXuAC-b3Z3YiQ12cC6oj-1-TL53WKPzI1rpUJRcvVjo4GBuXCkZU6pqR0fNRDmxBmxwiK8SChw40cg-6kujOmNOpqcrSrnzU_F6cJfN68UvZPkox3PaCySDrvaZgAli2bLSiNVaMzM1zcuiYHPOYOh13h7TKeF2PkjzYxzmN_8CWP1sdyb33SGOuHDWohmf97b-payKuQnzsw47vk1bgqYvyapAi0f-suF3EM4VVRbnvc4ROsHoXpAcYTX_f-dB8ITwTcBFq-LGmPhnnf" />
                                </div>
                                <Button variant="ghost" size="sm" className="w-full mt-2 text-xs">Link Character</Button>
                            </div>

                            {/* Sensorial Details */}
                            <div className="glass-panel p-4 rounded-xl">
                                <h3 className="text-sm font-bold text-white mb-3">Senses & Atmosphere</h3>
                                <div className="space-y-3">
                                    <SenseItem icon="visibility" label="Visual" value="Angular, Brutalist, Sterile, Grey" />
                                    <SenseItem icon="hearing" label="Audio" value="Humming machinery, Rain against glass" />
                                    <SenseItem icon="scents" label="Smell" value="Ozone, Disinfectant, Stale Air" />
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

function LinkedChar({ name, relation, image }: { name: string; relation: string; image: string }) {
    return (
        <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
            <div className="h-8 w-8 rounded-full bg-cover bg-center ring-1 ring-white/10" style={{ backgroundImage: `url('${image}')` }} />
            <div>
                <p className="text-sm font-semibold text-white leading-none">{name}</p>
                <p className="text-[10px] text-slate-400 mt-0.5">{relation}</p>
            </div>
        </div>
    );
}

function SenseItem({ icon, label, value }: { icon: string; label: string; value: string }) {
    return (
        <div className="flex gap-3 items-start">
            <span className="material-symbols-outlined text-[16px] text-[hsl(165,100%,38%)] mt-0.5">{icon}</span>
            <div>
                <p className="text-xs font-bold text-slate-300">{label}</p>
                <p className="text-xs text-slate-500 leading-snug">{value}</p>
            </div>
        </div>
    );
}
