import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "navbar.json");

function readNavbar() {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function writeNavbar(data: any) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

export async function GET() {
  const data = readNavbar();
  return NextResponse.json(data);
}

export async function POST(req: Request) {
  const body = await req.json();
  writeNavbar(body);
  return NextResponse.json({ message: "Navbar updated successfully", data: body });
}
