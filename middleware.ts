import { NextRequest, NextResponse } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token");

  if (!token) {
    // If no token, ensure user is treated as unauthenticated
    request.headers.set("X-User-Status", "guest");
    return NextResponse.next();
  }

  try {
    // Verify token and extract payload
    const userToken = jwt.verify(
      token.value,
      process.env.SECRET_KEY as string
    ) as JwtPayload;
    request.headers.set("X-User-Status", "authenticated");
    request.headers.set("X-User-Id", userToken.id);
    request.headers.set("X-User-Name", userToken.username);
    return NextResponse.next();
  } catch (error) {
    // If token is invalid, treat as unauthenticated
    request.headers.set("X-User-Status", "guest");
    return NextResponse.next();
  }
}

export const config = {
  matcher: "/",
};
