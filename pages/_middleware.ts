import { NextRequest, NextResponse } from "next/server";

type Environment = "production" | "development" | "other";

export function middleware(req: NextRequest) {
  const currentEnv = process.env.NODE_ENV as Environment;

  if (
    currentEnv === "production" &&
    req.headers.get("x-forwarded-proto") !== "https"
  ) {
    console.log(`https://${process.env.HOST}${req.nextUrl.pathname}`);
    return NextResponse.redirect(
      `https://${process.env.HOST}${req.nextUrl.pathname}`,
      301
    );
  }
  return NextResponse.next();
}
