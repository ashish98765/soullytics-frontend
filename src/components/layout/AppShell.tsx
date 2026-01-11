export default function AppShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        background: "#000",
        color: "#fff",
        minHeight: "100vh",
        padding: 20,
      }}
    >
      {children}
    </div>
  );
}
