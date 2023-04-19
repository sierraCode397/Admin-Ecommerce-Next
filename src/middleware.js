import { NextResponse } from 'next/server';

export async function middleware(request) {
  const verify = request.cookies.get('token');

  if (!verify && request.url.includes('/dashboard')) {
    console.log("Inicia sesion Crack!")
    return NextResponse.redirect(new URL('/login', request.url));
  }
}
