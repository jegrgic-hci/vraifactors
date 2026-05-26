import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "On why we measure differently — vraifactors",
  description:
    "True efficiency in the age of AI isn't about how many actions we can automate in an hour; it's about how many correct decisions we can make with the help of a machine.",
};

export default function EfficiencyMetric() {
  return (
    <div className="min-h-screen bg-[#09080a] text-[#f0ece6]">
      {/* Nav */}
      <header className="max-w-3xl mx-auto px-6 py-8 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-[#c9954a]/70 hover:text-[#c9954a] transition-colors group"
        >
          <ArrowLeft size={12} className="group-hover:-translate-x-0.5 transition-transform" />
          vraifactors
        </Link>
        <span className="font-mono text-xs text-white/30 tracking-widest uppercase">
          Writing
        </span>
      </header>

      <main className="max-w-3xl mx-auto px-6 pb-32">
        {/* Title block */}
        <div className="mb-16 pt-8 border-t border-white/[0.06]">
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-[#c9954a] mb-6">
            vraifactors — Essay
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
            On why we measure differently
          </h1>
          <p className="text-white/50 text-sm font-mono">
            Human Factors · AI Design · Coactive Systems
          </p>
        </div>

        {/* Body */}
        <article className="prose-article">
          <p>
            We are currently witnessing a real-time experiment in substituting human judgment
            with crude automation. Recent revelations regarding the Department of Government
            Efficiency (DOGE) illustrate how the &ldquo;efficiency&rdquo; of AI can be weaponized
            to bypass due process. By using AI models to mass-cancel thousands of federal grants
            based on simple keyword searches, the system stripped away all meaningful context in
            favor of speed.
          </p>

          <p>
            From a Human Factors perspective, this is an abuse of the human-agent interdependence
            these systems rely on for sound reasoning (Joint Cognitive System (JCS), Hollnagel &amp;
            Woods, 2005). By deploying AI to flag and terminate grants without transparent reasoning,
            DOGE created a system that attributes failure to the user, even if that failure was driven
            by system design (Moral Crumple Zone, Elish, 2019). The staff &ldquo;reviewed&rdquo; the
            lists, but because the AI provided no Uncertainty Metadata or contextual logic, there was
            no Common Ground (Klein et al., 2005)&mdash;the essential shared understanding between
            human and machine. Without knowing <em>why</em> the AI flagged a specific study, the
            human cannot effectively audit the decision.
          </p>

          <p>
            Critically, while human oversight was technically present, the staffing of the agency
            with personnel who lacked deep domain expertise created a mismatched mental model. These
            &ldquo;reviewers&rdquo; were unable to recognize when the AI was hallucinating political
            bias into historical research. The system was not built to allow for sound review or
            intervention; it was built to facilitate compliance, not critical thinking.
          </p>

          <h2>Engineering Calibrated Trust</h2>

          <p>
            The path to preventing catastrophic AI failure is not found in more data or quicker
            results; it is found in the engineering of calibrated trust. To understand why
            calibration&mdash;matching a user&rsquo;s trust to the system&rsquo;s actual
            capability&mdash;is critical, we must look to the elevator. Elisha Otis didn&rsquo;t
            actually invent the elevator; he spectacularly invented <em>Trust</em> in the elevator.
          </p>

          <p>
            At the 1854 World&rsquo;s Fair, Otis stood on a platform, hoisted it high above a
            gasping crowd, and ordered the hoisting cable to be cut. When the platform held fast,
            it wasn&rsquo;t because of a &ldquo;friendly&rdquo; interface or a marketing
            campaign&mdash;it was because a Hard Constraint, a mechanical safety brake, had snapped
            into place. Otis proved that trust is not a feeling we coax from a user; it is a
            structural guarantee. It is the result of making the system&rsquo;s safety limits
            observable and its fail-safes absolute.
          </p>

          <p>
            We must apply this same rigor to AI. Authentic trust cannot be &ldquo;skinned&rdquo;
            onto an interface with better icons or conversational filler that treats computers as
            social actors. Using &ldquo;friendliness&rdquo; to mask a lack of transparency is a
            form of deceptive UX that leads to overtrust and, eventually, disaster.
          </p>

          <h2>The Shift to Coactive Design</h2>

          <p>
            Instead, we build trust by acknowledging that certain tasks&mdash;by their very
            nature&mdash;require human authority. The system must be designed to
            &ldquo;recognize&rdquo; task severity and pull the user into the process, not as an
            afterthought, but as a primary component. As we saw with the DOGE example, even when
            a human is &ldquo;in the loop,&rdquo; the system can still be weaponized if the UI
            is designed to favor speed over accuracy.
          </p>

          <p>
            To prevent this, we must shift our focus to the Level of Automation (LoA). By
            realizing that AI and humans form a joint cognitive system, we can build in hard
            constraints&mdash;digital &ldquo;safety brakes&rdquo;&mdash;that prevent the system
            from neglecting the user for the sake of a &ldquo;quick&rdquo; result.
          </p>

          <p>
            Any system that treats human oversight as a bottleneck to be bypassed is not just
            poorly designed; it is inherently malicious by architecture. If a system doesn&rsquo;t
            allow for Observability and Directability, it should never have been deployed in the
            first place.
          </p>

          <h2>Building for Agency, Not Just Efficiency</h2>

          <blockquote>
            True efficiency in the age of AI isn&rsquo;t about how many actions we can automate
            in an hour; it&rsquo;s about how many correct decisions we can make with the help of
            a machine.
          </blockquote>

          <p>
            The &ldquo;efficiency&rdquo; promised by automated systems like DOGE and others (and
            there are others and will be others) is often a debt that will be paid later in the
            form of errors, lawsuits, and lost trust. True efficiency in the age of AI isn&rsquo;t
            about how many actions we can automate in an hour; it&rsquo;s about how many{" "}
            <em>correct</em> decisions we can make with the help of a machine.
          </p>

          <p>
            We must stop designing AI as a replacement for human expertise and start designing it
            as a support for it. If we continue to build systems that prioritize speed over common
            ground, we aren&rsquo;t building progress&mdash;we are building a machine that we can
            no longer steer.
          </p>
        </article>
      </main>
    </div>
  );
}
