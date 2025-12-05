import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "hero.json");

function readHero() {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function writeHero(data: any) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

export async function GET() {
  return NextResponse.json(readHero());
}

export async function POST(req: Request) {
  const body = await req.json();
  writeHero(body);
  return NextResponse.json({ success: true });
}
