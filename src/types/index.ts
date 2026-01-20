// Tipos TypeScript globales para Scriptbo

// Géneros literarios soportados
export type Genre =
  | 'NOVEL'
  | 'SCRIPT'
  | 'SHORT_STORY'
  | 'ANIME'
  | 'MANHWA'
  | 'MANHUA'
  | 'NON_FICTION'
  | 'ARTICLE'
  | 'POETRY'
  | 'FANFICTION';

// Tipos de elementos en Story Bible
export type StoryBibleItemType =
  | 'CHARACTER'
  | 'LOCATION'
  | 'WORLD_BUILDING'
  | 'OBJECT'
  | 'PLOT_POINT'
  | 'TIMELINE_EVENT'
  | 'RELATIONSHIP'
  | 'NOTE';

// Acciones de IA disponibles
export type AIActionType =
  | 'CONTINUE'
  | 'EXPAND'
  | 'REWRITE'
  | 'BRAINSTORM'
  | 'DESCRIBE'
  | 'GRAMMAR_CHECK'
  | 'STYLE_IMPROVE'
  | 'DIALOGUE'
  | 'ANALYZE';

// Tiers de suscripción
export type SubscriptionTier = 'FREE' | 'BASIC' | 'PRO' | 'ENTERPRISE';

// Estado del proyecto
export type ProjectStatus = 'ACTIVE' | 'ARCHIVED' | 'DELETED';

// Idiomas soportados
export type SupportedLocale = 'es' | 'en';

// Configuración de créditos por tier
export const TIER_CREDITS: Record<SubscriptionTier, number> = {
  FREE: 50000,
  BASIC: 500000,
  PRO: 2000000,
  ENTERPRISE: 5000000,
};

// Costo de créditos por acción
export const ACTION_CREDITS: Record<AIActionType, number> = {
  CONTINUE: 500,
  EXPAND: 400,
  REWRITE: 300,
  BRAINSTORM: 200,
  DESCRIBE: 350,
  GRAMMAR_CHECK: 100,
  STYLE_IMPROVE: 250,
  DIALOGUE: 400,
  ANALYZE: 800,
};

// Labels en español para géneros
export const GENRE_LABELS: Record<Genre, { es: string; en: string }> = {
  NOVEL: { es: 'Novela', en: 'Novel' },
  SCRIPT: { es: 'Guion', en: 'Script' },
  SHORT_STORY: { es: 'Cuento', en: 'Short Story' },
  ANIME: { es: 'Anime', en: 'Anime' },
  MANHWA: { es: 'Manhwa', en: 'Manhwa' },
  MANHUA: { es: 'Manhua', en: 'Manhua' },
  NON_FICTION: { es: 'No Ficción', en: 'Non-Fiction' },
  ARTICLE: { es: 'Artículo', en: 'Article' },
  POETRY: { es: 'Poesía', en: 'Poetry' },
  FANFICTION: { es: 'Fanfiction', en: 'Fanfiction' },
};

// Labels para tipos de Story Bible
export const STORY_BIBLE_TYPE_LABELS: Record<StoryBibleItemType, { es: string; en: string }> = {
  CHARACTER: { es: 'Personaje', en: 'Character' },
  LOCATION: { es: 'Ubicación', en: 'Location' },
  WORLD_BUILDING: { es: 'Worldbuilding', en: 'World Building' },
  OBJECT: { es: 'Objeto', en: 'Object' },
  PLOT_POINT: { es: 'Punto de Trama', en: 'Plot Point' },
  TIMELINE_EVENT: { es: 'Evento', en: 'Timeline Event' },
  RELATIONSHIP: { es: 'Relación', en: 'Relationship' },
  NOTE: { es: 'Nota', en: 'Note' },
};

// Labels para acciones de IA
export const AI_ACTION_LABELS: Record<AIActionType, { es: string; en: string }> = {
  CONTINUE: { es: 'Continuar', en: 'Continue' },
  EXPAND: { es: 'Expandir', en: 'Expand' },
  REWRITE: { es: 'Reescribir', en: 'Rewrite' },
  BRAINSTORM: { es: 'Brainstorming', en: 'Brainstorm' },
  DESCRIBE: { es: 'Describir', en: 'Describe' },
  GRAMMAR_CHECK: { es: 'Corrección', en: 'Grammar Check' },
  STYLE_IMPROVE: { es: 'Mejorar Estilo', en: 'Improve Style' },
  DIALOGUE: { es: 'Diálogo', en: 'Dialogue' },
  ANALYZE: { es: 'Analizar', en: 'Analyze' },
};
