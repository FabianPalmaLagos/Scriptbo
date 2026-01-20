import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combina clases de Tailwind de manera inteligente
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

/**
 * Formatea un número como precio en USD
 */
export function formatPrice(price: number): string {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(price);
}

/**
 * Formatea un número grande con separadores
 */
export function formatNumber(num: number, locale: string = 'es'): string {
    return new Intl.NumberFormat(locale).format(num);
}

/**
 * Cuenta palabras en un texto
 */
export function countWords(text: string): number {
    if (!text || text.trim() === '') return 0;
    return text.trim().split(/\s+/).length;
}

/**
 * Trunca texto con ellipsis
 */
export function truncate(text: string, maxLength: number): string {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength - 3) + '...';
}

/**
 * Genera un slug a partir de un título
 */
export function slugify(text: string): string {
    return text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '') // Quitar acentos
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
}

/**
 * Delay para async/await
 */
export function delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Formatea fecha en formato legible
 */
export function formatDate(date: Date | string, locale: string = 'es'): string {
    const d = typeof date === 'string' ? new Date(date) : date;
    return new Intl.DateTimeFormat(locale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }).format(d);
}

/**
 * Calcula tiempo relativo (hace X minutos/horas/días)
 */
export function timeAgo(date: Date | string, locale: string = 'es'): string {
    const d = typeof date === 'string' ? new Date(date) : date;
    const now = new Date();
    const diffMs = now.getTime() - d.getTime();
    const diffSecs = Math.floor(diffMs / 1000);
    const diffMins = Math.floor(diffSecs / 60);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    const labels = {
        es: {
            now: 'ahora mismo',
            seconds: (n: number) => `hace ${n} segundos`,
            minutes: (n: number) => `hace ${n} minuto${n > 1 ? 's' : ''}`,
            hours: (n: number) => `hace ${n} hora${n > 1 ? 's' : ''}`,
            days: (n: number) => `hace ${n} día${n > 1 ? 's' : ''}`,
        },
        en: {
            now: 'just now',
            seconds: (n: number) => `${n} seconds ago`,
            minutes: (n: number) => `${n} minute${n > 1 ? 's' : ''} ago`,
            hours: (n: number) => `${n} hour${n > 1 ? 's' : ''} ago`,
            days: (n: number) => `${n} day${n > 1 ? 's' : ''} ago`,
        },
    };

    const l = labels[locale as keyof typeof labels] || labels.es;

    if (diffSecs < 10) return l.now;
    if (diffSecs < 60) return l.seconds(diffSecs);
    if (diffMins < 60) return l.minutes(diffMins);
    if (diffHours < 24) return l.hours(diffHours);
    return l.days(diffDays);
}
