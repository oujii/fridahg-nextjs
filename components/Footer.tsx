import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 pb-8 text-center text-xs text-gray-500">
      <div className="mb-2">
        <Link href="/store-policy" className="hover:text-black transition-colors">
          store policy
        </Link>
        <span className="mx-2">|</span>
        <Link href="/printing-methods" className="hover:text-black transition-colors">
          printing methods
        </Link>
      </div>
      <div className="mb-3">
        © Frida Häggström Gerdt &nbsp;·&nbsp; Graphic design & printmaking &nbsp;·&nbsp; Stockholm, Sweden &nbsp;·&nbsp;{" "}
        <a href="mailto:frida.haggstrom@gmail.com" className="hover:text-black transition-colors">
          frida.haggstrom@gmail.com
        </a>
      </div>
      <div className="flex justify-center gap-3">
        <a href="https://www.instagram.com/fridahgerdt" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/fridahgerdt" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
