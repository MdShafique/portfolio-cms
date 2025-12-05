import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "about.json");

function readAbout() {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function writeAbout(data: any) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

export async function GET() {
  return NextResponse.json(readAbout());
}

export async function POST(req: Request) {
  const body = await req.json();
  writeAbout(body);
  return NextResponse.json({ success: true });
}
