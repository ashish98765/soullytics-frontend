export default function Sidebar() {
  return (
    <aside className="w-64 bg-zinc-900 border-r border-zinc-800 h-screen p-4">
      <div className="text-xl font-bold mb-8">
        Soullytics
      </div>

      <nav className="space-y-3 text-sm">
        <div className="text-zinc-400 uppercase tracking-wide text-xs">
          Core
        </div>

        <a className="block px-2 py-1 rounded hover:bg-zinc-800">
          Dashboard
        </a>
        <a className="block px-2 py-1 rounded hover:bg-zinc-800">
          Decisions
        </a>
        <a className="block px-2 py-1 rounded hover:bg-zinc-800">
          Engines
        </a>

        <div className="pt-6 text-zinc-400 uppercase tracking-wide text-xs">
          System
        </div>

        <a className="block px-2 py-1 rounded hover:bg-zinc-800">
          Settings
        </a>
      </nav>
    </aside>
  );
}
