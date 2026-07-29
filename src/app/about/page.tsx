import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import { siteConfig, skills } from "@/data/projects";

export const metadata: Metadata = {
  title: "About -- Mustapha Muhsin",
  description: siteConfig.longBio[0],
};

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-6">
      <section className="pt-24 sm:pt-32 pb-20 sm:pb-24">
        <Reveal>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-[13px] font-mono text-[var(--muted)] hover:text-[var(--text)] transition-colors mb-12"
          >
            &#8592; back
          </Link>
        </Reveal>

        <Reveal delay={60}>
          <h1 className="text-3xl sm:text-4xl font-medium tracking-[-0.03em] mb-10">
            About
          </h1>
        </Reveal>

        {siteConfig.longBio.map((paragraph, i) => (
          <Reveal key={i} delay={120 + i * 60}>
            <p className="text-[16px] sm:text-[17px] leading-[1.7] text-[var(--body)] max-w-xl mb-6">
              {paragraph}
            </p>
          </Reveal>
        ))}

        {/* Education */}
        <Reveal delay={300}>
          <div className="mt-16">
            <p className="text-[11px] font-mono font-medium uppercase tracking-[0.14em] text-[var(--faint)] mb-4">
              education
            </p>
            <div className="border-t border-[var(--border)] py-5">
              <p className="text-[15px] font-medium">
                {siteConfig.education.school}
              </p>
              <p className="mt-1 text-[14px] text-[var(--muted)]">
                {siteConfig.education.degree}
              </p>
              {siteConfig.education.grade && (
                <p className="mt-1 text-[12px] font-mono text-[var(--faint)]">
                  {siteConfig.education.grade.toLowerCase()}
                </p>
              )}
            </div>
          </div>
        </Reveal>

        {/* Skills (expanded) */}
        <Reveal delay={360}>
          <div className="mt-16">
            <p className="text-[11px] font-mono font-medium uppercase tracking-[0.14em] text-[var(--faint)] mb-6">
              skills
            </p>
            <div className="grid grid-cols-2 gap-8">
              {skills.map((cat) => (
                <div key={cat.category}>
                  <h4 className="text-[11px] font-mono font-medium uppercase tracking-[0.14em] text-[var(--faint)] mb-3">
                    {cat.category}
                  </h4>
                  <ul className="flex flex-wrap gap-x-3 gap-y-1.5 text-[14px] text-[var(--muted)] list-none">
                    {cat.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Contact CTA */}
        <Reveal delay={420}>
          <div className="mt-20 border-t border-[var(--border)] pt-12">
            <p className="text-[16px] text-[var(--muted)] mb-4">
              Want to work together?
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="link-underline font-mono text-[14px] text-[var(--accent)]"
            >
              {siteConfig.email}
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
