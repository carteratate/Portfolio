import { projects } from "@/lib/projects";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-zinc-950 text-zinc-50">
      {/* HERO */}
      <section className="mx-auto max-w-4xl px-6 py-12">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-center sm:justify-between">
          {/* Left: text */}
          <div className="max-w-2xl">
            <p className="text-sm text-zinc-400">
              Cornell CS • Seeking SWE / Data / ML roles
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Carter Tate
            </h1>

            <p className="mt-4 text-lg leading-relaxed text-zinc-300">
              I build software systems that turn messy data into usable 
              predictions, recently developing ML-driven tools for revenue 
              modeling and optimization.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                className="rounded-full bg-zinc-50 px-5 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-200"
                href="mailto:your.email@cornell.edu"
              >
                Email
              </a>
              
              {/* <a
                className="rounded-full border border-zinc-700 px-5 py-2 text-sm hover:bg-zinc-900"
                href="https://github.com/carteratate"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a> */}
              <a
                className="rounded-full border border-zinc-700 px-5 py-2 text-sm hover:bg-zinc-900"
                href="https://linkedin.com/in/carter-tate-ab3975307/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="rounded-full border border-zinc-700 px-5 py-2 text-sm hover:bg-zinc-900"
                href="/resume"
              >
                Resume
              </a>
            </div>
          </div>

          {/* Right: headshot */}
          <div className="shrink-0">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-3">
              <Image
                src="/about/headshot.jpg"
                alt="Carter Tate headshot"
                width={320}
                height={320}
                className="h-44 w-44 rounded-xl object-cover sm:h-48 sm:w-48"
                priority
              />
            </div>
          </div>
        </div>
      </section>


      {/* ABOUT */}
      <section
        id="about"
        className="mx-auto max-w-4xl px-6 py-12 border-t border-zinc-800"
      >
        <h2 className="text-3xl font-semibold tracking-tight">About Me</h2>

        <div className="mt-8 space-y-6 text-zinc-300">
          <p className="leading-relaxed">
            I’m a Cornell Computer Science student focused on building
            data-driven products and ML systems. My recent coursework 
            that interests me most is related to Machine Learning, 
            Operating Systems, AI Agents and Rationality, and Software Engineering.
          </p>

          <p className="leading-relaxed">
            Outside of academics and projects, I spend much of my time contributing 
            to the Cornell wrestling team. Competing has taught me to be comfortable 
            with high performance team dynamics, operating under pressure, and 
            improving quickly over time with feedback loops.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <figure className="rounded-2xl border border-zinc-800 bg-zinc-950 p-4">
              <Image
                src="/about/wrestling-team.jpg"
                alt="Cornell Wrestling team"
                width={1200}
                height={800}
                className="h-56 w-full rounded-xl object-cover"
                priority
              />
            </figure>

            <figure className="rounded-2xl border border-zinc-800 bg-zinc-950 p-4">
              <Image
                src="/about/wrestling-individual.jpg"
                alt="Carter Tate wrestling match"
                width={1200}
                height={800}
                className="h-56 w-full rounded-xl object-cover"
              />
            </figure>
          </div>


          <p className="leading-relaxed">
            In my free time, I'm interested in Formula 1 (strategy, engineering tradeoffs, and
            marginal gains) and different branches of philosophy that I can 
            learn from to better reason about the world around me.
          </p>

          <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-stretch">
            {/* F1 (featured / wider) */}
            <figure className="flex-[3] rounded-xl border border-zinc-800 bg-zinc-950 p-3">
              <div className="relative h-64 w-full overflow-hidden rounded-lg">
                <Image
                  src="/about/f1.jpg"
                  alt="Formula One racing"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "center" }}
                />
              </div>
            </figure>

            {/* Marcus (portrait / smaller, show full face) */}
            <figure className="flex-[2] rounded-xl border border-zinc-800 bg-zinc-950 p-3">
            <div className="relative h-64 w-full max-w-[220px] mx-auto overflow-hidden rounded-lg bg-zinc-900">
                <Image
                  src="/about/marcus-aurelius.jpg"
                  alt="Marcus Aurelius bust"
                  fill
                  className="object-contain"
                  // contain respects the whole portrait, no face cut off
                  style={{ objectPosition: "center" }}
                />
              </div>
            </figure>
          </div>




        </div>
      </section>

      <section
        id="internship"
        className="mx-auto max-w-4xl px-6 py-12 border-t border-zinc-800"
      >
        <h2 className="text-3xl font-semibold tracking-tight">
          Internship Experience
        </h2>

        <div className="mt-10 flex flex-col gap-10">
          {/* IGT Internship Card */}
          <div className="flex flex-col gap-6 rounded-2xl border border-zinc-800 p-6">
            
            {/* Header */}
            <div className="flex items-center gap-4">
              <img
                src="/internship/igt-logo.png"
                alt="IGT logo"
                className="h-12 w-auto"
              />
              <div>
                <h3 className="text-xl font-semibold">
                  International Game Technology (IGT)
                </h3>
                <p className="text-sm text-zinc-400">
                  Core Studios Technical Intern · June 2025 – August 2025
                </p>
              </div>
            </div>

            {/* Description */}
            <ul className="list-disc space-y-3 pl-5 text-zinc-300">
              <li>
                Developed and trained <strong>deep neural networks (scikit-learn),
                XGBoost, and Random Forest models</strong> to predict slot-machine
                session dynamics, focusing on behavioral modeling and extensive
                custom feature engineering for high-dimensional gameplay data.
              </li>

              <li>
                Analyzed <strong>SHAP values</strong> to identify key drivers of longer
                player sessions and increasing bet behavior, and produced
                <strong> confusion matrices</strong> to rigorously evaluate predictive
                accuracy.
              </li>

              <li>
                Findings directly informed strategies for
                <strong> real-time slot machine game math adjustments</strong> at a global leader
                in the gaming industry with approximately
                <strong> $2.5B in annual revenue</strong>.
              </li>

              <li>
                Built <strong>automation scripts and testing frameworks in Unity </strong> 
                to reduce manual debugging time and improve developer iteration speed
                within the Core Studios pipeline.
              </li>
            </ul>
          </div>
        </div>
      </section>

      
      <section
        id="projects"
        className="mx-auto max-w-4xl px-6 py-12 border-t border-zinc-800"
      >
        <h2 className="text-3xl font-semibold tracking-tight">Projects</h2>

        <p className="mt-3 text-zinc-300">
          A few things I've been up to recently.
        </p>
       
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.slug}
            className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6"
          >
            <h2 className="text-lg font-semibold">{p.title}</h2>
            <p className="mt-2 text-sm text-zinc-300">{p.description}</p>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-300">
              {p.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-zinc-800 px-3 py-1 text-xs text-zinc-300"
                >
                  {t}
                </span>
              ))}
            </div>

            {(p.internalHref || p.links?.github || p.links?.demo) && (
              <div className="mt-5 flex gap-3 text-sm">
                <div className="mt-6">
                  {p.internalHref && (
                    <Link
                      href={p.internalHref}
                      className="
                        inline-flex items-center gap-2
                        rounded-full
                        bg-zinc-50 px-5 py-2
                        text-sm font-medium text-zinc-900
                        transition
                        hover:bg-white
                        hover:shadow-lg hover:shadow-white/10
                        focus:outline-none focus:ring-2 focus:ring-zinc-400
                      "
                    >
                      Deep-dive with Visuals!
                      <span aria-hidden>→</span>
                    </Link>
                  )}
                </div>


                {!p.internalHref && p.links?.github && (
                  <a
                    className="text-zinc-200 underline underline-offset-4 hover:text-white"
                    href={p.links.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                )}

                {!p.internalHref && p.links?.demo && (
                  <a
                    className="text-zinc-200 underline underline-offset-4 hover:text-white"
                    href={p.links.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Demo
                  </a>
                )}
              </div>
            )}

          </article>
        ))}
        </div>
      </section>

      
      <section
        id="contact"
        className="mx-auto max-w-4xl px-6 py-12 border-t border-zinc-800"
      >
        <h2 className="text-3xl font-semibold tracking-tight">Contact Me</h2>

        <p className="mt-3 text-zinc-300">
          Explore more here:
        </p>
       
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            className="rounded-full bg-zinc-50 px-5 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-200"
            href="mailto:your.email@cornell.edu"
          >
            Email
          </a>
          
          {/* <a
            className="rounded-full border border-zinc-700 px-5 py-2 text-sm font-medium hover:bg-zinc-900"
            href="https://github.com/carteratate"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a> */}
          <a
            className="rounded-full border border-zinc-700 px-5 py-2 text-sm font-medium hover:bg-zinc-900"
            href="https://linkedin.com/in/carter-tate-ab3975307/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="rounded-full border border-zinc-700 px-5 py-2 text-sm hover:bg-zinc-900"
            href="/resume"
          >
            Resume
          </a>
        </div>
      </section>
    </main>
  );
}

