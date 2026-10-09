import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LayoutShell } from "@/components/LayoutShell";

export const metadata: Metadata = {
  title: "A Story Written For Tsitsi",
  description: "A little love story, made just for Tsitsi.",
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#1e1017",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body><LayoutShell>{children}</LayoutShell></body>
    </html>
  );
}
