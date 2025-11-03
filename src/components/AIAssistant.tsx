import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Loader2, Sparkles } from 'lucide-react';
import { Input } from './ui/input';
import { TTButton } from './TTButton';
import { ScrollArea } from './ui/scroll-area';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
  suggestions?: string[];
}

interface AIAssistantProps {
  currentPage?: string;
}

export function AIAssistant({ currentPage = 'home' }: AIAssistantProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(true);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Show welcome message on first open
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: '1',
        content: getContextualWelcome(currentPage),
        sender: 'assistant',
        timestamp: new Date(),
        suggestions: getContextualSuggestions(currentPage),
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, currentPage]);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Show widget after delay on page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMinimized(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const getContextualWelcome = (page: string): string => {
    const welcomes: Record<string, string> = {
      home: "👋 Hi! I'm your Transition Trails guide. I can help you find the right learning path, answer questions about our programs, or connect you with resources. What brings you here today?",
      about: "Hello! I can tell you more about our mission, introduce you to our team, or help you explore how we're making a difference in tech education.",
      trails: "Hi there! Looking for the perfect learning trail? I can help you choose between our Visitor's Trail, Guided Trail, Trail of Mastery, or Explorer's Journey based on your goals and experience.",
      academy: "Welcome to the Academy! I can help you find courses, explain our certification programs, or guide you through enrollment. What would you like to learn?",
      services: "Hello! Interested in our nonprofit services? I can explain our Salesforce solutions, implementation support, or help you schedule a free assessment.",
      support: "Hi! Thank you for your interest in supporting our mission. I can tell you about donation options, volunteer opportunities, or our partnership program.",
      contact: "Hello! I'm here to help answer questions before you reach out. What would you like to know?",
    };
    return welcomes[page] || welcomes.home;
  };

  const getContextualSuggestions = (page: string): string[] => {
    const suggestions: Record<string, string[]> = {
      home: [
        "Which trail is right for me?",
        "Tell me about free courses",
        "How can I volunteer?",
      ],
      about: [
        "Who are the instructors?",
        "What's your mission?",
        "How did Transition Trails start?",
      ],
      trails: [
        "I'm new to Salesforce",
        "I want certification prep",
        "Compare the trails",
      ],
      academy: [
        "Show me beginner courses",
        "What certifications do you offer?",
        "Are there free courses?",
      ],
      services: [
        "Schedule a consultation",
        "What services do you offer?",
        "Pricing information",
      ],
      support: [
        "How can I donate?",
        "What volunteer roles are open?",
        "Tell me about partnerships",
      ],
      contact: [
        "What are your hours?",
        "How do I enroll?",
        "Technical support",
      ],
    };
    return suggestions[page] || suggestions.home;
  };

  const handleSendMessage = async (messageText?: string) => {
    const text = messageText || inputValue.trim();
    if (!text) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: text,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // SALESFORCE INTEGRATION: Call Einstein GPT API
    // This should integrate with Salesforce Einstein GPT or Einstein Bots
    // Example endpoint: /services/data/v58.0/einstein/ai/conversations
    
    // Simulate AI response (replace with actual Einstein GPT call)
    setTimeout(() => {
      const response = generateMockResponse(text, currentPage);
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response.content,
        sender: 'assistant',
        timestamp: new Date(),
        suggestions: response.suggestions,
      };
      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const generateMockResponse = (query: string, page: string) => {
    const lowerQuery = query.toLowerCase();

    // Intent detection (this should be handled by Einstein GPT)
    if (lowerQuery.includes('beginner') || lowerQuery.includes('new to salesforce')) {
      return {
        content: "Perfect! I recommend starting with our **Visitor's Trail**. It's a 4-6 week self-paced program designed for absolute beginners. You'll learn Salesforce fundamentals with hands-on projects. Plus, it's completely free!\n\nWould you like me to show you the course details or help you get started?",
        suggestions: ["Show me Visitor's Trail", "What's included?", "How do I start?"],
      };
    }

    if (lowerQuery.includes('certification') || lowerQuery.includes('cert')) {
      return {
        content: "Great choice! Our **Admin Certification Prep** course is comprehensive and has a 90% pass rate. It's a 10-week program with:\n- 48 video lessons\n- Practice exams\n- Study guides\n- Instructor support\n\nWould you like to learn more or see other certification paths?",
        suggestions: ["Tell me more", "Other certifications", "Enrollment process"],
      };
    }

    if (lowerQuery.includes('free') || lowerQuery.includes('cost')) {
      return {
        content: "We offer several **free courses** to remove barriers to learning:\n- Salesforce Fundamentals (6 weeks)\n- Data Management Mastery (4 weeks)\n- Process Automation Essentials (5 weeks)\n\nOur paid programs help sustain free offerings for learners in need. Which interests you?",
        suggestions: ["Salesforce Fundamentals", "Data Management", "All free courses"],
      };
    }

    if (lowerQuery.includes('donate') || lowerQuery.includes('donation')) {
      return {
        content: "Thank you for wanting to support our mission! 💚 Every donation helps provide free training to underserved communities.\n\n**Ways to give:**\n- One-time donation\n- Monthly giving (Trailblazer Circle)\n- Corporate matching\n\nYour gift is 100% tax-deductible. Ready to make an impact?",
        suggestions: ["Donate now", "Monthly giving", "Corporate matching"],
      };
    }

    if (lowerQuery.includes('volunteer')) {
      return {
        content: "We'd love to have you join our volunteer team! Current opportunities:\n\n- **Guest Instructors** (4-6 hours/month)\n- **Mentors** (2 hours/week)\n- **Career Coaches** (flexible)\n- **Content Creators** (project-based)\n\nWhat skills or interests do you have?",
        suggestions: ["I can teach", "I want to mentor", "Tell me more"],
      };
    }

    if (lowerQuery.includes('nonprofit') || lowerQuery.includes('services')) {
      return {
        content: "Our **Salesforce Solutions for Nonprofits** include:\n\n✓ Needs assessment & roadmap\n✓ Implementation & configuration\n✓ Staff training & adoption support\n✓ Ongoing maintenance & optimization\n\nWe offer special pricing for registered 501(c)(3) organizations. Interested in a free consultation?",
        suggestions: ["Schedule consultation", "Pricing info", "Case studies"],
      };
    }

    if (lowerQuery.includes('hours') || lowerQuery.includes('contact')) {
      return {
        content: "📧 **Email:** hello@transitiontrails.org\n📞 **Phone:** (555) 123-4567\n\n**Office Hours:**\nMonday-Friday: 9am-5pm PT\n\nFor urgent learner support, you can also reach us through our community Slack channel. How else can I help?",
        suggestions: ["Join Slack", "Send email", "Schedule call"],
      };
    }

    // Default response
    return {
      content: "I'd be happy to help with that! Could you tell me a bit more about what you're looking for? I can assist with:\n\n- Finding the right learning trail\n- Course information and enrollment\n- Nonprofit services\n- Donation and volunteer opportunities\n- General questions about Transition Trails",
      suggestions: ["Browse courses", "View trails", "Support our mission"],
    };
  };

  const handleSuggestionClick = (suggestion: string) => {
    handleSendMessage(suggestion);
  };

  if (!isOpen && isMinimized) {
    // Minimized floating button
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-50 bg-[var(--tt-evergreen)] text-white p-4 rounded-full shadow-2xl hover:bg-[var(--tt-summit-teal)] transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[var(--tt-sun-amber)] focus:ring-offset-2 animate-fade-in-up group"
        aria-label="Open AI Assistant"
      >
        <div className="relative">
          <MessageCircle size={28} />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-[var(--tt-sun-amber)] rounded-full animate-pulse" />
        </div>
        <div className="absolute bottom-full right-0 mb-2 px-4 py-2 bg-white text-gray-800 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          <div className="flex items-center gap-2">
            <Sparkles size={16} className="text-[var(--tt-sun-amber)]" />
            <span>Need help? Ask me anything!</span>
          </div>
        </div>
      </button>
    );
  }

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50 w-[400px] max-w-[calc(100vw-2rem)] animate-fade-in-up">
      <div className="bg-white rounded-2xl shadow-2xl border-2 border-[var(--tt-sun-amber)] overflow-hidden flex flex-col h-[600px] max-h-[calc(100vh-4rem)]">
        {/* Header */}
        <div className="bg-gradient-to-r from-[var(--tt-evergreen)] to-[var(--tt-summit-teal)] text-white p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Sparkles size={20} />
            </div>
            <div>
              <h3 className="text-white mb-0">Trail Guide AI</h3>
              <p className="text-xs text-[var(--tt-trail-cream)]">Powered by Salesforce Einstein</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white hover:bg-white/20 rounded-lg p-2 transition-colors"
            aria-label="Close assistant"
          >
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <ScrollArea className="flex-1 p-4 bg-gray-50">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.sender === 'user'
                      ? 'bg-[var(--tt-evergreen)] text-white rounded-br-sm'
                      : 'bg-white text-gray-800 rounded-bl-sm shadow-md'
                  }`}
                >
                  <p className="whitespace-pre-line">{message.content}</p>
                  {message.suggestions && message.suggestions.length > 0 && (
                    <div className="mt-3 space-y-2">
                      {message.suggestions.map((suggestion, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSuggestionClick(suggestion)}
                          className="block w-full text-left px-3 py-2 bg-[var(--tt-trail-cream)] hover:bg-[var(--tt-sun-amber)] hover:text-white rounded-lg transition-colors text-sm"
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white rounded-2xl rounded-bl-sm px-4 py-3 shadow-md flex items-center gap-2">
                  <Loader2 size={16} className="animate-spin text-[var(--tt-evergreen)]" />
                  <span className="text-gray-600">Trail Guide is typing...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>

        {/* Input */}
        <div className="p-4 bg-white border-t border-gray-200">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex gap-2"
          >
            <Input
              type="text"
              placeholder="Ask me anything..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              disabled={isTyping}
              className="flex-1"
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isTyping}
              className="bg-[var(--tt-evergreen)] text-white p-3 rounded-lg hover:bg-[var(--tt-summit-teal)] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              aria-label="Send message"
            >
              <Send size={20} />
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-2 text-center">
            AI responses are helpful but may not always be perfect
          </p>
        </div>
      </div>
    </div>
  );
}
