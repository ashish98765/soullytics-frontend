// src/app/layout.tsx

import "./global.css";
import { ReactNode } from "react";
import AppShell from "@/components/layout/AppShell";

export const metadata = {
  title: "Soullytics — Decision Intelligence OS",
  description: "Cold, ruthless decision engine for ads, growth & capital",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppShell>
          {children}
        </AppShell>
      </body>
    </html>
  );
}
