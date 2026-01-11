import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
