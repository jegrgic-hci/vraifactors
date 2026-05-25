"use client";

import { useEffect, useRef, useState } from "react";
import { motion, MotionConfig, useInView, useScroll, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  Brain,
  Languages,
  TrendingUp,
  Bot,
  Shield,
  Users,
  ChevronDown,
  Mail,
} from "lucide-react";

// ─── Data ──────────────────────────────────────────────────────────────────

const FOCUS_AREAS = [
  {
    id: "edtech",
    index: "01",
    icon: Brain,
    label: "EdTech",
    tagline: "Measuring minds in motion.",
    color: "#00d4ff",
    description:
      "Applied NLP to quantify student-AI interaction quality across cognitive dimensions — building an assessment tool that translates behavioral signals into actionable educator insights.",
    signal: "2 US school tech departments exploring adoption",
    tags: ["NLP", "Cognitive Assessment", "Behavioral Analytics"],
  },
  {
    id: "language",
    index: "02",
    icon: Languages,
    label: "Language Learning",
    tagline: "Acquisition, measured in real time.",
    color: "#a78bfa",
    description:
      "AI-powered language learning platform in active use by students and an educator — applying NLP and speech analysis to measure real-time acquisition with live analytics driving iterative improvement.",
    signal: "Live with active student cohort",
    tags: ["Speech Analysis", "NLP", "Live Analytics"],
  },
  {
    id: "cro",
    index: "03",
    icon: TrendingUp,
    label: "Predictive CRO",
    tagline: "Know before you test.",
    color: "#00d4ff",
    description:
      "Designing a predictive CRO optimization tool — applying visual cognitive attention science and human factors behavioral patterns to forecast user flow performance and recommend design changes before a single user test is run.",
    signal: "Pre-test prediction, zero user sessions required",
    tags: ["Attention Science", "Human Factors", "Behavioral Modeling"],
  },
  {
    id: "robotics",
    index: "04",
    icon: Bot,
    label: "Assistive Robotics",
    tagline: "Reducing the cost of connection.",
    color: "#a78bfa",
    description:
      "Exploring how AI and ML can minimize the biological-connection barriers of prosthetics — making adaptive, responsive assistive technology accessible where it currently is not.",
    signal: "Bridging AI to physical rehabilitation",
    tags: ["ML", "Prosthetics", "Accessibility"],
  },
  {
    id: "ethics",
    index: "05",
    icon: Shield,
    label: "AI Ethics in Design",
    tagline: "Detect. Deter. Design better.",
    color: "#00d4ff",
    description:
      "How do we detect and deter AI-driven Dark UX practices in the age of computers as social actors? Building frameworks that surface manipulation before it ships.",
    signal: "Emerging research frontier",
    tags: ["Dark Patterns", "AI Ethics", "Social Computing"],
  },
  {
    id: "consulting",
    index: "06",
    icon: Users,
    label: "Consultation",
    tagline: "Human-centered. Data-driven.",
    color: "#a78bfa",
    description:
      "Integrating human-centered design, behavioral science, and data-driven research with hands-on AI product development — designing and building tools at the intersection of HCI and applied AI.",
    signal: "Available for engagements",
    tags: ["HCI", "Behavioral Science", "AI Product"],
  },
];

// ─── Components ─────────────────────────────────────────────────────────────

function GridBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none" aria-hidden="true">
      <div className="absolute inset-0 dot-grid opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#06060f]" />
    </div>
  );
}

function Noise() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none opacity-[0.025]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
        backgroundSize: "128px 128px",
      }}
    />
  );
}

function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#06060f]/90 backdrop-blur-xl border-b border-white/[0.04]"
          : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <span className="font-mono text-sm tracking-[0.2em] text-[#00d4ff] uppercase font-medium">
          vraifactors
        </span>
        <div className="flex items-center gap-8">
          <a
            href="#focus"
            className="text-xs tracking-widest uppercase text-white/75 hover:text-white transition-colors font-mono"
          >
            Focus
          </a>
          <a
            href="#about"
            className="text-xs tracking-widest uppercase text-white/75 hover:text-white transition-colors font-mono"
          >
            Studio
          </a>
          <a
            href="#contact"
            className="text-xs tracking-widest uppercase text-[#06060f] bg-[#00d4ff] px-4 py-2 hover:bg-[#a78bfa] transition-colors font-mono"
          >
            Connect
          </a>
        </div>
      </div>
    </motion.nav>
  );
}

function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 120]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Ambient glow blobs — decorative only */}
      <div aria-hidden="true" className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#7c3aed]/10 rounded-full blur-[120px] pointer-events-none" />
      <div aria-hidden="true" className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-[#00d4ff]/08 rounded-full blur-[80px] pointer-events-none" />

      <motion.div style={{ y, opacity }} className="relative text-center max-w-5xl mx-auto">
        {/* Studio label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="inline-flex items-center gap-3 mb-10"
        >
          <div className="h-px w-12 bg-[#00d4ff]/60" />
          <span className="font-mono text-xs tracking-[0.3em] text-[#00d4ff]/80 uppercase">
            AI that earns the right to inform
          </span>
          <div className="h-px w-12 bg-[#00d4ff]/60" />
        </motion.div>

        {/* Main wordmark */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(3.5rem,10vw,9rem)] font-bold leading-[0.9] tracking-tight mb-12"
        >
          <span className="text-white">vrai</span>
          <span
            className="glow-cyan"
            style={{ color: "#00d4ff" }}
          >
            factors
          </span>
        </motion.h1>

        {/* Core statement */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <p className="text-[clamp(1.1rem,2.2vw,1.5rem)] text-white/70 leading-relaxed font-light">
            &ldquo;True efficiency in the age of AI isn&apos;t about how many actions we can{" "}
            <span className="text-white font-normal">automate</span> in an hour; it&apos;s about how many{" "}
            <span style={{ color: "#00d4ff" }} className="font-normal">correct decisions</span>{" "}
            we can make with the help of a machine.&rdquo;
          </p>
        </motion.blockquote>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col items-center gap-2 text-white/60"
        >
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase">
            Explore focus areas
          </span>
          <ChevronDown size={14} className="animate-bounce" aria-hidden="true" />
        </motion.div>
      </motion.div>

      {/* Bottom stat strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-12 left-0 right-0 px-6"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-end">
          <div className="flex gap-12">
            {[
              { value: "6", label: "Focus Areas" },
              { value: "3+", label: "Active Projects" },
              { value: "HCI × AI", label: "Core Lens" },
            ].map(({ value, label }) => (
              <div key={label} className="text-left">
                <div className="font-mono text-lg text-[#00d4ff] font-bold">
                  {value}
                </div>
                <div className="font-mono text-[10px] text-white/65 tracking-widest uppercase mt-1">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function FocusCard({
  area,
  index: cardIndex,
}: {
  area: (typeof FOCUS_AREAS)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState(false);
  const Icon = area.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: (cardIndex % 2) * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative"
    >
      <div
        className="relative h-full transition-all duration-500 overflow-hidden cursor-default"
        style={{
          border: `1px solid ${hovered ? area.color + "30" : "rgba(255,255,255,0.06)"}`,
          background: hovered ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.02)",
          boxShadow: hovered
            ? `0 0 40px -10px ${area.color}30, inset 0 0 30px -20px ${area.color}10`
            : "none",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Corner accent */}
        <div
          className="absolute top-0 right-0 w-12 h-12 transition-opacity duration-500"
          style={{
            opacity: hovered ? 1 : 0,
            background: `linear-gradient(135deg, transparent 50%, ${area.color}20 50%)`,
          }}
        />

        <div className="p-8 h-full flex flex-col gap-6">
          {/* Header row */}
          <div className="flex items-start justify-between">
            <div
              className="w-10 h-10 flex items-center justify-center border"
              style={{
                borderColor: `${area.color}30`,
                backgroundColor: `${area.color}08`,
              }}
            >
              <Icon size={18} style={{ color: area.color }} />
            </div>
            <span className="font-mono text-xs text-white/60 tracking-wider">
              {area.index}
            </span>
          </div>

          {/* Label & tagline */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-1 tracking-tight">
              {area.label}
            </h3>
            <p
              className="font-mono text-xs tracking-wide"
              style={{ color: area.color }}
            >
              {area.tagline}
            </p>
          </div>

          {/* Description */}
          <p className="text-sm text-white/70 leading-relaxed flex-1">
            {area.description}
          </p>

          {/* Signal bar */}
          <div
            className="flex items-center gap-2 pt-4"
            style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
          >
            <div
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ backgroundColor: area.color }}
            />
            <span className="text-[11px] text-white/65 font-mono">
              {area.signal}
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {area.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-mono px-2 py-1 tracking-wider uppercase"
                style={{
                  color: area.color,
                  backgroundColor: `${area.color}08`,
                  border: `1px solid ${area.color}25`,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function FocusSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="focus" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-8 bg-[#00d4ff]/60" />
            <span className="font-mono text-xs tracking-[0.3em] text-[#00d4ff]/70 uppercase">
              Areas of focus
            </span>
          </div>
          <h2 className="text-5xl font-bold text-white tracking-tight max-w-xl leading-tight">
            Six domains.
            <br />
            <span className="text-white/60">One unifying question.</span>
          </h2>
          <p className="mt-6 text-white/65 max-w-lg leading-relaxed text-sm">
            How can we build AI systems that genuinely serve human cognition —
            not just automate it?
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {FOCUS_AREAS.map((area, i) => (
            <FocusCard key={area.id} area={area} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-[#7c3aed]/40 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: text */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-8 bg-[#a78bfa]/60" />
              <span className="font-mono text-xs tracking-[0.3em] text-[#a78bfa]/70 uppercase">
                The studio
              </span>
            </div>

            <h2 className="text-4xl font-bold text-white tracking-tight leading-tight mb-8">
              We don&apos;t build AI that replaces
              <br />
              <span
                className="glow-violet"
                style={{ color: "#a78bfa" }}
              >
                human judgment.
              </span>
            </h2>

            <p className="text-lg text-white font-normal mb-6 leading-snug">
              We build AI that earns the right to inform it.
            </p>

            <div className="space-y-5 text-white/70 text-sm leading-relaxed">
              <p>
                vraifactors is a studio built around engineered trust — where
                observability, directability, and human authority are structural
                requirements, not afterthoughts.
              </p>
              <p>
                We combine human-computer interaction research, behavioral
                science, and production-grade AI development to build systems
                where humans remain the decision-makers — and the machine
                earns its influence through transparency and accuracy.
              </p>
              <p>
                Any system that treats human oversight as a bottleneck is not
                just poorly designed — it is inherently malicious by
                architecture. That is our filter. Our work is for people who
                agree.
              </p>
            </div>
          </motion.div>

          {/* Right: philosophy grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              {
                title: "Observability",
                body: "Every decision an AI system influences must be legible. Black boxes are a design failure.",
                accent: "#00d4ff",
              },
              {
                title: "Directability",
                body: "Humans must be able to correct, override, and redirect the system at any point — by design.",
                accent: "#a78bfa",
              },
              {
                title: "Human authority",
                body: "AI informs. Humans decide. That hierarchy is non-negotiable in everything we build.",
                accent: "#00d4ff",
              },
              {
                title: "Earned trust",
                body: "Trust is not assumed or asserted. It is built through accuracy, transparency, and track record.",
                accent: "#a78bfa",
              },
            ].map(({ title, body, accent }) => (
              <div
                key={title}
                className="p-6 border border-white/[0.06] bg-white/[0.02]"
              >
                <div
                  className="font-mono text-xs tracking-widest uppercase mb-3"
                  style={{ color: accent }}
                >
                  {title}
                </div>
                <p className="text-white/65 text-xs leading-relaxed">{body}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="relative py-40 px-6">
      {/* Top separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-[#00d4ff]/20 to-transparent" />

      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-8 bg-[#00d4ff]/60" />
            <span className="font-mono text-xs tracking-[0.3em] text-[#00d4ff]/70 uppercase">
              Let&apos;s build
            </span>
            <div className="h-px w-8 bg-[#00d4ff]/60" />
          </div>

          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-bold text-white tracking-tight leading-tight mb-6">
            Researching, partnering,
            <br />
            <span style={{ color: "#00d4ff" }} className="glow-cyan">
              or just curious?
            </span>
          </h2>

          <p className="text-white/70 text-base max-w-xl mx-auto leading-relaxed mb-12">
            vraifactors is open to collaborations with institutions, product
            teams, and researchers working at the edge of human-AI interaction.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:hello@vraifactors.com"
              className="group inline-flex items-center gap-3 bg-[#00d4ff] text-[#06060f] px-8 py-4 font-mono text-sm font-bold tracking-widest uppercase hover:bg-[#a78bfa] transition-all duration-300"
            >
              <Mail size={15} />
              Get in touch
              <ArrowUpRight
                size={14}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/[0.04] px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-mono text-xs text-white/60 tracking-[0.2em] uppercase">
          vraifactors &copy; 2025
        </span>
        <span className="font-mono text-xs text-white/60">
          AI that earns the right to inform human judgment
        </span>
      </div>
    </footer>
  );
}

// ─── Page ───────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="relative min-h-screen">
        <GridBackground />
        <Noise />
        <NavBar />
        <HeroSection />
        <FocusSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </main>
    </MotionConfig>
  );
}
