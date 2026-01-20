export { default } from "next-auth/middleware";

export const config = {
    // Rutas que requieren autenticación
    matcher: [
        "/dashboard/:path*",
        "/editor/:path*",
        "/story-bible/:path*",
        "/settings/:path*",
        // También protegemos la API excepto los endpoints de auth
        // "/api/((?!auth).*)", 
    ],
};
