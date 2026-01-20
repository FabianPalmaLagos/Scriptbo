import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { SupportedLocale, SubscriptionTier } from '@/types';

// ============================================
// USER STORE
// ============================================

interface UserState {
    id: string | null;
    email: string | null;
    name: string | null;
    locale: SupportedLocale;
    tier: SubscriptionTier;
    creditsRemaining: number;
    isAuthenticated: boolean;

    // Actions
    setUser: (user: Partial<UserState>) => void;
    setLocale: (locale: SupportedLocale) => void;
    updateCredits: (amount: number) => void;
    logout: () => void;
}

export const useUserStore = create<UserState>()(
    persist(
        (set) => ({
            id: null,
            email: null,
            name: null,
            locale: 'es',
            tier: 'FREE',
            creditsRemaining: 50000,
            isAuthenticated: false,

            setUser: (user) =>
                set((state) => ({
                    ...state,
                    ...user,
                    isAuthenticated: !!user.id,
                })),

            setLocale: (locale) => set({ locale }),

            updateCredits: (amount) =>
                set((state) => ({
                    creditsRemaining: Math.max(0, state.creditsRemaining + amount),
                })),

            logout: () =>
                set({
                    id: null,
                    email: null,
                    name: null,
                    tier: 'FREE',
                    creditsRemaining: 50000,
                    isAuthenticated: false,
                }),
        }),
        {
            name: 'scriptbo-user-storage',
            partialize: (state) => ({ locale: state.locale }),
        }
    )
);

// ============================================
// EDITOR STORE
// ============================================

interface EditorState {
    currentProjectId: string | null;
    currentDocumentId: string | null;
    isAIPanelOpen: boolean;
    isStoryBibleOpen: boolean;
    editorMode: 'write' | 'review' | 'preview';
    isSaving: boolean;
    lastSaved: Date | null;
    wordCount: number;

    // Actions
    setCurrentProject: (projectId: string | null) => void;
    setCurrentDocument: (documentId: string | null) => void;
    toggleAIPanel: () => void;
    toggleStoryBible: () => void;
    setEditorMode: (mode: 'write' | 'review' | 'preview') => void;
    setSaving: (isSaving: boolean) => void;
    setLastSaved: (date: Date) => void;
    setWordCount: (count: number) => void;
}

export const useEditorStore = create<EditorState>()((set) => ({
    currentProjectId: null,
    currentDocumentId: null,
    isAIPanelOpen: true,
    isStoryBibleOpen: false,
    editorMode: 'write',
    isSaving: false,
    lastSaved: null,
    wordCount: 0,

    setCurrentProject: (projectId) => set({ currentProjectId: projectId }),
    setCurrentDocument: (documentId) => set({ currentDocumentId: documentId }),
    toggleAIPanel: () => set((state) => ({ isAIPanelOpen: !state.isAIPanelOpen })),
    toggleStoryBible: () => set((state) => ({ isStoryBibleOpen: !state.isStoryBibleOpen })),
    setEditorMode: (mode) => set({ editorMode: mode }),
    setSaving: (isSaving) => set({ isSaving }),
    setLastSaved: (date) => set({ lastSaved: date, isSaving: false }),
    setWordCount: (count) => set({ wordCount: count }),
}));

// ============================================
// UI STORE
// ============================================

interface UIState {
    theme: 'light' | 'dark';
    sidebarCollapsed: boolean;
    showCreditsWarning: boolean;

    // Actions
    setTheme: (theme: 'light' | 'dark') => void;
    toggleTheme: () => void;
    toggleSidebar: () => void;
    setShowCreditsWarning: (show: boolean) => void;
}

export const useUIStore = create<UIState>()(
    persist(
        (set) => ({
            theme: 'dark',
            sidebarCollapsed: false,
            showCreditsWarning: false,

            setTheme: (theme) => set({ theme }),
            toggleTheme: () =>
                set((state) => ({ theme: state.theme === 'dark' ? 'light' : 'dark' })),
            toggleSidebar: () =>
                set((state) => ({ sidebarCollapsed: !state.sidebarCollapsed })),
            setShowCreditsWarning: (show) => set({ showCreditsWarning: show }),
        }),
        {
            name: 'scriptbo-ui-storage',
        }
    )
);
