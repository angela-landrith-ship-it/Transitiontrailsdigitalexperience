import { Heart, HandHeart, Users, TrendingUp } from 'lucide-react';
import { TTButton } from '../TTButton';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface SupportPageProps {
  onNavigate: (page: string) => void;
}

export function SupportPage({ onNavigate }: SupportPageProps) {
  const impactStats = [
    { number: '500+', label: 'Lives Changed', icon: <Users size={32} /> },
    { number: '$2.5M', label: 'Community Value', icon: <TrendingUp size={32} /> },
    { number: '75+', label: 'Nonprofit Partners', icon: <HandHeart size={32} /> },
    { number: '200+', label: 'Volunteer Hours', icon: <Heart size={32} /> },
  ];

  const donationLevels = [
    {
      amount: '$25',
      title: 'Trail Supporter',
      description: 'Provides learning materials for one student',
      benefits: ['Quarterly newsletter', 'Supporter badge'],
    },
    {
      amount: '$100',
      title: 'Path Builder',
      description: 'Sponsors one course enrollment',
      benefits: ['Impact reports', 'Invitation to events', 'Supporter badge'],
    },
    {
      amount: '$500',
      title: 'Journey Champion',
      description: 'Funds a full trail program for one learner',
      benefits: ['Personal impact story', 'Event invitations', 'Recognition on website'],
    },
    {
      amount: '$2,500',
      title: 'Trail Blazer',
      description: 'Enables certification program for multiple learners',
      benefits: ['Dedicated account manager', 'Quarterly meetings', 'Advisory board consideration'],
    },
  ];

  const volunteerOpportunities = [
    {
      title: 'Mentor',
      description: 'Guide learners through their trail with 1:1 coaching and career advice.',
      commitment: '2-4 hours/week',
    },
    {
      title: 'Guest Instructor',
      description: 'Share your Salesforce expertise through workshops and webinars.',
      commitment: 'Flexible',
    },
    {
      title: 'Career Coach',
      description: 'Help learners with resume reviews, interview prep, and job search strategies.',
      commitment: '1-2 hours/week',
    },
    {
      title: 'Nonprofit Consultant',
      description: 'Volunteer your Salesforce skills to support our nonprofit clients.',
      commitment: 'Project-based',
    },
  ];

  const partners = [
    'Salesforce.org',
    'TechSoup',
    'Nonprofit Technology Network',
    'Code for America',
    'Year Up',
    'Per Scholas',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-20 bg-gradient-to-br from-[var(--tt-sun-amber)] to-[var(--tt-evergreen)] text-white overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="mb-6 text-white">Support Our Mission</h1>
          <p className="text-[var(--tt-trail-cream)] max-w-2xl mx-auto mb-8">
            Your generosity and time help us empower learners and nonprofits to build a more 
            digitally inclusive future. Every contribution makes a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <TTButton variant="secondary" onClick={() => {}}>
              Make a Donation
            </TTButton>
            <TTButton variant="accent" onClick={() => {}}>
              Volunteer With Us
            </TTButton>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-24 px-4 sm:px-6 lg:px-20 bg-[var(--tt-evergreen)] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-white">Our Collective Impact</h2>
            <p className="text-[var(--tt-trail-cream)]">Together, we're building pathways to opportunity.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-[var(--tt-sun-amber)] mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-[var(--tt-sun-amber)] mb-2">{stat.number}</div>
                <p className="text-[var(--tt-trail-cream)]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Levels */}
      <section className="py-24 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">Ways to Give</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose a giving level that's right for you. All contributions are tax-deductible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {donationLevels.map((level, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 border-t-4 border-[var(--tt-sun-amber)]"
              >
                <div className="text-[var(--tt-evergreen)] mb-3">{level.amount}</div>
                <h3 className="mb-3">{level.title}</h3>
                <p className="text-gray-600 mb-6">{level.description}</p>
                <div className="mb-6">
                  <div className="text-gray-700 mb-2">Benefits:</div>
                  <ul className="space-y-1">
                    {level.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600">
                        <div className="w-1.5 h-1.5 bg-[var(--tt-evergreen)] rounded-full mt-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <TTButton variant="accent" className="w-full" onClick={() => {}}>
                  Give {level.amount}
                </TTButton>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Prefer to make a custom donation?</p>
            <TTButton variant="secondary" onClick={() => {}}>
              Custom Amount
            </TTButton>
          </div>
        </div>
      </section>

      {/* Volunteer */}
      <section className="py-24 px-4 sm:px-6 lg:px-20 bg-[var(--tt-trail-cream)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="mb-6">Volunteer Your Expertise</h2>
              <p className="text-gray-700 mb-6">
                Share your knowledge and make a lasting impact on learners and nonprofit organizations. 
                We welcome Salesforce professionals at all career stages.
              </p>
              <TTButton variant="accent" onClick={() => onNavigate('contact')}>
                Apply to Volunteer
              </TTButton>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1751666526244-40239a251eae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2x1bnRlZXIlMjBjb21tdW5pdHklMjBzZXJ2aWNlfGVufDF8fHx8MTc2MjEzMjI5Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Volunteer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {volunteerOpportunities.map((opportunity, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="mb-3">{opportunity.title}</h3>
                <p className="text-gray-600 mb-4">{opportunity.description}</p>
                <div className="text-[var(--tt-sky-blue)]">{opportunity.commitment}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-24 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Partners</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We collaborate with leading organizations to maximize our impact.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg flex items-center justify-center text-center h-32 hover:shadow-xl transition-shadow"
              >
                <div className="text-[var(--tt-summit-teal)]">{partner}</div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="mb-4">Interested in Partnering?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We're always looking for strategic partnerships that advance our mission.
            </p>
            <TTButton variant="primary" onClick={() => onNavigate('contact')}>
              Contact Us About Partnership
            </TTButton>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-20 bg-gradient-to-r from-[var(--tt-sky-blue)] to-[var(--tt-summit-teal)] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6 text-white">Every Contribution Counts</h2>
          <p className="mb-8 text-[var(--tt-trail-cream)]">
            Whether you give financially or volunteer your time, you're helping build a more inclusive tech community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <TTButton variant="accent" pulse onClick={() => {}}>
              Donate Today
            </TTButton>
            <TTButton variant="secondary" onClick={() => onNavigate('contact')}>
              Learn More
            </TTButton>
          </div>
        </div>
      </section>
    </div>
  );
}
