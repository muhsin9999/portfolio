import Reveal from "@/components/Reveal";
import Link from "next/link";
import {
  siteConfig,
  projects,
  otherProjects,
  skills,
} from "@/data/projects";

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto px-6">
      {/* ==========================================
          HERO
          ========================================== */}
      <section className="pt-24 sm:pt-32 pb-20 sm:pb-24">
        <Reveal>
          <div className="flex items-center gap-2 text-[13px] text-[var(--muted)] font-mono mb-5">
            <span className="pulse-dot" />
            open to remote roles
          </div>
        </Reveal>

        <Reveal delay={60}>
          <h1 className="text-4xl sm:text-[56px] font-medium tracking-[-0.03em] leading-[1.05]">
            {siteConfig.name}
          </h1>
        </Reveal>

        <Reveal delay={120}>
          <p className="mt-3 text-[15px] sm:text-base font-mono text-[var(--muted)] tracking-wide">
            {siteConfig.title.toLowerCase()} // {siteConfig.location.toLowerCase()}
          </p>
        </Reveal>

        <Reveal delay={180}>
          <p className="mt-8 text-[16px] sm:text-[17px] leading-[1.7] text-[var(--body)] max-w-xl">
            {siteConfig.bio}
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-8 flex flex-wrap items-center gap-5 text-[13px] font-mono">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-[var(--muted)]"
            >
              github &#8599;
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-[var(--muted)]"
            >
              linkedin &#8599;
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="link-underline text-[var(--accent)]"
            >
              {siteConfig.email}
            </a>
            <a
              href="/Mustapha_Muhsin_Resume.pdf"
              download
              className="link-underline text-[var(--muted)]"
            >
              resume &#8595;
            </a>
          </div>
        </Reveal>
      </section>

      {/* ==========================================
          SELECTED WORK
          ========================================== */}
      <section id="work" className="pb-20 sm:pb-24">
        <Reveal>
          <p className="text-[11px] font-mono font-medium uppercase tracking-[0.14em] text-[var(--faint)] mb-2">
            selected work
          </p>
        </Reveal>

        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={(i + 1) * 60}>
            <Link
              href={`/work/${project.slug}`}
              className="group flex justify-between items-start gap-4 border-t border-[var(--border)] py-7 sm:py-8 text-inherit no-underline"
            >
              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-xl sm:text-2xl font-medium tracking-[-0.02em]">
                    {project.title}
                  </h3>
                  <span className="text-[10px] font-mono uppercase tracking-[0.06em] text-[var(--faint)]">
                    {project.status === "nda" ? "under nda" : project.status}
                  </span>
                </div>
                <p className="mt-2 text-[14px] sm:text-[15px] leading-[1.6] text-[var(--muted)] max-w-lg">
                  {project.tagline}
                </p>
                <p className="mt-3 text-[11px] font-mono uppercase tracking-[0.06em] text-[var(--faint)]">
                  {project.context}
                </p>
              </div>
              <span className="mt-2 text-[var(--muted)] transition-all duration-200 group-hover:translate-x-1 group-hover:text-[var(--accent)] shrink-0">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M7 17 17 7M17 7H9M17 7v8"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </Reveal>
        ))}

        <div className="border-t border-[var(--border)]" />

        {/* Other projects */}
        {otherProjects.length > 0 && (
          <div className="mt-12">
            <Reveal>
              <p className="text-[11px] font-mono font-medium uppercase tracking-[0.14em] text-[var(--faint)] mb-4">
                other projects
              </p>
            </Reveal>
            {otherProjects.map((op, i) => (
              <Reveal key={op.title} delay={(i + 1) * 60}>
                {op.url ? (
                  <a
                    href={op.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-baseline gap-3 py-3 text-inherit no-underline"
                  >
                    <span className="font-mono text-[14px] text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                      {op.title}
                    </span>
                    <span className="text-[13px] text-[var(--muted)]">
                      {op.description}
                    </span>
                    <span className="text-[var(--faint)] text-[12px] shrink-0 group-hover:text-[var(--accent)] transition-colors">
                      &#8599;
                    </span>
                  </a>
                ) : (
                  <div className="flex items-baseline gap-3 py-3 text-inherit">
                    <span className="font-mono text-[14px] text-[var(--text)]">
                      {op.title}
                    </span>
                    <span className="text-[13px] text-[var(--muted)]">
                      {op.description}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-[0.06em] text-[var(--faint)] ml-auto">
                      private repo
                    </span>
                  </div>
                )}
              </Reveal>
            ))}
          </div>
        )}
      </section>

      {/* ==========================================
          ABOUT (brief)
          ========================================== */}
      <section className="pb-20 sm:pb-24">
        <Reveal>
          <p className="text-[11px] font-mono font-medium uppercase tracking-[0.14em] text-[var(--faint)] mb-6">
            about
          </p>
        </Reveal>

        {siteConfig.longBio.slice(0, 2).map((paragraph, i) => (
          <Reveal key={i} delay={(i + 1) * 60}>
            <p className="text-[16px] sm:text-[17px] leading-[1.7] text-[var(--body)] max-w-xl mb-5">
              {paragraph}
            </p>
          </Reveal>
        ))}

        <Reveal delay={180}>
          <div className="mt-12 grid grid-cols-2 gap-8">
            {skills.map((cat) => (
              <div key={cat.category}>
                <h4 className="text-[11px] font-mono font-medium uppercase tracking-[0.14em] text-[var(--faint)] mb-3">
                  {cat.category}
                </h4>
                <ul className="flex flex-wrap gap-x-3 gap-y-1 text-[14px] text-[var(--muted)] list-none">
                  {cat.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-10">
            <Link
              href="/about"
              className="link-underline font-mono text-[13px] text-[var(--muted)]"
            >
              more about me &#8594;
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ==========================================
          CONTACT
          ========================================== */}
      <section className="border-t border-[var(--border)] pt-20 pb-24 sm:pb-32">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-[-0.03em]">
            Let&apos;s talk.
          </h2>
        </Reveal>

        <Reveal delay={60}>
          <p className="mt-4 text-[16px] sm:text-[17px] leading-[1.7] text-[var(--muted)] max-w-md">
            I am open to remote roles. The fastest way to reach me is email -- I reply to everything.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-8 flex flex-wrap items-center gap-5 text-[13px] font-mono">
            <a
              href={`mailto:${siteConfig.email}`}
              className="link-underline text-[var(--text)]"
            >
              {siteConfig.email}
            </a>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-[var(--muted)]"
            >
              github &#8599;
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-[var(--muted)]"
            >
              linkedin &#8599;
            </a>
            <a
              href="/Mustapha_Muhsin_Resume.pdf"
              download
              className="link-underline text-[var(--muted)]"
            >
              resume &#8595;
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
