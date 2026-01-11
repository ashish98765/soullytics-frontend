import "./global.css";
import AppShell from "../components/layout/AppShell";

export const metadata = {
  title: "Soullytics – Decision Intelligence OS",
  description: "Cold, ruthless decision engine",
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
