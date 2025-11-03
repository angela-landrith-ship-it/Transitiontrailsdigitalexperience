import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import logoImage from 'figma:asset/9a4ab37fd35580740e0a1287c7b07dbd9912a379.png';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[var(--tt-summit-teal)] text-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logoImage} alt="Transition Trails" className="h-12 w-12" />
              <span className="tracking-tight">TRANSITION TRAILS</span>
            </div>
            <p className="text-[var(--tt-trail-cream)] mb-4">
              Empowering digital journeys for learners, nonprofits, and volunteers.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-[var(--tt-sun-amber)] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-[var(--tt-sun-amber)] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-[var(--tt-sun-amber)] transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-[var(--tt-sun-amber)] transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Our Trails', 'Academy', 'Services'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => onNavigate(item.toLowerCase().replace(' ', ''))}
                    className="text-[var(--tt-trail-cream)] hover:text-[var(--tt-sun-amber)] transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4">Support Us</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('support')}
                  className="text-[var(--tt-trail-cream)] hover:text-[var(--tt-sun-amber)] transition-colors"
                >
                  Donate
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('support')}
                  className="text-[var(--tt-trail-cream)] hover:text-[var(--tt-sun-amber)] transition-colors"
                >
                  Volunteer
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('support')}
                  className="text-[var(--tt-trail-cream)] hover:text-[var(--tt-sun-amber)] transition-colors"
                >
                  Partner With Us
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-[var(--tt-trail-cream)]">
                <Mail size={18} className="mt-1 flex-shrink-0" />
                <span>info@transitiontrails.org</span>
              </li>
              <li className="flex items-start gap-2 text-[var(--tt-trail-cream)]">
                <Phone size={18} className="mt-1 flex-shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2 text-[var(--tt-trail-cream)]">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>123 Trail Avenue, Portland, OR 97201</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[var(--tt-sky-blue)] mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[var(--tt-trail-cream)]">
            <p>© 2025 Transition Trails. Built for Salesforce Experience Cloud. Designed for growth, inclusion, and digital empowerment.</p>
            <div className="flex gap-4">
              <button className="hover:text-white transition-colors">Privacy Policy</button>
              <button className="hover:text-white transition-colors">Terms of Service</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
