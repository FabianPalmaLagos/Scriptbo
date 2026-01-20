# Scriptbo

> Tu Coautor Inteligente - Plataforma de escritura asistida por IA

## 🚀 Stack Tecnológico

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4
- **Database**: PostgreSQL (Supabase) + Prisma
- **IA**: Google Gemini 3 Pro / Flash
- **State**: Zustand + React Query
- **Auth**: Supabase Auth (próximamente)

## 📁 Estructura del Proyecto

```
src/
├── app/                  # Next.js App Router
│   ├── globals.css       # Estilos globales
│   ├── layout.tsx        # Layout raíz
│   └── page.tsx          # Landing page
├── components/
│   ├── ui/               # Componentes base (botones, inputs, etc.)
│   ├── editor/           # Editor de texto y herramientas
│   ├── story-bible/      # Gestión de personajes, ubicaciones
│   └── ai-panel/         # Panel de coautoría IA
├── lib/
│   ├── prisma.ts         # Cliente Prisma
│   └── utils.ts          # Utilidades generales
├── hooks/                # Custom hooks
├── stores/               # Zustand stores
├── types/                # TypeScript types y constantes
└── api/                  # Helpers para API routes

prisma/
└── schema.prisma         # Esquema de base de datos
```

## 🛠️ Setup Local

### 1. Clonar e instalar

```bash
git clone https://github.com/tu-usuario/scriptbo.git
cd scriptbo
npm install
```

### 2. Configurar variables de entorno

```bash
cp .env.example .env.local
# Editar .env.local con tus credenciales
```

### 3. Configurar base de datos

```bash
# Generar cliente Prisma
npm run db:generate

# Aplicar schema a la base de datos
npm run db:push
```

### 4. Iniciar desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000)

## 📊 Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Inicia servidor de desarrollo con Turbopack |
| `npm run build` | Build de producción |
| `npm run start` | Inicia servidor de producción |
| `npm run lint` | Ejecuta ESLint |
| `npm run db:generate` | Genera cliente Prisma |
| `npm run db:push` | Aplica schema a la DB (desarrollo) |
| `npm run db:migrate` | Crea y aplica migraciones |
| `npm run db:studio` | Abre Prisma Studio (GUI) |

## 🎨 Convenciones

- **Componentes**: PascalCase (`FeatureCard.tsx`)
- **Hooks**: camelCase con prefijo `use` (`useEditor.ts`)
- **Stores**: camelCase con sufijo `Store` (`editorStore.ts`)
- **Estilos**: Tailwind CSS + clases utilitarias

## 📝 Licencia

Todos los derechos reservados © 2026 Scriptbo
