import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "navbar.json");

export function getNavbar() {
  const data = fs.readFileSync(filePath, "utf8");
  return JSON.parse(data);
}
