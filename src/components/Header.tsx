'use client';

import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const linkStyles =
    'bg-[linear-gradient(var(--accent),var(--accent))] bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300 hover:bg-[length:100%_1px] hover:text-[var(--text)] pb-0.5';

  return (
    <header className="sticky top-0 z-40 bg-[var(--bg)]/80 backdrop-blur-xl border-b border-[var(--border)]">
      <div className="max-w-2xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-sans font-medium text-[15px] text-[var(--text)] lowercase"
        >
          mustapha muhsin
        </Link>
        <nav className="flex items-center gap-6 text-[13px] text-[var(--muted)] lowercase">
          <Link href="/#work" className={linkStyles}>
            work
          </Link>
          <Link href="/about" className={linkStyles}>
            about
          </Link>
          <a
            href="mailto:onoruoiza15@gmail.com"
            className={`hidden sm:inline-block ${linkStyles}`}
          >
            contact
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
