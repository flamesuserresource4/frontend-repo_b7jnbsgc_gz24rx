import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tools from "./components/Tools";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-black font-inter text-white">
      <Navbar />
      <main>
        <Hero />
        <section id="about" className="bg-zinc-950 py-10 text-white/80">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold text-white">About this directory</h2>
              <p className="mt-2 text-sm leading-6">
                Explore a curated collection of reputable, open-source security tools. This site is designed to help students, blue teams, and permissioned red teams learn and improve defenses. Always follow a responsible disclosure policy and local laws.
              </p>
            </div>
          </div>
        </section>
        <Tools />
      </main>
      <Footer />
    </div>
  );
}

export default App;
