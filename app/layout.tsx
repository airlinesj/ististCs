import type { Metadata } from "next";
import "./globals.css";
import { LayoutShell } from "@/components/LayoutShell";

export const metadata: Metadata = {
  title: "A Story Written For Tsitsi",
  description: "A little love story, made just for Tsitsi.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body><LayoutShell>{children}</LayoutShell></body>
    </html>
  );
}
