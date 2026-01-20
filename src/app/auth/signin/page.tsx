'use client';

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui";

export default function SignInPage() {
    return (
        <div className="min-h-screen bg-[#0d0a1f] flex flex-col items-center justify-center p-4">
            <div className="glass-panel-heavy p-8 rounded-3xl w-full max-w-md shadow-neon">
                <div className="flex flex-col items-center mb-8">
                    <div className="h-16 w-16 rounded-2xl gradient-logo flex items-center justify-center text-white font-bold text-3xl mb-4">
                        S
                    </div>
                    <h1 className="text-3xl font-bold text-white tracking-tight">Bienvenido</h1>
                    <p className="text-slate-400 mt-2">Inicia sesión en tu Story Bible</p>
                </div>

                <div className="space-y-4">
                    {/* Botón de Google */}
                    <button
                        onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
                        className="w-full btn-secondary py-3 flex items-center justify-center gap-3 border-white/10 hover:bg-white/5 transition-all"
                    >
                        <img src="https://authjs.dev/img/providers/google.svg" className="h-5 w-5" alt="Google" />
                        Continuar con Google
                    </button>

                    {/* Botón de GitHub */}
                    <button
                        onClick={() => signIn('github', { callbackUrl: '/dashboard' })}
                        className="w-full btn-secondary py-3 flex items-center justify-center gap-3 border-white/10 hover:bg-white/5 transition-all"
                    >
                        <img src="https://authjs.dev/img/providers/github.svg" className="h-5 w-5 invert" alt="GitHub" />
                        Continuar con GitHub
                    </button>

                    <div className="relative my-8">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-white/5"></div>
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-[#1A172E] px-2 text-slate-500">O (Modo Desarrollo)</span>
                        </div>
                    </div>

                    {/* Botón de Acceso Rápido para Dev */}
                    <Button
                        variant="primary"
                        className="w-full py-4 shadow-neon"
                        onClick={() => signIn('credentials', { callbackUrl: '/dashboard' })}
                    >
                        Acceso de Invitado
                    </Button>
                </div>

                <p className="text-center text-xs text-slate-500 mt-8">
                    Al continuar, aceptas nuestros términos y condiciones.
                </p>
            </div>
        </div>
    );
}
