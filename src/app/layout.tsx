// src/app/layout.tsx
import "./global.css";

export const metadata = {
  title: "Soullytics",
  description: "Cold decisions for paid growth",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
