// app/layout.tsx
import type { Metadata } from "next";
import { GeistSans, GeistMono } from "geist/font"; // Using Geist package directly
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import { CssBaseline } from "@mui/material";

export const metadata: Metadata = {
  title: "Artisan Marketplace",
  description: "Local artisan marketplace platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="antialiased">
        <ThemeProvider>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}