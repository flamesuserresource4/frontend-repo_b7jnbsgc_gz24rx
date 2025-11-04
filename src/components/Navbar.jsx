import { Shield, Github } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur supports-[backdrop-filter]:bg-black/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 ring-1 ring-emerald-400/30">
              <Shield className="h-5 w-5 text-emerald-400" />
            </div>
            <span className="text-lg font-semibold tracking-tight text-white">Ethical Hack Hub</span>
          </a>

          <nav className="hidden items-center gap-6 text-sm text-white/80 sm:flex">
            <a href="#tools" className="transition hover:text-white">Tools</a>
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#disclaimer" className="transition hover:text-white">Disclaimer</a>
          </nav>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/10"
          >
            <Github className="h-4 w-4" />
            Star
          </a>
        </div>
      </div>
    </header>
  );
}
