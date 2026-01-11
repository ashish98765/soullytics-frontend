// src/app/layout.tsx
import "./global.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Soullytics — Decision Intelligence for Paid Growth",
  description:
    "Cold, unemotional decisions for ads. Know when to run, scale, pause or kill.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
