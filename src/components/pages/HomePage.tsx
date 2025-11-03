import { Users, Building2, Heart, ArrowRight, Star } from 'lucide-react';
import { TTButton } from '../TTButton';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  // SALESFORCE CMS INTEGRATION: This page pulls from multiple CMS objects
  // See DEVELOPER_HANDOFF.md for complete data model
  
  const audiences = [
    {
      icon: <Users size={48} />,
      title: 'Learners',
      description: 'Build digital skills through guided trails and hands-on learning experiences.',
      cta: 'Explore Your Path',
      page: 'trails',
    },
    {
      icon: <Building2 size={48} />,
      title: 'Nonprofits',
      description: 'Transform your organization with Salesforce solutions and expert consulting.',
      cta: 'Discover Services',
      page: 'services',
    },
    {
      icon: <Heart size={48} />,
      title: 'Supporters',
      description: 'Join our mission to empower communities through technology education.',
      cta: 'Support Our Cause',
      page: 'support',
    },
  ];

  // SALESFORCE CMS INTEGRATION: Replace with Testimonial__c query
  // WHERE Is_Featured__c = true AND Category__c = 'Learner' OR 'Nonprofit' OR 'Volunteer'
  const testimonials = [
    {
      name: 'Sarah Martinez',
      role: 'Trail of Mastery Graduate',
      text: 'Transition Trails gave me the skills and confidence to launch my career in tech. The mentorship was invaluable.',
      rating: 5,
    },
    {
      name: 'James Thompson',
      role: 'Nonprofit Director',
      text: 'Their Salesforce expertise transformed how we serve our community. Outstanding partnership.',
      rating: 5,
    },
    {
      name: 'Emily Chen',
      role: 'Volunteer Coach',
      text: 'Being part of this community and watching learners grow has been one of the most rewarding experiences.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1618173887111-3ecfc91c41b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwbWVudG9yc2hpcCUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzYyMTg5NjU0fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Mentorship collaboration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--tt-summit-teal)]/80 to-[var(--tt-evergreen)]/70" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="mb-6 text-white">Find Your Trail. Build Your Future.</h1>
          <p className="mb-8 max-w-2xl mx-auto opacity-95">
            Transition Trails helps learners, organizations, and mentors navigate the path toward digital fluency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <TTButton variant="accent" onClick={() => onNavigate('trails')}>
              Start Your Journey
            </TTButton>
            <TTButton variant="secondary" onClick={() => onNavigate('about')}>
              Learn Our Story
            </TTButton>
          </div>
        </div>

        {/* Trail Line Decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--tt-sky-blue)] via-[var(--tt-sun-amber)] to-[var(--tt-evergreen)]" />
      </section>

      {/* Audience Cards Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-20 bg-[var(--tt-trail-cream)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">Who We Serve</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Three pathways, one mission: empowering digital transformation for everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {audiences.map((audience, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="text-[var(--tt-evergreen)] mb-4 group-hover:text-[var(--tt-sun-amber)] transition-colors">
                  {audience.icon}
                </div>
                <h3 className="mb-3">{audience.title}</h3>
                <p className="text-gray-600 mb-6">{audience.description}</p>
                <button
                  onClick={() => onNavigate(audience.page)}
                  className="flex items-center gap-2 text-[var(--tt-evergreen)] hover:text-[var(--tt-sun-amber)] transition-colors group/btn"
                >
                  <span>{audience.cta}</span>
                  <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-20 bg-[var(--tt-evergreen)] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="text-center">
              <div className="text-[var(--tt-sun-amber)] mb-2">500+</div>
              <p className="text-[var(--tt-trail-cream)]">Learners Empowered</p>
            </div>
            <div className="text-center">
              <div className="text-[var(--tt-sun-amber)] mb-2">75+</div>
              <p className="text-[var(--tt-trail-cream)]">Nonprofits Served</p>
            </div>
            <div className="text-center">
              <div className="text-[var(--tt-sun-amber)] mb-2">200+</div>
              <p className="text-[var(--tt-trail-cream)]">Volunteer Hours</p>
            </div>
            <div className="text-center">
              <div className="text-[var(--tt-sun-amber)] mb-2">95%</div>
              <p className="text-[var(--tt-trail-cream)]">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">Success Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from learners, partners, and volunteers who have found their trail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-[var(--tt-sun-amber)]"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-[var(--tt-sun-amber)] text-[var(--tt-sun-amber)]" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <div className="text-[var(--tt-evergreen)]">{testimonial.name}</div>
                  <div className="text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-20 bg-gradient-to-r from-[var(--tt-sky-blue)] to-[var(--tt-summit-teal)] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6 text-white">Ready to Begin Your Trail?</h2>
          <p className="mb-8 text-[var(--tt-trail-cream)]">
            Whether you're learning, serving, or supporting—your journey starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <TTButton variant="accent" pulse onClick={() => onNavigate('trails')}>
              Explore Our Trails
            </TTButton>
            <TTButton variant="secondary" onClick={() => onNavigate('contact')}>
              Get In Touch
            </TTButton>
          </div>
        </div>
      </section>
    </div>
  );
}
