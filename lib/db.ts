import fs from "fs";
import path from "path";

const settingsFile = path.join(process.cwd(), "data", "settings.json");

export function getSettings() {
  const data = fs.readFileSync(settingsFile, "utf-8");
  return JSON.parse(data);
}

export function saveSettings(newSettings: any) {
  fs.writeFileSync(settingsFile, JSON.stringify(newSettings, null, 2));
  return newSettings;
}
