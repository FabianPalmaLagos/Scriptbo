import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d0a1f] overflow-hidden relative">
      {/* Background gradient blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[hsl(165,100%,38%)]/10 rounded-full blur-[128px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[128px]" />

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        {/* Logo / Brand */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-16 w-16 rounded-2xl gradient-logo flex items-center justify-center text-white font-bold text-3xl shadow-neon">
              S
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
            <span className="text-white">Script</span>
            <span className="gradient-text">bo</span>
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-slate-400">
            Tu Coautor Inteligente
          </p>
        </div>

        {/* Tagline */}
        <p className="max-w-2xl mb-12 text-lg md:text-xl text-slate-400">
          La plataforma de escritura asistida por IA para autores de todos los géneros.
          <br className="hidden md:block" />
          Novelas, guiones, anime, manhwa y mucho más.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/story-bible"
            className="btn-primary text-lg"
          >
            <span className="material-symbols-outlined">edit_note</span>
            Comenzar a Escribir
          </Link>
          <Link
            href="/demo"
            className="btn-secondary text-lg border-white/10"
          >
            Ver Demo
          </Link>
        </div>

        {/* Features Preview */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
          <FeatureCard
            icon="auto_awesome"
            title="IA como Coautor"
            description="Gemini 3 te ayuda a continuar, expandir y mejorar tu escritura manteniendo tu voz única."
          />
          <FeatureCard
            icon="auto_stories"
            title="Story Bible"
            description="Mantén consistencia con personajes, ubicaciones y worldbuilding que la IA recuerda."
          />
          <FeatureCard
            icon="palette"
            title="Multi-Género"
            description="Novela, guion, anime, manhwa, manhua... Plantillas y herramientas para cada formato."
          />
        </div>

        {/* Genres Preview */}
        <div className="mt-16 flex flex-wrap justify-center gap-3">
          {['Novela', 'Guion', 'Anime', 'Manhwa', 'Manhua', 'Cuento', 'Poesía'].map((genre) => (
            <span key={genre} className="tag">
              {genre}
            </span>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 text-center text-slate-600 text-sm">
        <p>© 2026 Scriptbo. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="glass-panel-heavy p-6 rounded-2xl text-left group hover:border-[hsl(165,100%,38%)]/30 transition-all">
      <div className="h-12 w-12 rounded-xl bg-[hsl(165,100%,38%)]/10 flex items-center justify-center mb-4 group-hover:bg-[hsl(165,100%,38%)]/20 transition-colors">
        <span className="material-symbols-outlined text-[hsl(165,100%,38%)] text-[28px]">{icon}</span>
      </div>
      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[hsl(165,100%,38%)] transition-colors">
        {title}
      </h3>
      <p className="text-slate-400">{description}</p>
    </div>
  );
}
