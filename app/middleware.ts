import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
	return NextResponse.rewrite(new URL(request.nextUrl.pathname.toLocaleLowerCase(), request.url));
}