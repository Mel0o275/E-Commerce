import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { jwtDecode } from "jwt-decode";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/login",
  },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const res = await fetch(`${process.env.API}/auth/signin`, {
          method: "POST",
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });

        const payload = await res.json();
        console.log("API Response:", payload);

        if (payload.message === "success") {
          const decoded: { id: string } = jwtDecode(payload.token);
          console.log("Decoded JWT:", decoded);

          return {
            id: decoded.id,
            name: payload.user.name,
            email: payload.user.email,
            role: payload.user.role, // ✅ include role
            token: payload.token,
          };
        }

        throw new Error(payload.message || "Invalid credentials");
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role, // ✅ carry role into token
        };
        token.token = user.token;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token.user as {
        id: string;
        name: string;
        email: string;
        role: string;
      };
      session.accessToken = token.token as string;
      return session;
    },
  },
};
