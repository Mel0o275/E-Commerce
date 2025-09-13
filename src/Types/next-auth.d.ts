import NextAuth, { User } from "next-auth"
import { JWT } from "next-auth/jwt"

declare module "next-auth" {
    interface User {
        user: {
            id : string;
            name: string;
            email: string;
            role: string;
        };
        token: string;
    };

    interface Session {
        user: user
    };
}


declare module "next-auth/jwt" {
  interface JWT {
    sub?: string;
    user?: {
      name: string;
      email: string;
      role: string;
    };
    idToken?: string
  }
}