import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-card-bg/80 backdrop-blur-sm sticky top-0 z-50 border-b border-border-color">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="font-serif text-2xl font-bold gradient-text">
          欧壹
        </Link>
        <div className="flex items-center space-x-6">
          <Link href="/" className="font-mono text-sm text-text-primary hover:text-accent-blue transition-colors">
            // HOME
          </Link>
          <Link href="/blog" className="font-mono text-sm text-text-primary hover:text-accent-blue transition-colors">
            // BLOG
          </Link>
          <Link href="/about" className="font-mono text-sm text-text-primary hover:text-accent-blue transition-colors">
            // ABOUT
          </Link>
          <Link href="/contact" className="font-mono text-sm text-text-primary hover:text-accent-blue transition-colors">
            // CONTACT
          </Link>
          <div className="relative">
            <input
              type="search"
              placeholder="Search..."
              className="font-mono text-xs bg-editor-bg border border-border-color rounded-full py-1.5 px-4 w-40 focus:w-48 transition-all focus:outline-none focus:ring-2 focus:ring-accent-blue/50"
            />
            <i className="fa-solid fa-magnifying-glass text-xs text-text-secondary absolute right-3 top-1/2 -translate-y-1/2"></i>
          </div>
        </div>
      </nav>
    </header>
  );
} 