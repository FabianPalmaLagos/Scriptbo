import { Sidebar } from '@/components/ui';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Story Bible | Scriptbo',
    description: 'Gestiona personajes, ubicaciones y worldbuilding de tu proyecto.',
};

export default function StoryBibleLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen w-full overflow-hidden">
            <Sidebar />
            <main className="flex-1 flex flex-col relative h-full overflow-hidden bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center">
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-[#0d0a1f]/95 z-0" />
                {children}
            </main>
        </div>
    );
}
