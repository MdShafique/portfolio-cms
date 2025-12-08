import "./globals.css";
import { ThemeProvider } from "./providers/ThemeProvider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-all">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
