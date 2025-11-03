import { useState } from 'react';
import { Compass, Map, Mountain, Rocket, Clock, Users, Award } from 'lucide-react';
import { TrailCard } from '../TrailCard';
import { TTButton } from '../TTButton';
import { ProgressBar } from '../ProgressBar';

interface TrailsPageProps {
  onNavigate: (page: string) => void;
}

export function TrailsPage({ onNavigate }: TrailsPageProps) {
  const [selectedTrail, setSelectedTrail] = useState<string | null>(null);

  const trails = [
    {
      id: 'visitors',
      title: "Visitor's Trail",
      tagline: 'Your First Steps Into Digital Learning',
      description: 'Perfect for beginners exploring technology careers. Start with foundational skills and discover your interests.',
      image: 'https://images.unsplash.com/photo-1641445916334-8fac88225c4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwaGlraW5nJTIwdHJhaWx8ZW58MXx8fHwxNzYyMTg5NjU2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      icon: <Compass size={40} />,
      duration: '4-6 weeks',
      level: 'Beginner',
      commitment: '3-5 hours/week',
      topics: ['Digital Literacy', 'Introduction to Salesforce', 'Career Exploration', 'Communication Skills'],
    },
    {
      id: 'guided',
      title: 'Guided Trail',
      tagline: 'Structured Learning with Expert Support',
      description: 'Build practical skills through hands-on projects with mentorship from industry professionals.',
      image: 'https://images.unsplash.com/photo-1696041757950-62e2c030283b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub25wcm9maXQlMjBjb21tdW5pdHklMjBsZWFybmluZ3xlbnwxfHx8fDE3NjIxODk2NTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      icon: <Map size={40} />,
      duration: '12 weeks',
      level: 'Intermediate',
      commitment: '8-10 hours/week',
      topics: ['Salesforce Administration', 'Data Management', 'Process Automation', 'Real-World Projects'],
    },
    {
      id: 'mastery',
      title: 'Trail of Mastery',
      tagline: 'Advanced Certification & Career Launch',
      description: 'Intensive program preparing you for Salesforce certifications and professional opportunities.',
      image: 'https://images.unsplash.com/photo-1618173887111-3ecfc91c41b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwbWVudG9yc2hpcCUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzYyMTg5NjU0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      icon: <Mountain size={40} />,
      duration: '16-20 weeks',
      level: 'Advanced',
      commitment: '15-20 hours/week',
      topics: ['Advanced Administration', 'Platform Development', 'Certification Prep', 'Career Coaching'],
    },
    {
      id: 'explorer',
      title: "Explorer's Journey",
      tagline: 'Self-Paced Learning Adventures',
      description: 'Flexible, self-directed learning for busy professionals. Learn at your own pace with curated resources.',
      image: 'https://images.unsplash.com/photo-1613151096599-b234757eb4d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBsZWFybmluZyUyMHN0dWRlbnR8ZW58MXx8fHwxNzYyMTczOTM2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      icon: <Rocket size={40} />,
      duration: 'Flexible',
      level: 'All Levels',
      commitment: 'Self-paced',
      topics: ['Curated Resources', 'Community Forums', 'On-Demand Videos', 'Practice Environments'],
    },
  ];

  const selectedTrailData = trails.find(t => t.id === selectedTrail);

  if (selectedTrail && selectedTrailData) {
    return (
      <div className="min-h-screen">
        {/* Trail Detail Hero */}
        <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={selectedTrailData.image}
              alt={selectedTrailData.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--tt-evergreen)]/90 to-[var(--tt-summit-teal)]/80" />
          </div>
          <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
            <div className="text-[var(--tt-sun-amber)] mb-4">{selectedTrailData.icon}</div>
            <h1 className="mb-4 text-white">{selectedTrailData.title}</h1>
            <p className="text-[var(--tt-trail-cream)]">{selectedTrailData.tagline}</p>
          </div>
        </section>

        {/* Trail Details */}
        <section className="py-24 px-4 sm:px-6 lg:px-20">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <TTButton variant="secondary" onClick={() => setSelectedTrail(null)}>
                ← Back to All Trails
              </TTButton>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <Clock size={32} className="mx-auto mb-3 text-[var(--tt-evergreen)]" />
                <div className="text-gray-500 mb-1">Duration</div>
                <div className="text-[var(--tt-evergreen)]">{selectedTrailData.duration}</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <Users size={32} className="mx-auto mb-3 text-[var(--tt-evergreen)]" />
                <div className="text-gray-500 mb-1">Level</div>
                <div className="text-[var(--tt-evergreen)]">{selectedTrailData.level}</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <Award size={32} className="mx-auto mb-3 text-[var(--tt-evergreen)]" />
                <div className="text-gray-500 mb-1">Commitment</div>
                <div className="text-[var(--tt-evergreen)]">{selectedTrailData.commitment}</div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h2 className="mb-6">About This Trail</h2>
              <p className="text-gray-700 mb-8">{selectedTrailData.description}</p>
              
              <h3 className="mb-4">What You'll Learn</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {selectedTrailData.topics.map((topic, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-[var(--tt-trail-cream)] rounded-lg">
                    <div className="w-2 h-2 bg-[var(--tt-evergreen)] rounded-full" />
                    <span className="text-gray-700">{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-[var(--tt-evergreen)] to-[var(--tt-summit-teal)] rounded-2xl p-8 text-white text-center">
              <h3 className="mb-4 text-white">Ready to Start This Trail?</h3>
              <p className="mb-6 text-[var(--tt-trail-cream)]">Join hundreds of learners on their journey to digital fluency.</p>
              <TTButton variant="accent" pulse onClick={() => onNavigate('academy')}>
                Enroll Now
              </TTButton>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-24 px-4 sm:px-6 lg:px-20 bg-gradient-to-br from-[var(--tt-trail-cream)] to-white">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="mb-6">Our Trails</h1>
          <p className="text-gray-700 max-w-2xl mx-auto mb-8">
            Choose your path to digital fluency. Each trail is designed to meet you where you are 
            and guide you toward your goals—whether you're just starting out or ready to master advanced skills.
          </p>
          <div className="flex justify-center">
            <ProgressBar progress={0} label="" showPercentage={false} animated={false} />
          </div>
        </div>
      </section>

      {/* Trail Cards */}
      <section className="py-24 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {trails.map((trail) => (
            <TrailCard
              key={trail.id}
              title={trail.title}
              description={trail.description}
              image={trail.image}
              icon={trail.icon}
              onClick={() => setSelectedTrail(trail.id)}
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-20 bg-[var(--tt-evergreen)] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6 text-white">Not Sure Which Trail Is Right for You?</h2>
          <p className="mb-8 text-[var(--tt-trail-cream)]">
            Schedule a free consultation with our learning advisors to find your perfect path.
          </p>
          <TTButton variant="accent" onClick={() => onNavigate('contact')}>
            Get Personalized Guidance
          </TTButton>
        </div>
      </section>
    </div>
  );
}
