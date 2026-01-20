import { Sidebar } from '@/components/ui';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Editor | Scriptbo',
    description: 'Escribe sin distracciones con ayuda de IA.',
};

export default function EditorLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen w-full overflow-hidden bg-[#0d0a1f]">
            {children}
        </div>
    );
}
