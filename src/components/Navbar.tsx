import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-bg border-b border-border">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <Link to="/" className="text-text font-bold text-lg">GameStore</Link>
        <ul className="flex gap-8">
          <li><Link to="/About" className="text-muted hover:text-text transition-colors">About</Link></li>
          <li><Link to="/Contact" className="text-muted hover:text-text transition-colors">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};
