import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: "jwt" as any,
    },
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID || "placeholder",
            clientSecret: process.env.GITHUB_SECRET || "placeholder",
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "placeholder",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || "placeholder",
        }),
        CredentialsProvider({
            name: "Invitado",
            credentials: {
                username: { label: "Username", type: "text" },
            },
            async authorize(credentials) {
                // Mock de un usuario para desarrollo
                return {
                    id: "guest-user",
                    name: "Invitado",
                    email: "guest@scriptbo.dev",
                    image: "https://ui-avatars.com/api/?name=Invitado&background=00c2a2&color=fff",
                    tier: "PRO",
                    creditsRemaining: 100000,
                };
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }: any) {
            if (user) {
                token.id = user.id;
                token.tier = user.tier || "FREE";
                token.creditsRemaining = user.creditsRemaining || 50000;
            }
            return token;
        },
        async session({ session, token }: any) {
            if (session.user) {
                session.user.id = token.id;
                session.user.tier = token.tier;
                session.user.creditsRemaining = token.creditsRemaining;
            }
            return session;
        },
    },
    pages: {
        signIn: '/auth/signin',
    },
    secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
