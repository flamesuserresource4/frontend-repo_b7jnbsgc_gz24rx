import { useMemo, useState } from "react";
import { ExternalLink, Search, Filter, Star, Terminal, Shield, Wifi, Globe, Lock } from "lucide-react";

const TOOLS = [
  {
    name: "Nmap",
    url: "https://nmap.org/",
    category: "Recon",
    tags: ["network", "scanner"],
    description: "Network discovery and security auditing. Ideal for mapping hosts and services.",
    icon: Globe,
  },
  {
    name: "Wireshark",
    url: "https://www.wireshark.org/",
    category: "Recon",
    tags: ["packet", "analyzer"],
    description: "Industry-standard packet analyzer for troubleshooting and learning protocols.",
    icon: Wifi,
  },
  {
    name: "OWASP ZAP",
    url: "https://www.zaproxy.org/",
    category: "Web",
    tags: ["proxy", "scanner"],
    description: "Open-source web application security scanner and intercepting proxy.",
    icon: Shield,
  },
  {
    name: "Burp Suite Community",
    url: "https://portswigger.net/burp/communitydownload",
    category: "Web",
    tags: ["proxy", "testing"],
    description: "Popular web testing suite. Community edition for learning and research.",
    icon: Shield,
  },
  {
    name: "John the Ripper",
    url: "https://www.openwall.com/john/",
    category: "Passwords",
    tags: ["audit", "hash"],
    description: "Password hash auditing tool for authorized assessments and education.",
    icon: Lock,
  },
  {
    name: "Hashcat",
    url: "https://hashcat.net/hashcat/",
    category: "Passwords",
    tags: ["gpu", "audit"],
    description: "Advanced password recovery and auditing with GPU acceleration.",
    icon: Lock,
  },
  {
    name: "Aircrack-ng",
    url: "https://www.aircrack-ng.org/",
    category: "Wireless",
    tags: ["wifi", "audit"],
    description: "Suite for monitoring, testing and auditing wireless networks (authorized use only).",
    icon: Wifi,
  },
  {
    name: "Nikto",
    url: "https://cirt.net/Nikto2",
    category: "Web",
    tags: ["scanner", "web"],
    description: "Web server scanner for identifying common vulnerabilities and misconfigurations.",
    icon: Shield,
  },
  {
    name: "sqlmap",
    url: "https://sqlmap.org/",
    category: "Web",
    tags: ["database", "testing"],
    description: "Automated testing tool for SQL-related issues in authorized security assessments.",
    icon: Terminal,
  },
];

const CATEGORIES = ["All", "Recon", "Web", "Passwords", "Wireless"];

export default function Tools() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [onlyTrusted, setOnlyTrusted] = useState(true);

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return TOOLS.filter((t) =>
      (activeCategory === "All" || t.category === activeCategory) &&
      (t.name.toLowerCase().includes(q) || t.tags.some((tag) => tag.includes(q)))
    );
  }, [query, activeCategory]);

  return (
    <section id="tools" className="bg-black py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:mb-8 sm:flex-row sm:items-center">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Tool Directory</h2>
          <div className="flex items-center gap-2 text-xs text-white/60">
            <Star className="h-4 w-4 text-emerald-300" /> Curated for learning and authorized audits
          </div>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search tools, tags..."
              className="w-full rounded-lg border border-white/10 bg-white/5 py-2 pl-9 pr-3 text-sm text-white placeholder:text-white/40 focus:border-emerald-400/40 focus:outline-none focus:ring-0"
            />
          </div>

          <div className="col-span-1 sm:col-span-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs font-medium text-white/80">
                <Filter className="h-3.5 w-3.5" /> Category
              </span>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-3 py-1 text-xs font-medium transition ${
                    activeCategory === cat
                      ? "bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-400/30"
                      : "bg-white/5 text-white/70 hover:bg-white/10"
                  }`}
                >
                  {cat}
                </button>
              ))}

              <label className="ml-auto inline-flex cursor-pointer items-center gap-2 text-xs text-white/70">
                <input
                  type="checkbox"
                  checked={onlyTrusted}
                  onChange={(e) => setOnlyTrusted(e.target.checked)}
                  className="h-3 w-3 rounded border-white/20 bg-black text-emerald-500 focus:ring-emerald-500"
                />
                Show trusted sources only
              </label>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((tool) => (
            <ToolCard key={tool.name} tool={tool} />
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full rounded-lg border border-white/10 bg-white/5 p-6 text-center text-white/60">
              No tools match your search.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function ToolCard({ tool }) {
  const Icon = tool.icon ?? Terminal;
  return (
    <article className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-5 transition hover:border-emerald-400/30 hover:shadow-[0_0_0_1px_rgba(52,211,153,0.2)]">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 ring-1 ring-emerald-400/30">
            <Icon className="h-4 w-4 text-emerald-300" />
          </div>
          <div>
            <h3 className="font-semibold text-white">{tool.name}</h3>
            <p className="text-xs text-white/50">{tool.category}</p>
          </div>
        </div>
        <a
          href={tool.url}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${tool.name}`}
          className="rounded-md border border-white/10 bg-white/5 p-2 text-white/80 transition hover:border-emerald-400/30 hover:bg-white/10 hover:text-white"
        >
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>

      <p className="mb-4 text-sm leading-6 text-white/70">{tool.description}</p>

      <div className="flex flex-wrap items-center gap-2">
        {tool.tags.map((t) => (
          <span key={t} className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-white/70">
            #{t}
          </span>
        ))}
      </div>

      <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-emerald-400/10 blur-3xl" />
    </article>
  );
}
