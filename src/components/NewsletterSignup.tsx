import { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';
import { Input } from './ui/input';
import { TTButton } from './TTButton';

interface NewsletterSignupProps {
  variant?: 'default' | 'compact';
}

export function NewsletterSignup({ variant = 'default' }: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // SALESFORCE CMS INTEGRATION: Create Newsletter_Subscription__c record
    // or integrate with Marketing Cloud
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  if (variant === 'compact') {
    return (
      <div className="flex flex-col sm:flex-row gap-2">
        <Input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1"
          disabled={status === 'loading' || status === 'success'}
        />
        <TTButton 
          type="submit" 
          onClick={handleSubmit}
          variant="primary"
          disabled={status === 'loading' || status === 'success'}
        >
          {status === 'loading' ? 'Subscribing...' : status === 'success' ? 'Subscribed!' : 'Subscribe'}
        </TTButton>
      </div>
    );
  }

  return (
    <div className="bg-[var(--tt-trail-cream)] rounded-2xl p-8 text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--tt-evergreen)] rounded-full mb-4">
        <Mail size={32} className="text-white" />
      </div>
      <h3 className="mb-3">Stay on the Trail</h3>
      <p className="text-gray-600 mb-6 max-w-md mx-auto">
        Get monthly updates on courses, success stories, and opportunities to make a difference.
      </p>
      
      {status === 'success' ? (
        <div className="flex items-center justify-center gap-2 text-[var(--tt-success)] animate-fade-in-up">
          <CheckCircle size={24} />
          <span>Thank you for subscribing!</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
              disabled={status === 'loading'}
            />
            <TTButton 
              type="submit" 
              variant="primary"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </TTButton>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </form>
      )}
    </div>
  );
}
