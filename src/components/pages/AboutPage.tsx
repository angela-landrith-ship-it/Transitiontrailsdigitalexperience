import { Target, Heart, Users, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function AboutPage() {
  const timeline = [
    { year: '2020', event: 'Founded', description: 'Transition Trails launched with a vision to democratize tech education.' },
    { year: '2021', event: 'First Cohort', description: '50 learners completed our inaugural Trail of Mastery program.' },
    { year: '2022', event: 'Nonprofit Services', description: 'Expanded to offer Salesforce consulting for nonprofits.' },
    { year: '2023', event: 'Academy Launch', description: 'Opened our online Academy with certification pathways.' },
    { year: '2024', event: 'Community Growth', description: 'Reached 500+ learners and 75+ nonprofit partners.' },
    { year: '2025', event: 'Salesforce Digital Experience', description: 'Migrated to Salesforce Experience Cloud platform.' },
  ];

  const values = [
    {
      icon: <Target size={40} />,
      title: 'Empowerment',
      description: 'We believe everyone deserves access to quality digital education.',
    },
    {
      icon: <Heart size={40} />,
      title: 'Community',
      description: 'Building supportive networks that lift everyone together.',
    },
    {
      icon: <Users size={40} />,
      title: 'Inclusion',
      description: 'Creating pathways for underrepresented voices in tech.',
    },
    {
      icon: <TrendingUp size={40} />,
      title: 'Growth',
      description: 'Continuous learning and improvement for all stakeholders.',
    },
  ];

  const team = [
    { name: 'Dr. Maria Rodriguez', role: 'Founder & Executive Director', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400' },
    { name: 'James Chen', role: 'Director of Learning', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400' },
    { name: 'Aisha Williams', role: 'Nonprofit Services Lead', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400' },
    { name: 'Marcus Thompson', role: 'Technology Director', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400' },
    { name: 'Sofia Patel', role: 'Community Manager', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400' },
    { name: 'David Kim', role: 'Lead Instructor', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-20 bg-gradient-to-br from-[var(--tt-evergreen)] to-[var(--tt-summit-teal)] text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <path d="M 0 100 Q 50 50 100 100 T 200 100" stroke="white" strokeWidth="2" fill="none" />
            <path d="M 0 120 Q 50 70 100 120 T 200 120" stroke="white" strokeWidth="2" fill="none" />
            <path d="M 0 140 Q 50 90 100 140 T 200 140" stroke="white" strokeWidth="2" fill="none" />
          </svg>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="mb-6 text-white">Our Story</h1>
          <p className="text-[var(--tt-trail-cream)] max-w-2xl mx-auto">
            Transition Trails was born from a simple belief: that technology education should be accessible, 
            practical, and transformative for everyone—regardless of background or resources.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="mb-6">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              To empower learners, nonprofits, and communities through innovative digital education and 
              Salesforce expertise—building bridges to opportunity and economic mobility.
            </p>
            <p className="text-gray-700">
              We create pathways for individuals to gain in-demand skills while helping nonprofits 
              leverage technology to amplify their impact.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1758518729685-f88df7890776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3NjIxNDkzMjR8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Team collaboration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-4 sm:px-6 lg:px-20 bg-[var(--tt-trail-cream)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-lg">
                <div className="text-[var(--tt-evergreen)] mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-4 sm:px-6 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Journey</h2>
            <p className="text-gray-600">Milestones along our trail.</p>
          </div>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[var(--tt-evergreen)] via-[var(--tt-sky-blue)] to-[var(--tt-sun-amber)]" />
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                      <div className="text-[var(--tt-sun-amber)] mb-2">{item.year}</div>
                      <h3 className="mb-2">{item.event}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-[var(--tt-evergreen)] rounded-full border-4 border-white shadow-lg z-10" />
                  <div className="w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-4 sm:px-6 lg:px-20 bg-[var(--tt-trail-cream)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Passionate educators, technologists, and community builders dedicated to your success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="mb-2">{member.name}</h3>
                  <p className="text-[var(--tt-sky-blue)]">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
