import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-40 bg-[var(--tt-evergreen)] text-white p-4 rounded-full shadow-lg hover:bg-[var(--tt-summit-teal)] transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[var(--tt-sun-amber)] focus:ring-offset-2"
      aria-label="Back to top"
    >
      <ArrowUp size={24} />
    </button>
  );
}
