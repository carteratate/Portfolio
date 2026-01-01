import Link from "next/link";
import Image from "next/image";

function Figure({
  src,
  alt,
  caption,
  aspect = "aspect-[16/9]",
}: {
  src: string;
  alt: string;
  caption?: string;
  aspect?: string;
}) {
  return (
    <figure className="rounded-2xl border border-zinc-800 bg-zinc-950 p-4">
      <div className={`relative w-full overflow-hidden rounded-xl ${aspect}`}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 768px"
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-sm text-zinc-400">{caption}</figcaption>
      )}
    </figure>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-14 border-t border-zinc-800 pt-12">
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      <div className="mt-6 space-y-6 text-zinc-300">{children}</div>
    </section>
  );
}

export default function NuggetCaseStudyPage() {
  return (
    <main className="bg-zinc-950 text-zinc-50">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <Link
          href="/#projects"
          className="text-sm text-zinc-300 underline underline-offset-4 hover:text-white"
        >
          ← Back to Projects
        </Link>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight">
          Nugget Casino: Daily Coin-In Modeling
        </h1>

        <p className="mt-4 text-lg leading-relaxed text-zinc-300">
          End-to-end pipeline: exploratory analysis, spatial clustering, feature
          engineering, model training (RF / XGBoost / LightGBM), SHAP
          explainability, and optimization.
        </p>

        {/* Quick “TL;DR” highlights */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-4">
            <p className="text-xs text-zinc-400">Model</p>
            <p className="mt-1 text-lg font-semibold">Random Forest</p>
          </div>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-4">
            <p className="text-xs text-zinc-400">Best R²</p>
            <p className="mt-1 text-lg font-semibold">0.9342</p>
          </div>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-4">
            <p className="text-xs text-zinc-400">Typical Error</p>
            <p className="mt-1 text-lg font-semibold">~$15 on ~$300/day</p>
          </div>
        </div>

        {/* 1) Heatmap */}
        <Section title="1) Exploratory Analysis: Daily Coin-In Heatmaps">
          <p className="leading-relaxed">
            I started by visualizing daily coin-in at the machine level to
            understand spatial and behavioral patterns across the floor. This
            helped confirm that “where a machine is placed” has strong signal.
          </p>

          <Figure
            src="/nugget/heatmap.png"
            alt="Heat map of daily coin-in by machine location"
            caption="Heat map of daily coin-in (customer dollars inserted per machine per day)."
            aspect="aspect-[16/10]"
          />
        </Section>

        {/* 2) Elbow */}
        <Section title="2) Choosing K: Elbow Method">
          <p className="leading-relaxed">
            To discretize the floor into spatial regions, I used the elbow
            method to choose an appropriate number of clusters. I selected{" "}
            <span className="font-semibold text-zinc-100">K = 13</span> where
            the marginal gain in inertia reduction leveled off.
          </p>

          <Figure
            src="/nugget/elbow.png"
            alt="Elbow method plot for K selection"
            caption="Elbow method: selected K=13 where the slope levels off."
            aspect="aspect-[16/9]"
          />
        </Section>

        {/* 3) K-means layout */}
        <Section title="3) Spatial Clustering: K-Means on Machine Locations">
          <p className="leading-relaxed">
            I ran K-means on machine coordinates to assign each machine a
            spatial cluster. These clusters became categorical features (and
            helped define proximity features) used in the supervised model.
          </p>

          <Figure
            src="/nugget/kmeans-layout.png"
            alt="Casino floor layout color-coded by K-means clusters"
            caption="Floor layout color-coded by K-means cluster assignment."
            aspect="aspect-[16/10]"
          />
        </Section>

        {/* 4) Feature engineering */}
        <Section title="4) Feature Engineering">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <span className="font-semibold text-zinc-100">Temporal:</span>{" "}
              day-of-week, weekend flag, holiday flag.
            </li>
            <li>
              <span className="font-semibold text-zinc-100">Spatial:</span>{" "}
              near door, near restroom, bar area, cluster id, proximity proxies.
            </li>
            <li>
              <span className="font-semibold text-zinc-100">Machine:</span> one-hot
              encoding for game type / cabinet / denomination categories.
            </li>
            <li>
              <span className="font-semibold text-zinc-100">Leakage-aware “machine strength”:</span>{" "}
              engineered a historical-performance feature while avoiding direct
              leakage from the target day.
            </li>
          </ul>

          <p className="leading-relaxed">
            I used SHAP to interpret which features actually drove predictions
            overall, and then zoomed in on the most important spatial vs temporal
            drivers.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <figure className="rounded-2xl border border-zinc-800 bg-zinc-950 p-4">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl">
                <Image
                    src="/nugget/shap-overall.png"
                    alt="Overall feature importance (SHAP)"
                    fill
                    className="object-contain"
                />
                </div>
                <figcaption className="mt-3 text-sm text-zinc-400 text-center">
                Overall feature importance
                </figcaption>
            </figure>

            <figure className="rounded-2xl border border-zinc-800 bg-zinc-950 p-4">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl">
                <Image
                    src="/nugget/shap-spatial.png"
                    alt="Spatial feature importance (SHAP)"
                    fill
                    className="object-contain"
                />
                </div>
                <figcaption className="mt-3 text-sm text-zinc-400 text-center">
                Spatial drivers
                </figcaption>
            </figure>

            <figure className="rounded-2xl border border-zinc-800 bg-zinc-950 p-4">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl">
                <Image
                    src="/nugget/shap-temporal.png"
                    alt="Temporal feature importance (SHAP)"
                    fill
                    className="object-contain"
                />
                </div>
                <figcaption className="mt-3 text-sm text-zinc-400 text-center">
                Temporal drivers
                </figcaption>
            </figure>

          </div>
        </Section>

        {/* 5) Models */}
        <Section title="5) Model Training: RF vs XGBoost vs LightGBM">
          <p className="leading-relaxed">
            I trained and evaluated Random Forest, XGBoost, and LightGBM. The
            initial comparison plot is “zoomed out” because it shows the entire
            target range across all machines and days.
          </p>

          <Figure
            src="/nugget/model-compare.png"
            alt="Model comparison plot across RF, XGBoost, and LightGBM"
            caption="Model comparison across the full target range (zoomed out)."
            aspect="aspect-[16/10]"
          />
        </Section>

        {/* 6) RF zoom */}
        <Section title="6) Random Forest: Best Performance (R² = 0.9342)">
          <p className="leading-relaxed">
            The Random Forest performed best with{" "}
            <span className="font-semibold text-zinc-100">R² = 0.9342</span>.
            In the most common daily coin-in range, predictions were typically
            within about{" "}
            <span className="font-semibold text-zinc-100">$15</span> on an
            average of roughly{" "}
            <span className="font-semibold text-zinc-100">$300</span> per day,
            which was strong enough to support layout optimization experiments.
          </p>

          <Figure
            src="/nugget/rf-zoom.png"
            alt="Zoomed-in Random Forest performance showing accuracy in common range"
            caption="Zoomed-in RF results: tight fit in the most common daily coin-in range."
            aspect="aspect-[16/9]"
          />
        </Section>

        {/* Footer nav */}
        <div className="mt-16 flex items-center justify-between border-t border-zinc-800 pt-8">
          <Link
            href="/#projects"
            className="text-sm text-zinc-300 underline underline-offset-4 hover:text-white"
          >
            ← Back to Projects
          </Link>
          <Link
            href="/#contact"
            className="text-sm text-zinc-300 underline underline-offset-4 hover:text-white"
          >
            Contact →
          </Link>
        </div>
      </div>
    </main>
  );
}

