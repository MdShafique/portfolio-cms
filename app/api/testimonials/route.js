import fs from "fs";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "data", "testimonials.json");
  const data = fs.readFileSync(filePath, "utf-8");
  return new Response(data, { status: 200 });
}
