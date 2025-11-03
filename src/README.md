# Transition Trails Digital Experience

A modern, accessible Salesforce Experience Cloud website for Transition Trails - a nonprofit providing Salesforce training and expertise to learners, nonprofits, and supporters.

---

## 🎯 Project Overview

**Platform:** Salesforce Experience Cloud (Nonprofit Cloud)  
**Design System:** TTDS (Transition Trails Design System)  
**Theme:** Light mode, professional, approachable  
**Technology Stack:** React, TypeScript, Tailwind CSS, Salesforce Lightning Web Components

### Key Features

✨ **AI-Powered Assistant** - Trail Guide AI helps visitors navigate and find resources  
📚 **Learning Academy** - Courses, trails, and certification programs  
🤝 **Nonprofit Services** - Salesforce implementation and support  
💚 **Support Portal** - Donations, volunteering, and partnerships  
📊 **Personalized Dashboard** - Track learning progress and goals  

---

## 📁 Project Structure

```
├── /components
│   ├── /pages           # Full page components (8 pages)
│   ├── /ui              # ShadCN UI components
│   ├── AIAssistant.tsx  # AI chatbot widget
│   ├── Navigation.tsx   # Sticky header navigation
│   ├── Footer.tsx       # Site footer
│   ├── TTButton.tsx     # Branded button component
│   └── ...              # Additional components
│
├── /styles
│   └── globals.css      # Global styles, animations, CSS variables
│
├── Documentation
│   ├── DEVELOPER_HANDOFF.md    # Salesforce CMS integration guide
│   ├── SALESFORCE_SETUP.md     # Step-by-step setup instructions
│   ├── DESIGN_SYSTEM.md        # Complete design system reference
│   ├── CONSIDERATIONS.md       # Implementation considerations & recommendations
│   ├── AI_ASSISTANT_GUIDE.md   # AI integration comprehensive guide
│   └── README.md               # This file
│
└── App.tsx              # Main application entry point
```

---

## 🎨 Design System

### Color Palette

```css
--tt-evergreen: #2F6B4E      /* Primary - buttons, headers */
--tt-summit-teal: #254C59    /* Secondary - gradients, footer */
--tt-sky-blue: #5B89A6       /* Tertiary - info, links */
--tt-trail-cream: #F2EAD3    /* Background tint */
--tt-sun-amber: #F59E33      /* Accent - CTAs, highlights */
```

### Typography

**Font:** Inter (Google Fonts)  
**Scale:** H1 (48px) → H2 (36px) → H3 (24px) → Body (18px)

### Components

- **Buttons:** Primary, Secondary, Accent variants
- **Cards:** Image Top, Compact, Info variants
- **Progress Bars:** Linear and circular with animation
- **Forms:** Rounded inputs, focus states
- **AI Widget:** Context-aware chatbot

---

## 🚀 Getting Started

### For Developers

This is a **reference implementation** for conversion to Salesforce Lightning Web Components.

**Important Files to Review:**
1. `DEVELOPER_HANDOFF.md` - Data model and CMS integration points
2. `SALESFORCE_SETUP.md` - Complete setup guide with time estimates
3. `DESIGN_SYSTEM.md` - Design patterns and component usage
4. `AI_ASSISTANT_GUIDE.md` - Einstein GPT integration details

### Site Structure

**Public Pages** (Guest Access):
- **Home** - Hero, audience cards, testimonials
- **About** - Mission, team, timeline
- **Our Trails** - Learning path catalog
- **Academy** - Course listings with search
- **Services** - Nonprofit Salesforce solutions
- **Support** - Donations, volunteering, partnerships
- **Contact** - Contact form and FAQ

**Authenticated Pages** (Requires Login):
- **Dashboard** - Personalized learning portal, progress tracking

---

## 🤖 AI Assistant

### Trail Guide AI

An intelligent chatbot powered by Salesforce Einstein GPT that:

- Provides **context-aware help** on each page
- Offers **guided prompts** to reduce typing
- Recognizes **user intent** (courses, donations, navigation)
- Maintains **conversation history** within session
- Escalates to **live support** when needed

**Key Intents:**
- Course recommendations
- Trail comparisons
- Enrollment process
- Donation options
- Volunteer opportunities
- General navigation

**See:** `AI_ASSISTANT_GUIDE.md` for complete implementation details.

---

## 📊 Salesforce CMS Integration

### Custom Objects Required

1. **Team_Member__c** - Team bios and photos
2. **Trail_Program__c** - Learning trail definitions
3. **Course__c** - Academy course catalog
4. **Trail_Progress__c** - User progress tracking
5. **Testimonial__c** - Success stories and reviews
6. **Impact_Stat__c** - Homepage statistics
7. **Service_Offering__c** - Nonprofit services
8. **Event__c** - Webinars and workshops
9. **Partner__c** - Partner organizations
10. **FAQ__c** - Frequently asked questions

**Full schema:** See `DEVELOPER_HANDOFF.md` section "Data Model & CMS Objects"

---

## 🎯 Key Features

### 1. Smart Search
- Academy page has real-time course search
- Filters by category (Free, Coaching, Certification)
- Searches title, description, and level

### 2. Newsletter Signup
- Embedded in footer and Support page
- GDPR-compliant with privacy disclosure
- Integrates with Salesforce Marketing Cloud

### 3. Cookie Consent
- GDPR/CCPA compliant banner
- Appears 2 seconds after page load
- Stores consent in localStorage

### 4. Back to Top
- Appears after 300px scroll
- Smooth scroll animation
- Accessible (keyboard + screen reader)

### 5. Loading States
- Skeleton loaders for dynamic content
- Prevents layout shift
- Improves perceived performance

### 6. Responsive Design
- Mobile-first approach
- Breakpoints: 640px, 768px, 1024px, 1280px
- Touch-friendly on mobile

---

## ♿ Accessibility

### WCAG 2.1 AA Compliance

✅ Color contrast ratios meet standards  
✅ Keyboard navigation throughout  
✅ Screen reader compatible  
✅ Focus indicators visible  
✅ ARIA labels on interactive elements  
✅ Semantic HTML structure  
✅ Alt text on all images  

**Testing Tools:**
- WAVE (Web Accessibility Evaluation Tool)
- axe DevTools
- Lighthouse (Chrome)

---

## 📈 Analytics & Tracking

### Recommended Setup

**Google Analytics 4:**
- Page views
- Course enrollments
- Form submissions
- Button click tracking (CTAs)
- AI assistant usage

**Salesforce Analytics:**
- User engagement metrics
- Conversion funnels
- Dashboard usage
- Course completion rates

**AI Metrics:**
- Conversation volume
- Intent recognition accuracy
- User satisfaction ratings
- Escalation rate

---

## 🔒 Security & Privacy

### Best Practices

- **Input Validation:** All forms sanitized
- **Rate Limiting:** Prevent spam and abuse
- **SSL/TLS:** HTTPS everywhere
- **Authentication:** Secure session management
- **Data Encryption:** Sensitive data at rest
- **Privacy Policy:** Required before launch
- **Cookie Consent:** GDPR/CCPA compliance

---

## 🚢 Deployment Checklist

### Before Launch

- [ ] All custom objects created in Salesforce
- [ ] CMS workspace configured
- [ ] Images uploaded to Salesforce CMS
- [ ] Sample data loaded
- [ ] Einstein Bot trained with intents
- [ ] Privacy policy and terms of service added
- [ ] Cookie consent banner tested
- [ ] Analytics tracking verified
- [ ] All forms tested and routing correctly
- [ ] Mobile responsive on all pages
- [ ] Accessibility audit passed
- [ ] Performance testing (Lighthouse score >90)
- [ ] User acceptance testing completed

### Post-Launch (Week 1)

- [ ] Monitor error logs
- [ ] Review AI conversation analytics
- [ ] Check form submission routing
- [ ] Verify course enrollment flow
- [ ] Test donation processing
- [ ] Gather user feedback
- [ ] Quick fixes for critical issues

---

## 📚 Documentation Index

| Document | Purpose | Audience |
|----------|---------|----------|
| `README.md` | Project overview | Everyone |
| `DEVELOPER_HANDOFF.md` | Salesforce integration guide | Developers |
| `SALESFORCE_SETUP.md` | Step-by-step setup | Admins |
| `DESIGN_SYSTEM.md` | Design patterns & components | Designers, Developers |
| `CONSIDERATIONS.md` | Recommendations & best practices | Product, Leadership |
| `AI_ASSISTANT_GUIDE.md` | Einstein GPT integration | AI/ML Developers |

---

## 🤝 Contributing

### Development Workflow

1. **Review** the design system and component library
2. **Convert** React components to Lightning Web Components
3. **Integrate** with Salesforce CMS objects
4. **Test** in Salesforce sandbox environment
5. **Deploy** to production Experience Cloud

### Code Comments

Look for integration points marked with:
```javascript
// SALESFORCE CMS INTEGRATION: [Description]
```

These indicate where static data should be replaced with Salesforce queries.

---

## 🎓 Training Resources

### Salesforce Trailhead Modules
- [Experience Cloud Basics](https://trailhead.salesforce.com/content/learn/modules/exp-cloud-basics)
- [Einstein Bots](https://trailhead.salesforce.com/content/learn/modules/einstein-bots-basics)
- [Lightning Web Components](https://trailhead.salesforce.com/content/learn/trails/build-lightning-web-components)
- [Nonprofit Cloud](https://trailhead.salesforce.com/content/learn/trails/nonprofit-cloud-basics)

### External Resources
- [Salesforce Experience Cloud Documentation](https://help.salesforce.com/s/articleView?id=sf.networks_overview.htm)
- [Einstein GPT Developer Guide](https://developer.salesforce.com/docs/einstein/genai/)
- [React to LWC Migration Guide](https://developer.salesforce.com/blogs/2019/05/react-to-lwc.html)

---

## 📞 Support

### Technical Questions
- **Email:** dev-team@transitiontrails.org
- **Slack:** #tt-dev-support (internal)

### Content Questions
- **Email:** content@transitiontrails.org

### Salesforce Admin
- **Email:** admin@transitiontrails.org

---

## 📝 License

This project is proprietary to Transition Trails.  
© 2025 Transition Trails. All rights reserved.

Built with ❤️ for learners, nonprofits, and supporters everywhere.

---

## 🎉 Acknowledgments

- **Design System:** Based on Transition Trails brand guidelines
- **UI Components:** ShadCN UI Library
- **Icons:** Lucide React
- **Fonts:** Inter (Google Fonts)
- **Platform:** Salesforce Experience Cloud
- **AI:** Powered by Salesforce Einstein GPT

---

**Version:** 1.0  
**Last Updated:** November 3, 2025  
**Status:** Ready for Salesforce Development Team Handoff  
**Estimated Development Time:** 40-60 hours

---

## Quick Start Commands

```bash
# View the application
# Open index.html in browser or use local dev server

# Review documentation
cat DEVELOPER_HANDOFF.md    # Integration guide
cat SALESFORCE_SETUP.md     # Setup instructions
cat DESIGN_SYSTEM.md        # Component reference
cat AI_ASSISTANT_GUIDE.md   # AI implementation

# Next steps
# 1. Create Salesforce objects (DEVELOPER_HANDOFF.md)
# 2. Set up CMS workspace (SALESFORCE_SETUP.md)
# 3. Configure Einstein Bot (AI_ASSISTANT_GUIDE.md)
# 4. Convert components to LWC
# 5. Deploy to Experience Cloud
```

---

**Ready to transform digital education and empower nonprofits? Let's build! 🚀**
