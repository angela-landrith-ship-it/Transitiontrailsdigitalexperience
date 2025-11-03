import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { TTButton } from '../TTButton';

export function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-24 px-4 sm:px-6 lg:px-20 bg-gradient-to-br from-[var(--tt-trail-cream)] to-white">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="mb-6">Get In Touch</h1>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Have questions? Want to learn more? Ready to start your journey? 
            We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-12">
          {/* Form */}
          <div className="md:col-span-3">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="mb-8">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block mb-2 text-gray-700">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-[var(--tt-trail-cream)]/30 focus:outline-none focus:border-[var(--tt-sun-amber)] focus:ring-2 focus:ring-[var(--tt-sun-amber)]/20 transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block mb-2 text-gray-700">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-[var(--tt-trail-cream)]/30 focus:outline-none focus:border-[var(--tt-sun-amber)] focus:ring-2 focus:ring-[var(--tt-sun-amber)]/20 transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-gray-700">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-[var(--tt-trail-cream)]/30 focus:outline-none focus:border-[var(--tt-sun-amber)] focus:ring-2 focus:ring-[var(--tt-sun-amber)]/20 transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block mb-2 text-gray-700">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-[var(--tt-trail-cream)]/30 focus:outline-none focus:border-[var(--tt-sun-amber)] focus:ring-2 focus:ring-[var(--tt-sun-amber)]/20 transition-all"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block mb-2 text-gray-700">
                    I'm interested in... *
                  </label>
                  <select
                    id="interest"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-[var(--tt-trail-cream)]/30 focus:outline-none focus:border-[var(--tt-sun-amber)] focus:ring-2 focus:ring-[var(--tt-sun-amber)]/20 transition-all"
                  >
                    <option value="">Select an option</option>
                    <option value="learner">Becoming a Learner</option>
                    <option value="services">Nonprofit Services</option>
                    <option value="volunteer">Volunteering</option>
                    <option value="donate">Supporting/Donating</option>
                    <option value="partner">Partnership Opportunities</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-gray-700">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-[var(--tt-trail-cream)]/30 focus:outline-none focus:border-[var(--tt-sun-amber)] focus:ring-2 focus:ring-[var(--tt-sun-amber)]/20 transition-all resize-none"
                    placeholder="Tell us about your goals or questions..."
                  />
                </div>

                <TTButton variant="accent" className="w-full">
                  <Send size={18} className="mr-2" />
                  Send Message
                </TTButton>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-2">
            <div className="bg-gradient-to-br from-[var(--tt-evergreen)] to-[var(--tt-summit-teal)] rounded-2xl p-8 text-white h-full">
              <h3 className="mb-8 text-white">Contact Information</h3>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-[var(--tt-trail-cream)] mb-1">Email</div>
                    <a href="mailto:info@transitiontrails.org" className="hover:text-[var(--tt-sun-amber)] transition-colors">
                      info@transitiontrails.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="text-[var(--tt-trail-cream)] mb-1">Phone</div>
                    <a href="tel:+15551234567" className="hover:text-[var(--tt-sun-amber)] transition-colors">
                      (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="text-[var(--tt-trail-cream)] mb-1">Address</div>
                    <div>123 Trail Avenue<br />Portland, OR 97201</div>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/20 pt-8">
                <h4 className="mb-4 text-white">Office Hours</h4>
                <div className="space-y-2 text-[var(--tt-trail-cream)]">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="px-4 sm:px-6 lg:px-20 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[var(--tt-trail-cream)] rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <MapPin size={48} className="mx-auto mb-4 text-[var(--tt-evergreen)]" />
              <p>Interactive Map</p>
              <p className="text-gray-400">123 Trail Avenue, Portland, OR 97201</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 sm:px-6 lg:px-20 bg-[var(--tt-trail-cream)]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Quick answers to common questions.</p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: 'How do I enroll in a trail program?',
                answer: 'Visit our Our Trails page to explore programs, then click "Start This Trail" to begin the enrollment process. We\'ll guide you through the application and onboarding.',
              },
              {
                question: 'Are your courses really free?',
                answer: 'Many of our foundational courses are completely free. We also offer paid certification prep courses and coaching services. Financial assistance is available for those who qualify.',
              },
              {
                question: 'What services do you offer nonprofits?',
                answer: 'We provide full-service Salesforce consulting including implementation, customization, training, and ongoing support—all tailored to nonprofit needs and budgets.',
              },
              {
                question: 'How can I volunteer?',
                answer: 'We welcome volunteers with Salesforce expertise at any level. Visit our Support page and click "Apply to Volunteer" to learn about current opportunities.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
