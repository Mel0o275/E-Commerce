import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
    const token = await getToken({ req: req });
    if (token) {
        if(req.nextUrl.pathname === '/login' ||
            req.nextUrl.pathname === '/register' ||
            req.nextUrl.pathname === '/forgotPass' ||
            req.nextUrl.pathname === '/resetPass'
        ) {
            return NextResponse.redirect(new URL('/', req.url));
        }
        else {
        return NextResponse.next();
        }
    }
    else {
        if(req.nextUrl.pathname === '/cart') {
            return NextResponse.redirect(new URL('/login', req.url));
        }
        else {
            return NextResponse.next();
        }
    }
}

export const config = {
    matcher: ["/cart", "/login", "/register", '/forgotPass', '/resetPass'],
};
