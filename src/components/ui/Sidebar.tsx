'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

interface NavItem {
    href: string;
    label: string;
    icon: string;
}

const navItems: NavItem[] = [
    { href: '/dashboard', label: 'Projects', icon: 'folder' },
    { href: '/story-bible', label: 'Story Bible', icon: 'auto_stories' },
    { href: '/editor', label: 'Editor', icon: 'edit_note' },
    { href: '/story-bible/characters', label: 'Characters', icon: 'diversity_3' },
    { href: '/story-bible/locations', label: 'Locations', icon: 'location_on' },
    { href: '/story-bible/world', label: 'World', icon: 'public' },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="hidden md:flex flex-col w-64 h-full border-r border-white/5 bg-[#0a0817] flex-shrink-0 z-20">
            {/* Logo */}
            <div className="p-6 flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg gradient-logo flex items-center justify-center text-white font-bold text-sm">
                    S
                </div>
                <h1 className="text-xl font-bold tracking-tight text-white">Scriptbo</h1>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col gap-1 px-3 mt-4">
                {navItems.map((item) => {
                    const isActive = pathname?.startsWith(item.href);
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                'nav-item',
                                isActive && 'nav-item-active'
                            )}
                        >
                            <span
                                className={cn(
                                    'material-symbols-outlined text-[20px] nav-icon transition-colors',
                                    isActive && 'fill-1'
                                )}
                            >
                                {item.icon}
                            </span>
                            <span className={cn('text-sm', isActive ? 'font-bold' : 'font-medium')}>
                                {item.label}
                            </span>
                        </Link>
                    );
                })}
            </nav>

            {/* Bottom Section */}
            <div className="mt-auto p-4 border-t border-white/5">
                <Link href="/settings" className="nav-item">
                    <span className="material-symbols-outlined text-[20px] nav-icon transition-colors">
                        settings
                    </span>
                    <span className="text-sm font-medium">Settings</span>
                </Link>

                {/* User Profile */}
                <div className="flex items-center gap-3 mt-4 px-3">
                    <div
                        className="h-8 w-8 rounded-full bg-cover bg-center ring-2 ring-white/10"
                        style={{
                            backgroundImage: `url('https://api.dicebear.com/7.x/avataaars/svg?seed=scriptbo')`,
                        }}
                    />
                    <div className="flex flex-col">
                        <span className="text-xs font-semibold text-white">Alex Writer</span>
                        <span className="text-[10px] text-[hsl(165,100%,38%)]">Pro Plan</span>
                    </div>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
