import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { jwtDecode } from "jwt-decode";

export const authOptions: NextAuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,  // ✅ مهم جداً في Vercel
    pages: {
        signIn: "/login"
    },
    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
                email: {},
                password: {}
            },
            authorize: async (credentials) => {
                let res = await fetch(`${process.env.API}/auth/signin`, {
                    method: "POST",
                    body: JSON.stringify({
                        email: credentials?.email,
                        password: credentials?.password
                    }),
                    headers: {
                        "content-Type": "application/json"
                    }
                });
                let payload = await res.json();
                console.log(payload);

                if (payload.message === "success") {
                    const decoded: { id: string } = jwtDecode(payload.token);
                    console.log(decoded);

                    return {
                        id: decoded.id,
                        user: payload.user,
                        token: payload.token,
                    };
                } else {
                    throw new Error(payload.message || "Invalid credentials");
                }
            },
        }),
    ],

    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.user = user.user;
                token.token = user.token;
            }
            return token;
        },
        async session({ session, token }) {
            session.user = token.user;
            session.token = token.token; // ✅ خلي التوكن متاح في السيشن كمان
            return session;
        }
    }
}
