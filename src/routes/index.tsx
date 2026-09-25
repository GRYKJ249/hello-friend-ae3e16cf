import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowUpRight,
  AudioLines,
  Braces,
  Check,
  ChevronRight,
  Code2,
  Eye,
  Menu,
  Mic,
  Paperclip,
  Search,
  Sparkle,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

import neuralGrid from "@/assets/opera-neural-grid.jpg";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Opera AI — Orchestrate Intelligence" },
      {
        name: "description",
        content:
          "Opera AI is an intelligent workspace for research, creation, code, and multimodal reasoning.",
      },
      { property: "og:title", content: "Opera AI — Orchestrate Intelligence" },
      {
        property: "og:description",
        content: "One intelligent canvas for deep research, creation, and code.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OperaLanding,
});

const capabilities = [
  { icon: Search, label: "Deep research", code: "R-01" },
  { icon: Code2, label: "Code intelligence", code: "C-04" },
  { icon: Eye, label: "Vision & perception", code: "V-07" },
  { icon: AudioLines, label: "Voice synthesis", code: "A-09" },
];

function OperaMark({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="opera-mark" aria-hidden="true">
        <span />
      </div>
      {!compact && <span className="font-display text-base uppercase">Opera AI</span>}
    </div>
  );
}

function NeuralOrb() {
  return (
    <div className="orb-scene" aria-label="An animated dimensional model of the Opera AI neural core">
      <div className="orb-aura" />
      <div className="orb-shell">
        <div className="orb-grid" />
        <div className="orb-equator" />
        <div className="orb-meridian orb-meridian-one" />
        <div className="orb-meridian orb-meridian-two" />
        <div className="orb-core" />
      </div>
      <div className="orbit orbit-one"><span /></div>
      <div className="orbit orbit-two"><span /></div>
      <div className="orbit orbit-three"><span /></div>
    </div>
  );
}

function InterfacePanel() {
  return (
    <div className="interface-wrap" aria-label="Opera AI interface preview">
      <div className="interface-ghost interface-ghost-left">
        <span>CONTEXT</span>
        <div className="ghost-line ghost-line-long" />
        <div className="ghost-line" />
      </div>
      <div className="interface-ghost interface-ghost-right">
        <span>SIGNALS</span>
        <div className="signal-bars"><i /><i /><i /><i /><i /></div>
      </div>
      <div className="interface-main">
        <div className="interface-topbar">
          <div className="flex items-center gap-2"><span className="status-dot" /> OPERA / NEW SESSION</div>
          <div className="flex gap-3"><span>01</span><span>•••</span></div>
        </div>
        <div className="interface-body">
          <div className="assistant-seal"><Sparkle size={22} /></div>
          <p className="font-display text-xl sm:text-2xl">What will we create?</p>
          <div className="suggestion-list">
            <span><Search /> Research a complex topic</span>
            <span><Braces /> Build a production interface</span>
            <span><Eye /> Understand an image</span>
          </div>
          <div className="composer-mock">
            <span className="text-muted-foreground">Ask Opera anything…</span>
            <div className="flex items-center justify-between pt-5">
              <Paperclip size={17} />
              <span className="composer-action"><ArrowUpRight size={16} /></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function OperaLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [ready, setReady] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setReady(true);
    const items = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.14 },
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const scrollToExperience = () => {
    document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <main className={`opera-page ${ready ? "is-ready" : ""}`}>
      <div className="noise" aria-hidden="true" />
      <header className="site-header">
        <a href="#top" aria-label="Opera AI home"><OperaMark /></a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#intelligence">Intelligence</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#architecture">Architecture</a>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="header-access" onClick={scrollToExperience}>Enter Opera</Button>
          <Button
            variant="ghost"
            size="icon"
            className="menu-button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </header>

      {menuOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          <a href="#intelligence" onClick={() => setMenuOpen(false)}>Intelligence</a>
          <a href="#capabilities" onClick={() => setMenuOpen(false)}>Capabilities</a>
          <a href="#architecture" onClick={() => setMenuOpen(false)}>Architecture</a>
        </nav>
      )}

      <section id="top" ref={heroRef} className="hero-section">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <div className="eyebrow"><span /> OPERA SYSTEM 01 / ONLINE</div>
          <h1>ORCHESTRATE<br /><span>INTELLIGENCE.</span></h1>
          <p>A new stage for thought. Research, create, code, and reason with an intelligence built to move at your speed.</p>
          <div className="hero-actions">
            <Button size="lg" className="primary-cta" onClick={scrollToExperience}>START CREATING <ArrowUpRight /></Button>
            <Button size="lg" variant="outline" className="secondary-cta" onClick={() => document.querySelector("#intelligence")?.scrollIntoView({ behavior: "smooth" })}>DISCOVER OPERA</Button>
          </div>
        </div>
        <div className="hero-visual"><NeuralOrb /></div>
        <button className="scroll-cue" onClick={() => document.querySelector("#intelligence")?.scrollIntoView({ behavior: "smooth" })} aria-label="Scroll to explore">
          <ArrowDown /> <span>SCROLL TO DISCOVER</span>
        </button>
      </section>

      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          <span>REASON</span><i /> <span>CREATE</span><i /> <span>DISCOVER</span><i /> <span>BUILD</span><i />
          <span>REASON</span><i /> <span>CREATE</span><i /> <span>DISCOVER</span><i /> <span>BUILD</span><i />
        </div>
      </div>

      <section id="intelligence" className="narrative-section section-shell" data-reveal>
        <div className="section-index">01 / INTELLIGENCE</div>
        <div className="narrative-title">
          <h2>AN INTELLIGENCE<br />THAT <span>MEETS YOU</span><br />IN THE MOMENT.</h2>
        </div>
        <div className="narrative-copy">
          <p>Opera sees the whole composition—not just the next note. It works across text, image, sound, and code to turn unfinished thoughts into finished work.</p>
          <div className="metric"><strong>128K</strong><span>LIVE CONTEXT<br />TOKENS</span></div>
        </div>
      </section>

      <section className="interface-section section-shell" data-reveal>
        <InterfacePanel />
        <div className="interface-caption">
          <span>ONE CANVAS. EVERY MODE.</span>
          <p>Start with a sentence. Add a document, an image, or your voice. Opera keeps every signal in the same field of attention.</p>
        </div>
      </section>

      <section id="architecture" className="visual-story" data-reveal>
        <img src={neuralGrid} width={1600} height={900} loading="lazy" alt="A luminous blue network forming Opera AI's neural architecture" />
        <div className="visual-overlay" />
        <div className="visual-copy section-shell">
          <div className="section-index">02 / DEEP SYSTEMS</div>
          <h2>THINKING<br />IN <span>DIMENSIONS.</span></h2>
          <p>Every prompt travels through layered reasoning—mapping context, testing possibilities, and returning a clear path forward.</p>
        </div>
        <div className="visual-coordinates">LAT 04.128 &nbsp; / &nbsp; NODE 2,048</div>
      </section>

      <section id="capabilities" className="capabilities-section section-shell" data-reveal>
        <div className="capabilities-heading">
          <div className="section-index">03 / THE ENSEMBLE</div>
          <h2>EVERY MODE.<br /><span>ONE MIND.</span></h2>
          <p>Specialized intelligence, composed into a single responsive system.</p>
        </div>
        <div className="capability-list">
          {capabilities.map(({ icon: Icon, label, code }, index) => (
            <article key={label} className="capability-row">
              <span className="cap-number">0{index + 1}</span>
              <Icon aria-hidden="true" />
              <h3>{label}</h3>
              <span className="cap-code">{code} <ChevronRight /></span>
            </article>
          ))}
        </div>
      </section>

      <section className="manifesto-section" data-reveal>
        <div className="manifesto-orbit" aria-hidden="true"><span /><i /><b /></div>
        <div className="manifesto-copy">
          <div className="section-index">04 / ALWAYS IN MOTION</div>
          <h2>NOT A TOOL.<br />A <span>SECOND MIND.</span></h2>
          <p>Present when inspiration strikes. Precise when the work gets difficult. Quiet when you need to think.</p>
        </div>
        <div className="proof-strip">
          <div><strong>&lt; 200ms</strong><span>RESPONSE ORCHESTRATION</span></div>
          <div><strong>24 / 7</strong><span>CONTEXTUAL PRESENCE</span></div>
          <div><strong>∞</strong><span>WAYS TO CREATE</span></div>
        </div>
      </section>

      <section id="experience" className="final-section section-shell" data-reveal>
        <div className="final-mark"><OperaMark compact /></div>
        <p className="section-index">THE STAGE IS YOURS</p>
        <h2>READY WHEN<br />YOU ARE.</h2>
        <div className="live-composer">
          <div className="composer-field">Ask Opera anything</div>
          <div className="composer-footer">
            <Button variant="ghost" size="icon" aria-label="Attach a file"><Paperclip /></Button>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" aria-label="Use voice"><Mic /></Button>
              <Button size="icon" aria-label="Start Opera"><ArrowUpRight /></Button>
            </div>
          </div>
        </div>
        <div className="availability"><Check /> Opera is ready</div>
      </section>

      <footer className="site-footer section-shell">
        <OperaMark />
        <p>INTELLIGENCE, COMPOSED.</p>
        <span>© 2026 OPERA AI</span>
      </footer>
    </main>
  );
}