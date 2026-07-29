import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import { projects } from "@/data/projects";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} -- Mustapha Muhsin`,
    description: project.tagline,
  };
}

export default async function WorkDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const statusLabel =
    project.status === "nda" ? "under nda" : project.status;

  return (
    <div className="max-w-2xl mx-auto px-6">
      <section className="pt-24 sm:pt-32 pb-20 sm:pb-24">
        {/* Back link */}
        <Reveal>
          <Link
            href="/#work"
            className="inline-flex items-center gap-1.5 text-[13px] font-mono text-[var(--muted)] hover:text-[var(--text)] transition-colors mb-12"
          >
            &#8592; back
          </Link>
        </Reveal>

        {/* Title */}
        <Reveal delay={60}>
          <h1 className="text-3xl sm:text-4xl font-medium tracking-[-0.03em]">
            {project.title}
          </h1>
        </Reveal>

        {/* Meta row */}
        <Reveal delay={120}>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-[12px] font-mono text-[var(--faint)]">
            <span className="uppercase tracking-[0.06em]">{statusLabel}</span>
            <span className="text-[var(--border)]">/</span>
            <span>{project.context}</span>
          </div>
        </Reveal>

        {/* Tech stack */}
        <Reveal delay={180}>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-[13px] text-[var(--muted)] bg-[var(--pill)] px-2.5 py-1 rounded font-mono"
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Narrative sections */}
        <div className="mt-16 space-y-14">
          {project.sections.map((section, i) => (
            <Reveal key={section.heading} delay={240 + i * 60}>
              <div>
                <h2 className="text-[11px] font-mono font-medium uppercase tracking-[0.14em] text-[var(--faint)] mb-4">
                  {section.heading}
                </h2>
                <p className="text-[16px] sm:text-[17px] leading-[1.7] text-[var(--body)] max-w-xl">
                  {section.content}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Back to work */}
        <Reveal delay={420}>
          <div className="mt-20 border-t border-[var(--border)] pt-10">
            <Link
              href="/#work"
              className="link-underline font-mono text-[13px] text-[var(--muted)]"
            >
              &#8592; all work
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
