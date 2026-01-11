import "./global.css";
import Sidebar from "./components/Sidebar";

export const metadata = {
  title: "Soullytics – Decision Intelligence OS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div style={{ display: "flex" }}>
          <Sidebar />
          <div style={{ flex: 1, padding: 24 }}>{children}</div>
        </div>
      </body>
    </html>
  );
}
