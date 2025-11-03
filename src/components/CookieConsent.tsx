import { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';
import { TTButton } from './TTButton';

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem('tt-cookie-consent');
    if (!consent) {
      // Show banner after 2 seconds
      setTimeout(() => setShowBanner(true), 2000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('tt-cookie-consent', 'accepted');
    setShowBanner(false);
    // SALESFORCE INTEGRATION: Track consent in user record
  };

  const handleDecline = () => {
    localStorage.setItem('tt-cookie-consent', 'declined');
    setShowBanner(false);
    // SALESFORCE INTEGRATION: Track non-consent, disable non-essential cookies
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-fade-in-up">
      <div className="bg-white border-t-4 border-[var(--tt-evergreen)] shadow-2xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-20 py-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex gap-4 flex-1">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[var(--tt-trail-cream)] rounded-full flex items-center justify-center">
                  <Cookie size={24} className="text-[var(--tt-evergreen)]" />
                </div>
              </div>
              <div className="flex-1">
                <h4 className="mb-2">We Value Your Privacy</h4>
                <p className="text-gray-600">
                  We use cookies to enhance your browsing experience, provide personalized content, and analyze our traffic. 
                  By clicking "Accept All", you consent to our use of cookies. Learn more in our{' '}
                  <a href="/privacy-policy" className="text-[var(--tt-evergreen)] underline hover:text-[var(--tt-summit-teal)]">
                    Privacy Policy
                  </a>.
                </p>
              </div>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <button
                onClick={handleDecline}
                className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                Decline
              </button>
              <TTButton variant="primary" onClick={handleAccept}>
                Accept All
              </TTButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
