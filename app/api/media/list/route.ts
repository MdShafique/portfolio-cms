import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET() {
  const uploadDir = path.join(process.cwd(), "public", "uploads");

  if (!fs.existsSync(uploadDir)) {
    return NextResponse.json([]);
  }

  const files = fs.readdirSync(uploadDir);

  const fileList = files.map((file) => ({
    filename: file,
    url: `/uploads/${file}`,
  }));

  return NextResponse.json(fileList);
}