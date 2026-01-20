import { Sidebar } from '@/components/ui';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Dashboard | Scriptbo',
    description: 'Gestiona tus proyectos de escritura.',
};

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen w-full overflow-hidden">
            <Sidebar />
            <main className="flex-1 flex flex-col relative h-full overflow-hidden bg-[#0d0a1f]">
                {/* Background Gradients */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[hsl(165,100%,38%)]/5 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

                {children}
            </main>
        </div>
    );
}
