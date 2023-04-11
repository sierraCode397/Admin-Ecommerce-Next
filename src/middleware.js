import { NextResponse } from 'next/server';

export async function middleware(request) {
  const verify = request.cookies.get('token');

  if (!verify && request.url.includes('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
}
