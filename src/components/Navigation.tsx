import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logoImage from 'figma:asset/9a4ab37fd35580740e0a1287c7b07dbd9912a379.png';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', value: 'home' },
    { label: 'About', value: 'about' },
    { label: 'Our Trails', value: 'trails' },
    { label: 'Academy', value: 'academy' },
    { label: 'Services', value: 'services' },
    { label: 'Support', value: 'support' },
    { label: 'Contact', value: 'contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img src={logoImage} alt="Transition Trails" className="h-12 w-12" />
            <span className="text-[var(--tt-evergreen)] tracking-tight hidden sm:block">
              TRANSITION TRAILS
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => onNavigate(item.value)}
                className={`relative px-1 py-2 transition-colors ${
                  currentPage === item.value
                    ? 'text-[var(--tt-evergreen)]'
                    : 'text-gray-600 hover:text-[var(--tt-evergreen)]'
                }`}
              >
                {item.label}
                {currentPage === item.value && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--tt-sun-amber)]" />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-[var(--tt-evergreen)]"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg animate-fade-in-up">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => {
                  onNavigate(item.value);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${
                  currentPage === item.value
                    ? 'bg-[var(--tt-trail-cream)] text-[var(--tt-evergreen)]'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
