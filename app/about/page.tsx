import Link from "next/link";
import Reveal from "@/components/Reveal";

const team = [
  { name: "Jordan Ellis", role: "Founder & Press Director", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80" },
  { name: "Priya Nair", role: "Head of Color Science", img: "https://images.unsplash.com/photo-1494790108755-2616b612b5ec?w=300&q=80" },
  { name: "Marcus Webb", role: "Production Manager", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80" },
  { name: "Sasha Okafor", role: "Client Experience Lead", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80" },
];

const galleryImgs = [
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  "https://images.unsplash.com/photo-1572375992501-4b0892d50c69?w=600&q=80",
  "https://images.unsplash.com/photo-1612538498456-e861df91d4d0?w=600&q=80",
  "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?w=600&q=80",
];

const values = [
  { icon: "⊙", title: "Color obsession", desc: "We calibrate our Komori presses daily and maintain the industry's widest Pantone coverage — 99% of all solid colors." },
  { icon: "✦", title: "Paper first", desc: "Before any job runs, we test the paper's coating, grain direction, and moisture content. Stock quality is non-negotiable." },
  { icon: "↗", title: "Radical transparency", desc: "Every quote includes a full breakdown of materials and labor. No hidden die charges, no bait-and-switch paper swaps." },
  { icon: "♻", title: "FSC & ISO 9001", desc: "All our papers are FSC-certified. Our facility runs on 100% renewable energy and recycles 98% of press waste." },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <Reveal>
      <section className="px-6 md:px-10 pt-12 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-semibold tracking-widest uppercase text-white/35">✦ ABOUT MERCURY</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                A press built by <span className="gradient-text-3">designers</span>, for designers.
              </h1>
              <p className="text-base text-white/50 leading-relaxed mb-8">
                We started Mercury Products in a 400 sq-ft Brooklyn studio in 2014 with one Heidelberg, two letterpresses, and an obsession with color science. A decade later we run a 12,000 sq-ft facility with Komori UV presses, hot-foil decks, die-cutters, and an in-house finishing studio — but we still answer every email ourselves.
              </p>
              <div className="flex flex-wrap gap-6">
                {[{ v: "2014", l: "FOUNDED" }, { v: "42", l: "CRAFTERS" }, { v: "4 cities", l: "STUDIOS" }, { v: "12M+", l: "PIECES PRESSED" }].map((s) => (
                  <div key={s.l}>
                    <p className="text-3xl font-bold gradient-text">{s.v}</p>
                    <p className="text-xs tracking-widest uppercase text-white/35 mt-1">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Certification badge */}
            <div className="shrink-0 px-6 py-4 rounded-2xl self-start"
              style={{ background: "#141414", border: "1px solid rgba(255,255,255,0.08)" }}>
              <p className="text-xs uppercase tracking-widest text-white/35 mb-1">CERTIFIED</p>
              <p className="font-bold text-white">FSC · ISO 9001</p>
            </div>
          </div>
        </div>
      </section>
      </Reveal>

      {/* Gallery */}
      <Reveal delayMs={80}>
      <section className="px-6 md:px-10 mb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {galleryImgs.map((img, i) => (
              <div key={i} className={`rounded-2xl overflow-hidden ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
                style={{ aspectRatio: i === 0 ? "1/1" : "1/1" }}>
                <img src={img} alt="" loading="lazy" decoding="async" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>
      </Reveal>

      {/* Values */}
      <Reveal delayMs={120}>
      <section className="px-6 md:px-10 mb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-10">
            What we <span className="gradient-text">stand for</span>.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {values.map((v) => (
              <div key={v.title} className="card p-7">
                <span className="text-2xl mb-4 block gradient-text">{v.icon}</span>
                <h3 className="font-bold text-white text-lg mb-2">{v.title}</h3>
                <p className="text-sm text-white/45 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </Reveal>

      {/* Team */}
      <Reveal delayMs={160}>
      <section className="px-6 md:px-10 mb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-10">
            The people <span className="gradient-text-2">behind the press</span>.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {team.map((t) => (
              <div key={t.name} className="group">
                <div className="rounded-2xl overflow-hidden mb-3" style={{ aspectRatio: "4/5" }}>
                  <img src={t.img} alt={t.name} loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <p className="font-semibold text-white text-sm">{t.name}</p>
                <p className="text-xs text-white/40 mt-0.5">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </Reveal>

      {/* CTA */}
      <Reveal delayMs={200}>
      <section className="px-6 md:px-10 mb-24">
        <div className="max-w-6xl mx-auto rounded-3xl p-10 md:p-16 text-center"
          style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #0f0f1a 100%)", border: "1px solid rgba(255,255,255,0.08)" }}>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Ready to press something <span className="gradient-text">unforgettable</span>?
          </h2>
          <p className="text-sm text-white/45 mb-8 max-w-md mx-auto leading-relaxed">
            Studio visits welcome Mon–Fri. Come see the presses in person — bring your files, leave with a plan.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/quote"
              className="gradient-btn flex items-center gap-2 text-sm font-semibold px-8 py-3.5 rounded-full text-white">
              Start a Project →
            </Link>
            <Link href="/contact"
              className="flex items-center gap-2 text-sm font-medium px-8 py-3.5 rounded-full text-white/70 hover:text-white transition-colors"
              style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      </Reveal>
    </div>
  );
}
