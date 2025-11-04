import { ShieldCheck, Terminal, Lock } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-900 to-black py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-emerald-300">
            <ShieldCheck className="h-4 w-4" />
            Built for ethical security testing
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            Discover trusted, open-source cybersecurity tools
          </h1>
          <p className="mt-4 text-lg leading-7 text-white/70">
            A curated directory of utilities for learning, auditing and defending systems. Use responsibly and only with explicit authorization.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Feature icon={<Terminal className="h-5 w-5" />} title="Hands-on" desc="Practical tools used by professionals" />
            <Feature icon={<Lock className="h-5 w-5" />} title="Safe-first" desc="Focus on defense and compliance" />
            <Feature icon={<ShieldCheck className="h-5 w-5" />} title="Open & trusted" desc="Reputable, community-backed projects" />
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 -bottom-20 top-1/2 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.15),transparent_60%)]" />
    </section>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-left text-white/80">
      <div className="mb-2 inline-flex items-center gap-2 text-emerald-300">
        {icon}
        <span className="text-sm font-semibold tracking-wide">{title}</span>
      </div>
      <p className="text-sm text-white/70">{desc}</p>
    </div>
  );
}
