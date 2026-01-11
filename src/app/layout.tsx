// src/app/layout.tsx
import "./global.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Soullytics",
  description: "Decision Intelligence OS",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          background: "#0b0b0b",
          color: "#ffffff",
          margin: 0,
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            minHeight: "100vh",
            padding: 24,
            boxSizing: "border-box",
          }}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
