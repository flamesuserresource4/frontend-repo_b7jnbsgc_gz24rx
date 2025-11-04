import { ShieldAlert } from "lucide-react";

export default function Footer() {
  return (
    <footer id="disclaimer" className="border-t border-white/10 bg-zinc-950 py-10 text-white/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="sm:col-span-2">
            <h3 className="mb-2 text-sm font-semibold tracking-wide text-white">Responsible Use</h3>
            <p className="text-sm leading-6">
              This site is for educational purposes and authorized security assessments only. Always obtain explicit permission before testing any system. You are solely responsible for your actions and compliance with applicable laws.
            </p>
          </div>
          <div className="">
            <div className="mb-2 inline-flex items-center gap-2 rounded-md border border-amber-400/30 bg-amber-500/10 px-2 py-1 text-amber-300">
              <ShieldAlert className="h-4 w-4" />
              Ethical-first
            </div>
            <p className="text-sm">We curate reputable, community-backed tools that support learning and defense.</p>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Ethical Hack Hub</p>
          <p>Built for learners, defenders and red teams with permission</p>
        </div>
      </div>
    </footer>
  );
}
