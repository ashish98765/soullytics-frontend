import "./globals.css";
import AppShell from "@/components/layout/AppShell";

export const metadata = {
  title: "Soullytics",
  description: "Cold, explainable decision intelligence for ads",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
