import "./globals.css";
import { ThemeProvider } from "./providers/ThemeProvider";

export const metadata = {
  title: "Loading...",  // default
};

async function getSiteData() {
  try {
    const res = await fetch("http://localhost:3000/api/site");
    return await res.json();
  } catch {
    return null;
  }
}

export default async function RootLayout({ children }: any) {
  const site = await getSiteData();

  return (
    <html lang="en">
      <head>
        <title>{site?.siteTitle || "Portfolio"}</title>
        <link
          rel="icon"
          href={site?.favicon || "/favicon.ico"}
          type="image/x-icon"
        />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
