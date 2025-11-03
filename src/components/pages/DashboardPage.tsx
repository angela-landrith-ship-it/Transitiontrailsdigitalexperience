import { Award, BookOpen, TrendingUp, Calendar, ArrowRight, CheckCircle } from 'lucide-react';
import { ProgressBar } from '../ProgressBar';
import { TTButton } from '../TTButton';

interface DashboardPageProps {
  onNavigate: (page: string) => void;
}

export function DashboardPage({ onNavigate }: DashboardPageProps) {
  // SALESFORCE CMS INTEGRATION: This is a fully authenticated, personalized page
  // Replace all data with queries filtered by current User ID
  // See DEVELOPER_HANDOFF.md for Trail_Progress__c and Event__c queries
  
  // Query: Trail_Progress__c WHERE User__c = :currentUserId AND Status__c = 'In Progress'
  const activeTrails = [
    {
      title: 'Salesforce Fundamentals',
      progress: 65,
      lessonsCompleted: 16,
      totalLessons: 24,
      nextLesson: 'Data Management Basics',
      dueDate: 'Nov 10, 2025',
    },
    {
      title: 'Admin Certification Prep',
      progress: 32,
      lessonsCompleted: 15,
      totalLessons: 48,
      nextLesson: 'Security & Access Controls',
      dueDate: 'Nov 15, 2025',
    },
  ];

  const achievements = [
    { title: 'First Steps', icon: '🎯', description: 'Completed your first lesson' },
    { title: 'Week Warrior', icon: '🔥', description: '7-day learning streak' },
    { title: 'Quick Learner', icon: '⚡', description: 'Completed 5 lessons in one week' },
  ];

  // SALESFORCE CMS INTEGRATION: Event__c query
  // WHERE Event_Date__c >= TODAY AND Is_Active__c = true ORDER BY Event_Date__c LIMIT 5
  const upcomingEvents = [
    { title: 'Career Coaching Session', date: 'Nov 8, 2025', time: '2:00 PM', type: 'Coaching' },
    { title: 'Salesforce Admin Webinar', date: 'Nov 12, 2025', time: '6:00 PM', type: 'Workshop' },
    { title: 'Community Office Hours', date: 'Nov 14, 2025', time: '5:00 PM', type: 'Community' },
  ];

  const recommendedCourses = [
    { title: 'Process Automation Essentials', level: 'Intermediate', duration: '5 weeks' },
    { title: 'Data Management Mastery', level: 'Intermediate', duration: '4 weeks' },
  ];

  return (
    <div className="min-h-screen bg-[var(--tt-trail-cream)]">
      {/* Header */}
      <section className="bg-gradient-to-r from-[var(--tt-evergreen)] to-[var(--tt-summit-teal)] text-white py-12 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="mb-2 text-white">Welcome back, Alex!</h1>
              <p className="text-[var(--tt-trail-cream)]">Keep up the great work on your learning journey.</p>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <div className="text-center px-6 py-3 bg-white/20 rounded-lg">
                <div className="text-[var(--tt-sun-amber)] mb-1">65%</div>
                <div className="text-[var(--tt-trail-cream)]">Overall Progress</div>
              </div>
              <div className="text-center px-6 py-3 bg-white/20 rounded-lg">
                <div className="text-[var(--tt-sun-amber)] mb-1">12</div>
                <div className="text-[var(--tt-trail-cream)]">Day Streak</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
          {/* Left Column - Active Trails */}
          <div className="lg:col-span-2 space-y-8">
            {/* Active Trails */}
            <div>
              <h2 className="mb-6">Your Active Trails</h2>
              <div className="space-y-6">
                {activeTrails.map((trail, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="mb-2">{trail.title}</h3>
                        <p className="text-gray-600">
                          {trail.lessonsCompleted} of {trail.totalLessons} lessons completed
                        </p>
                      </div>
                      <div className="text-[var(--tt-evergreen)]">{trail.progress}%</div>
                    </div>
                    
                    <ProgressBar progress={trail.progress} animated={false} showPercentage={false} />
                    
                    <div className="mt-6 p-4 bg-[var(--tt-trail-cream)] rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-gray-700">Next Lesson:</div>
                        <div className="text-gray-500">Due {trail.dueDate}</div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[var(--tt-evergreen)]">{trail.nextLesson}</span>
                        <TTButton variant="accent" className="!px-4 !py-2" onClick={() => {}}>
                          Continue
                        </TTButton>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h2 className="mb-6">Recent Achievements</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg">
                    <div className="mb-3">{achievement.icon}</div>
                    <h3 className="mb-2">{achievement.title}</h3>
                    <p className="text-gray-600">{achievement.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended Courses */}
            <div>
              <h2 className="mb-6">Recommended for You</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {recommendedCourses.map((course, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow group cursor-pointer">
                    <div className="flex items-center gap-2 mb-3">
                      <BookOpen size={20} className="text-[var(--tt-sky-blue)]" />
                      <span className="px-3 py-1 bg-[var(--tt-trail-cream)] text-[var(--tt-evergreen)] rounded-full">
                        {course.level}
                      </span>
                    </div>
                    <h3 className="mb-2">{course.title}</h3>
                    <p className="text-gray-600 mb-4">{course.duration}</p>
                    <button
                      onClick={() => onNavigate('academy')}
                      className="flex items-center gap-2 text-[var(--tt-evergreen)] hover:text-[var(--tt-sun-amber)] transition-colors group/btn"
                    >
                      <span>Learn More</span>
                      <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            {/* Quick Stats */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="mb-6">Your Stats</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[var(--tt-evergreen)]/10 rounded-lg flex items-center justify-center">
                      <BookOpen size={20} className="text-[var(--tt-evergreen)]" />
                    </div>
                    <span className="text-gray-700">Lessons Completed</span>
                  </div>
                  <span className="text-[var(--tt-evergreen)]">31</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[var(--tt-sky-blue)]/10 rounded-lg flex items-center justify-center">
                      <TrendingUp size={20} className="text-[var(--tt-sky-blue)]" />
                    </div>
                    <span className="text-gray-700">Hours Learned</span>
                  </div>
                  <span className="text-[var(--tt-sky-blue)]">42</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[var(--tt-sun-amber)]/10 rounded-lg flex items-center justify-center">
                      <Award size={20} className="text-[var(--tt-sun-amber)]" />
                    </div>
                    <span className="text-gray-700">Achievements</span>
                  </div>
                  <span className="text-[var(--tt-sun-amber)]">8</span>
                </div>
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="mb-6">Upcoming Events</h3>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="border-l-4 border-[var(--tt-sun-amber)] pl-4 py-2">
                    <div className="text-[var(--tt-evergreen)] mb-1">{event.title}</div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar size={14} />
                      <span>{event.date} • {event.time}</span>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-6 text-[var(--tt-sky-blue)] hover:text-[var(--tt-evergreen)] transition-colors w-full text-center">
                View All Events →
              </button>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-[var(--tt-evergreen)] to-[var(--tt-summit-teal)] rounded-2xl p-6 text-white">
              <h3 className="mb-4 text-white">Quick Actions</h3>
              <div className="space-y-3">
                <button
                  onClick={() => onNavigate('academy')}
                  className="w-full px-4 py-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors text-left"
                >
                  Browse Courses
                </button>
                <button
                  onClick={() => onNavigate('trails')}
                  className="w-full px-4 py-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors text-left"
                >
                  Explore Trails
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full px-4 py-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors text-left"
                >
                  Schedule Coaching
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Summary */}
      <section className="py-12 px-4 sm:px-6 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="mb-8">Your Learning Path</h2>
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[var(--tt-evergreen)] via-[var(--tt-sky-blue)] to-gray-300 ml-4" />
            
            <div className="space-y-8 relative">
              {[
                { title: 'Salesforce Basics', status: 'completed', date: 'Completed Oct 15' },
                { title: 'Data Management', status: 'in-progress', date: 'In Progress' },
                { title: 'Process Automation', status: 'upcoming', date: 'Starting Soon' },
                { title: 'Admin Certification', status: 'upcoming', date: 'Planned' },
              ].map((milestone, index) => (
                <div key={index} className="flex items-center gap-6">
                  <div className={`w-8 h-8 rounded-full border-4 border-white shadow-lg flex items-center justify-center z-10 ${
                    milestone.status === 'completed' ? 'bg-[var(--tt-evergreen)]' :
                    milestone.status === 'in-progress' ? 'bg-[var(--tt-sun-amber)]' :
                    'bg-gray-300'
                  }`}>
                    {milestone.status === 'completed' && (
                      <CheckCircle size={16} className="text-white" />
                    )}
                  </div>
                  <div className="flex-1 bg-white rounded-xl p-4 shadow-md">
                    <div className="flex items-center justify-between">
                      <h4>{milestone.title}</h4>
                      <span className="text-gray-500">{milestone.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
