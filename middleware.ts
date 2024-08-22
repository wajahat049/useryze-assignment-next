import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultVersion } from "./config.json";

export function middleware(request: NextRequest) {
  const version = request.cookies.get("version")?.value;
  let assignedVersion: string = version || "";
  console.log("Versions: ", defaultVersion, version);

  if (defaultVersion) {
    assignedVersion = defaultVersion;
  } else if (!version) {
    const randNum = Math.random();
    const randomVersion = randNum >= 0.5 ? "A" : "B";
    console.log("Random version: ", randomVersion, randNum);
    assignedVersion = randomVersion;
  }
  console.log("Assigned version: ", assignedVersion);

  const response = NextResponse.next();
  response.cookies.set("version", assignedVersion, {
    path: "/",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  });

  return response;
}

// Specify the paths where the middleware should be applied
export const config = {
  matcher: "/",
};
