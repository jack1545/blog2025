export default function Footer() {
  return (
    <footer className="py-8 mt-12 border-t border-border-color">
      <div className="container mx-auto px-6 text-center text-sm">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent-blue transition-colors">
            <i className="fa-brands fa-github fa-lg"></i>
          </a>
          <a href="mailto:ou154586079@gmail.com" className="text-text-secondary hover:text-accent-blue transition-colors">
            <i className="fa-solid fa-envelope fa-lg"></i>
          </a>
        </div>
        <p className="font-mono text-xs text-text-secondary">
          © {new Date().getFullYear()} OUYI. All rights reserved.
        </p>
        <p className="font-mono text-xs text-text-secondary mt-2">
          STATUS: <span className="text-accent-green">AVAILABLE</span> | POWERED BY <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent-blue">VERCEL</a>
        </p>
      </div>
    </footer>
  );
} 