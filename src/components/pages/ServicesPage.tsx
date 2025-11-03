import { CheckCircle, Cloud, Users, TrendingUp, Zap, MessageSquare } from 'lucide-react';
import { TTButton } from '../TTButton';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  // SALESFORCE CMS INTEGRATION: Replace with Service_Offering__c query
  // SELECT Name, Description__c, Features__c, Icon_Name__c WHERE Is_Active__c = true
  const services = [
    {
      icon: <Cloud size={40} />,
      title: 'Salesforce Implementation',
      description: 'Custom Salesforce solutions tailored to your nonprofit\'s unique needs and mission.',
      features: ['Needs assessment', 'System configuration', 'Data migration', 'Training & support'],
    },
    {
      icon: <Users size={40} />,
      title: 'Consulting & Strategy',
      description: 'Expert guidance to maximize your technology investment and organizational impact.',
      features: ['Strategic planning', 'Process optimization', 'Change management', 'Best practices'],
    },
    {
      icon: <TrendingUp size={40} />,
      title: 'Analytics & Reporting',
      description: 'Transform your data into actionable insights with custom dashboards and reports.',
      features: ['Dashboard design', 'Report automation', 'Data visualization', 'KPI tracking'],
    },
    {
      icon: <Zap size={40} />,
      title: 'Process Automation',
      description: 'Streamline workflows and increase efficiency with intelligent automation solutions.',
      features: ['Workflow automation', 'Email templates', 'Approval processes', 'Integration'],
    },
  ];

  // SALESFORCE CMS INTEGRATION: Replace with Testimonial__c query
  // WHERE Category__c = 'Nonprofit' AND Is_Active__c = true
  const testimonials = [
    {
      org: 'Community Action Network',
      quote: 'Transition Trails transformed how we manage our programs. Their expertise and compassion made all the difference.',
      name: 'Jennifer Williams',
      role: 'Executive Director',
    },
    {
      org: 'Youth Empowerment Coalition',
      quote: 'The team understood our mission and built a system that truly serves our community. Outstanding partnership.',
      name: 'Marcus Johnson',
      role: 'Operations Manager',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-24 px-4 sm:px-6 lg:px-20 bg-gradient-to-br from-[var(--tt-evergreen)] to-[var(--tt-summit-teal)] text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="mb-6 text-white">Salesforce Services for Nonprofits</h1>
            <p className="text-[var(--tt-trail-cream)] mb-8">
              We help nonprofit organizations leverage Salesforce to amplify their impact, 
              streamline operations, and better serve their communities.
            </p>
            <TTButton variant="accent" pulse onClick={() => onNavigate('contact')}>
              Schedule a Free Assessment
            </TTButton>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1758518729685-f88df7890776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3NjIxNDkzMjR8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Team collaboration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive Salesforce solutions designed specifically for nonprofit organizations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-[var(--tt-evergreen)] mb-4">{service.icon}</div>
                <h3 className="mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle size={18} className="text-[var(--tt-sun-amber)] mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-4 sm:px-6 lg:px-20 bg-[var(--tt-trail-cream)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">Why Nonprofits Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're not just consultants—we're partners in your mission.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--tt-evergreen)] rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart size={32} className="text-white" />
              </div>
              <h3 className="mb-3">Mission-Driven</h3>
              <p className="text-gray-600">
                We understand nonprofit challenges because we're committed to social impact.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--tt-sky-blue)] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={32} className="text-white" />
              </div>
              <h3 className="mb-3">Expert Team</h3>
              <p className="text-gray-600">
                Certified Salesforce professionals with deep nonprofit sector experience.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--tt-sun-amber)] rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare size={32} className="text-white" />
              </div>
              <h3 className="mb-3">Ongoing Support</h3>
              <p className="text-gray-600">
                We're with you every step—from planning through training and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-4 sm:px-6 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Process</h2>
            <p className="text-gray-600">A proven approach to Salesforce success.</p>
          </div>

          <div className="space-y-8">
            {[
              { step: '01', title: 'Discovery', description: 'We learn about your mission, challenges, and goals through collaborative sessions.' },
              { step: '02', title: 'Design', description: 'Custom solution design aligned with your workflows and objectives.' },
              { step: '03', title: 'Build', description: 'Configuration and development with regular check-ins and feedback.' },
              { step: '04', title: 'Train', description: 'Comprehensive training for your team to maximize adoption and success.' },
              { step: '05', title: 'Support', description: 'Ongoing assistance to ensure continued growth and optimization.' },
            ].map((phase, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[var(--tt-evergreen)] to-[var(--tt-sky-blue)] rounded-xl flex items-center justify-center text-white">
                  {phase.step}
                </div>
                <div>
                  <h3 className="mb-2">{phase.title}</h3>
                  <p className="text-gray-600">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 sm:px-6 lg:px-20 bg-[var(--tt-trail-cream)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">Client Success Stories</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-[var(--tt-sun-amber)] mb-4">{testimonial.org}</div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="text-[var(--tt-evergreen)]">{testimonial.name}</div>
                  <div className="text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-20 bg-gradient-to-r from-[var(--tt-evergreen)] to-[var(--tt-summit-teal)] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6 text-white">Ready to Transform Your Nonprofit?</h2>
          <p className="mb-8 text-[var(--tt-trail-cream)]">
            Schedule a free Salesforce assessment to explore how we can support your mission.
          </p>
          <TTButton variant="accent" pulse onClick={() => onNavigate('contact')}>
            Schedule Free Assessment
          </TTButton>
        </div>
      </section>
    </div>
  );
}

function Heart({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
  );
}
