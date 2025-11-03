import { useState } from 'react';
import { BookOpen, Video, Award, Search, Filter } from 'lucide-react';
import { TTButton } from '../TTButton';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { SearchBar } from '../SearchBar';

interface AcademyPageProps {
  onNavigate: (page: string) => void;
}

export function AcademyPage({ onNavigate }: AcademyPageProps) {
  const [filter, setFilter] = useState('all');
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // SALESFORCE CMS INTEGRATION: Replace with Course__c query
  // SELECT Course_ID__c, Name, Category__c, Duration__c, Level__c, Instructor__r.Name, Instructor__r.Photo_URL__c, 
  //        Price__c, Description__c, Lesson_Count__c, Enrolled_Count__c, Image_URL__c
  // WHERE Is_Active__c = true ORDER BY Display_Order__c
  const courses = [
    {
      id: 'salesforce-basics',
      title: 'Salesforce Fundamentals',
      category: 'free',
      duration: '6 weeks',
      level: 'Beginner',
      instructor: 'David Kim',
      instructorImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
      price: 'Free',
      description: 'Master the basics of Salesforce platform. Perfect for those new to CRM systems.',
      lessons: 24,
      enrolled: 342,
      image: 'https://images.unsplash.com/photo-1613151096599-b234757eb4d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBsZWFybmluZyUyMHN0dWRlbnR8ZW58MXx8fHwxNzYyMTczOTM2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 'admin-cert',
      title: 'Admin Certification Prep',
      category: 'certification',
      duration: '10 weeks',
      level: 'Intermediate',
      instructor: 'Sofia Patel',
      instructorImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
      price: '$299',
      description: 'Comprehensive preparation for Salesforce Administrator certification exam.',
      lessons: 48,
      enrolled: 156,
      image: 'https://images.unsplash.com/photo-1618173887111-3ecfc91c41b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwbWVudG9yc2hpcCUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzYyMTg5NjU0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 'data-management',
      title: 'Data Management Mastery',
      category: 'free',
      duration: '4 weeks',
      level: 'Intermediate',
      instructor: 'Aisha Williams',
      instructorImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
      price: 'Free',
      description: 'Learn best practices for data import, export, and quality management in Salesforce.',
      lessons: 18,
      enrolled: 234,
      image: 'https://images.unsplash.com/photo-1696041757950-62e2c030283b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub25wcm9maXQlMjBjb21tdW5pdHklMjBsZWFybmluZ3xlbnwxfHx8fDE3NjIxODk2NTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 'coaching-circle',
      title: '1:1 Career Coaching',
      category: 'coaching',
      duration: '8 sessions',
      level: 'All Levels',
      instructor: 'Dr. Maria Rodriguez',
      instructorImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
      price: '$499',
      description: 'Personalized coaching sessions to accelerate your Salesforce career journey.',
      lessons: 8,
      enrolled: 47,
      image: 'https://images.unsplash.com/photo-1758518729685-f88df7890776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3NjIxNDkzMjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 'automation',
      title: 'Process Automation Essentials',
      category: 'free',
      duration: '5 weeks',
      level: 'Intermediate',
      instructor: 'Marcus Thompson',
      instructorImage: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400',
      price: 'Free',
      description: 'Build workflows, process builder flows, and automation with best practices.',
      lessons: 22,
      enrolled: 198,
      image: 'https://images.unsplash.com/photo-1641445916334-8fac88225c4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwaGlraW5nJTIwdHJhaWx8ZW58MXx8fHwxNzYyMTg5NjU2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 'platform-dev',
      title: 'Platform Developer I Certification',
      category: 'certification',
      duration: '14 weeks',
      level: 'Advanced',
      instructor: 'James Chen',
      instructorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      price: '$499',
      description: 'Advanced development skills and certification prep for Platform Developer I.',
      lessons: 56,
      enrolled: 89,
      image: 'https://images.unsplash.com/photo-1618173887111-3ecfc91c41b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwbWVudG9yc2hpcCUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzYyMTg5NjU0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  // Filter by category and search query
  const filteredCourses = courses.filter(course => {
    const matchesCategory = filter === 'all' || course.category === filter;
    const matchesSearch = searchQuery === '' || 
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.level.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  const selectedCourseData = courses.find(c => c.id === selectedCourse);

  if (selectedCourse && selectedCourseData) {
    return (
      <div className="min-h-screen">
        <section className="py-24 px-4 sm:px-6 lg:px-20">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <TTButton variant="secondary" onClick={() => setSelectedCourse(null)}>
                ← Back to Courses
              </TTButton>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <div className="rounded-2xl overflow-hidden mb-8">
                  <img
                    src={selectedCourseData.image}
                    alt={selectedCourseData.title}
                    className="w-full h-80 object-cover"
                  />
                </div>
                
                <h1 className="mb-4">{selectedCourseData.title}</h1>
                <p className="text-gray-700 mb-8">{selectedCourseData.description}</p>

                <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
                  <h3 className="mb-4">Course Details</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-gray-500 mb-1">Duration</div>
                      <div className="text-[var(--tt-evergreen)]">{selectedCourseData.duration}</div>
                    </div>
                    <div>
                      <div className="text-gray-500 mb-1">Level</div>
                      <div className="text-[var(--tt-evergreen)]">{selectedCourseData.level}</div>
                    </div>
                    <div>
                      <div className="text-gray-500 mb-1">Lessons</div>
                      <div className="text-[var(--tt-evergreen)]">{selectedCourseData.lessons}</div>
                    </div>
                    <div>
                      <div className="text-gray-500 mb-1">Enrolled</div>
                      <div className="text-[var(--tt-evergreen)]">{selectedCourseData.enrolled} students</div>
                    </div>
                  </div>
                </div>

                <div className="bg-[var(--tt-trail-cream)] rounded-xl p-6">
                  <h3 className="mb-4">What You'll Learn</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[var(--tt-evergreen)] rounded-full mt-2" />
                      <span className="text-gray-700">Core concepts and terminology</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[var(--tt-evergreen)] rounded-full mt-2" />
                      <span className="text-gray-700">Hands-on practical projects</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[var(--tt-evergreen)] rounded-full mt-2" />
                      <span className="text-gray-700">Best practices and real-world scenarios</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[var(--tt-evergreen)] rounded-full mt-2" />
                      <span className="text-gray-700">Industry-recognized skills and certification prep</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <div className="bg-white rounded-xl p-6 shadow-lg mb-6 sticky top-24">
                  <div className="text-center mb-6">
                    <div className="text-[var(--tt-sun-amber)] mb-2">{selectedCourseData.price}</div>
                    <TTButton 
                      variant="accent" 
                      pulse 
                      className="w-full" 
                      onClick={() => window.open('https://academy.transitiontrails.org', '_blank')}
                    >
                      Enroll Now
                    </TTButton>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <h4 className="mb-4">Your Instructor</h4>
                    <div className="flex items-center gap-3 mb-3">
                      <ImageWithFallback
                        src={selectedCourseData.instructorImage}
                        alt={selectedCourseData.instructor}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <div className="text-[var(--tt-evergreen)]">{selectedCourseData.instructor}</div>
                        <div className="text-gray-500">Lead Instructor</div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6 mt-6">
                    <h4 className="mb-3">Includes</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center gap-2">
                        <Video size={16} className="text-[var(--tt-sky-blue)]" />
                        <span>Video lessons</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <BookOpen size={16} className="text-[var(--tt-sky-blue)]" />
                        <span>Study materials</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Award size={16} className="text-[var(--tt-sky-blue)]" />
                        <span>Certificate of completion</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-24 px-4 sm:px-6 lg:px-20 bg-gradient-to-br from-[var(--tt-evergreen)] to-[var(--tt-summit-teal)] text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="mb-6 text-white">Transition Trails Academy</h1>
          <p className="text-[var(--tt-trail-cream)] max-w-2xl mx-auto">
            Expert-led courses, certifications, and coaching to accelerate your Salesforce journey.
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 px-4 sm:px-6 lg:px-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Search Bar */}
          <SearchBar 
            onSearch={setSearchQuery}
            placeholder="Search courses, skills, or topics..."
          />
          
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-2">
              <Filter size={20} className="text-gray-500" />
              <span className="text-gray-700">Filter by:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                { label: 'All Courses', value: 'all' },
                { label: 'Free', value: 'free' },
                { label: 'Coaching', value: 'coaching' },
                { label: 'Certification', value: 'certification' },
              ].map((filterOption) => (
                <button
                  key={filterOption.value}
                  onClick={() => setFilter(filterOption.value)}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    filter === filterOption.value
                      ? 'bg-[var(--tt-evergreen)] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {filterOption.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Course Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group cursor-pointer"
                onClick={() => setSelectedCourse(course.id)}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-[var(--tt-trail-cream)] text-[var(--tt-evergreen)] rounded-full">
                      {course.level}
                    </span>
                    <span className="text-[var(--tt-sun-amber)]">{course.price}</span>
                  </div>
                  <h3 className="mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="flex items-center gap-3 mb-4">
                    <ImageWithFallback
                      src={course.instructorImage}
                      alt={course.instructor}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="text-gray-700">{course.instructor}</div>
                      <div className="text-gray-500">{course.lessons} lessons • {course.duration}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
