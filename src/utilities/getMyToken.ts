"use server"
import { cookies } from "next/headers";
import { decode } from "next-auth/jwt";


export default async function getMyToken() {
    try {
        const decoded = (await cookies()).get('next-auth.session-token')?.value ||
        (await cookies()).get('__Secure-next-auth.session-token')?.value;
    
        if(!decoded) return null;
    
    
        const token = await decode({token : decoded, secret : process.env.NEXTAUTH_SECRET!})
        
        return token?.token || null;
    }
    catch(err) {
        return null;
    }
}