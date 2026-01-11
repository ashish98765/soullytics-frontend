// src/app/layout.tsx

import "./global.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Soullytics – Decision Intelligence OS",
  description: "Cold, ruthless decision engine for ads & growth",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#000", color: "#fff" }}>
        {children}
      </body>
    </html>
  );
}
