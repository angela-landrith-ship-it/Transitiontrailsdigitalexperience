# Transition Trails - Developer Handoff Documentation

## Overview
This document outlines the Salesforce CMS integration points and data model requirements for the Transition Trails Digital Experience site.

---

## Salesforce CMS Workspace Integration

All content should be sourced from the Salesforce CMS workspace associated with the Digital Experience. Below are the required CMS objects and their field mappings.

---

## Data Model & CMS Objects

### 1. Team_Member__c (Custom Object)
**Purpose:** Store team member information for the About page

**Fields:**
- `Name` (Standard) - Full name of team member
- `Title__c` (Text) - Job title (e.g., "Founder & Executive Director")
- `Role__c` (Picklist) - Department/Role category
  - Values: Leadership, Education, Consulting, Technology, Community
- `Photo_URL__c` (URL) - Link to team member photo in Salesforce CMS
- `Bio__c` (Long Text Area) - Optional biography text
- `Display_Order__c` (Number) - Sort order for display
- `Is_Active__c` (Checkbox) - Show/hide team member

**Usage Location:** `/components/pages/AboutPage.tsx` - "Meet Our Team" section

**Query Example:**
```javascript
SELECT Name, Title__c, Role__c, Photo_URL__c, Bio__c 
FROM Team_Member__c 
WHERE Is_Active__c = true 
ORDER BY Display_Order__c ASC
```

---

### 2. Trail_Program__c (Custom Object)
**Purpose:** Define learning trail programs

**Fields:**
- `Name` (Standard) - Trail name (e.g., "Visitor's Trail")
- `Trail_ID__c` (Text) - Unique identifier (e.g., "visitors", "guided")
- `Tagline__c` (Text) - Short descriptive tagline
- `Description__c` (Long Text Area) - Full description
- `Image_URL__c` (URL) - Hero/feature image
- `Duration__c` (Text) - Time commitment (e.g., "4-6 weeks")
- `Level__c` (Picklist) - Difficulty level
  - Values: Beginner, Intermediate, Advanced, All Levels
- `Time_Commitment__c` (Text) - Weekly hours (e.g., "3-5 hours/week")
- `Topics__c` (Long Text Area) - JSON array or comma-separated topics
- `Display_Order__c` (Number) - Sort order
- `Is_Active__c` (Checkbox) - Publish status

**Usage Location:** `/components/pages/TrailsPage.tsx`

---

### 3. Course__c (Custom Object)
**Purpose:** Academy course catalog

**Fields:**
- `Name` (Standard) - Course title
- `Course_ID__c` (Text) - Unique identifier
- `Category__c` (Picklist) - Course type
  - Values: Free, Coaching, Certification
- `Duration__c` (Text) - Course length
- `Level__c` (Picklist) - Beginner, Intermediate, Advanced, All Levels
- `Instructor__c` (Lookup to Team_Member__c) - Course instructor
- `Price__c` (Currency) - Course price (0 for free)
- `Description__c` (Long Text Area) - Full description
- `Lesson_Count__c` (Number) - Total lessons
- `Enrolled_Count__c` (Number) - Number of enrollments
- `Image_URL__c` (URL) - Course thumbnail
- `Is_Active__c` (Checkbox) - Publish status

**Usage Location:** `/components/pages/AcademyPage.tsx`

---

### 4. Trail_Progress__c (Custom Object)
**Purpose:** Track learner progress (Dashboard)

**Fields:**
- `User__c` (Lookup to User) - Learner
- `Course__c` (Lookup to Course__c) - Enrolled course
- `Progress_Percentage__c` (Number) - Completion percentage (0-100)
- `Lessons_Completed__c` (Number) - Completed lesson count
- `Next_Lesson__c` (Text) - Next lesson title
- `Due_Date__c` (Date) - Next milestone date
- `Last_Activity__c` (Date/Time) - Last engagement
- `Status__c` (Picklist) - In Progress, Completed, Paused

**Usage Location:** `/components/pages/DashboardPage.tsx`

---

### 5. Testimonial__c (Custom Object)
**Purpose:** Success stories and reviews

**Fields:**
- `Name` (Standard) - Person's name
- `Role__c` (Text) - Person's role/title
- `Organization__c` (Text) - Associated organization (optional)
- `Testimonial_Text__c` (Long Text Area) - Quote/testimonial
- `Rating__c` (Number) - Star rating (1-5)
- `Category__c` (Picklist) - Learner, Nonprofit, Volunteer
- `Is_Featured__c` (Checkbox) - Show on homepage
- `Display_Order__c` (Number) - Sort order

**Usage Locations:** 
- `/components/pages/HomePage.tsx` - Success Stories section
- `/components/pages/ServicesPage.tsx` - Client testimonials

---

### 6. Impact_Stat__c (Custom Object)
**Purpose:** Real-time impact statistics

**Fields:**
- `Name` (Standard) - Stat name
- `Value__c` (Text) - Display value (e.g., "500+", "$2.5M")
- `Label__c` (Text) - Description label
- `Icon_Name__c` (Text) - Lucide icon name
- `Category__c` (Picklist) - Homepage, Support, About
- `Display_Order__c` (Number) - Sort order
- `Is_Active__c` (Checkbox) - Show/hide

**Usage Locations:**
- `/components/pages/HomePage.tsx` - Stats section
- `/components/pages/SupportPage.tsx` - Impact stats

---

### 7. Service_Offering__c (Custom Object)
**Purpose:** Nonprofit services and features

**Fields:**
- `Name` (Standard) - Service name
- `Description__c` (Long Text Area) - Service description
- `Features__c` (Long Text Area) - JSON array or list of features
- `Icon_Name__c` (Text) - Lucide icon name
- `Display_Order__c` (Number) - Sort order
- `Is_Active__c` (Checkbox) - Show/hide

**Usage Location:** `/components/pages/ServicesPage.tsx`

---

### 8. Event__c (Custom Object)
**Purpose:** Upcoming webinars, workshops, coaching sessions

**Fields:**
- `Name` (Standard) - Event title
- `Event_Date__c` (Date) - Event date
- `Event_Time__c` (Text) - Time (e.g., "2:00 PM")
- `Type__c` (Picklist) - Coaching, Workshop, Community, Webinar
- `Description__c` (Long Text Area) - Event details
- `Registration_URL__c` (URL) - Sign-up link
- `Is_Active__c` (Checkbox) - Show/hide

**Usage Location:** `/components/pages/DashboardPage.tsx` - Upcoming Events

---

### 9. Partner__c (Custom Object)
**Purpose:** Partner organizations

**Fields:**
- `Name` (Standard) - Partner name
- `Logo_URL__c` (URL) - Partner logo image
- `Website__c` (URL) - Partner website
- `Display_Order__c` (Number) - Sort order
- `Is_Active__c` (Checkbox) - Show/hide

**Usage Location:** `/components/pages/SupportPage.tsx` - Partners section

---

### 10. FAQ__c (Custom Object)
**Purpose:** Frequently asked questions

**Fields:**
- `Question__c` (Text) - The question
- `Answer__c` (Long Text Area) - The answer
- `Category__c` (Picklist) - General, Trails, Services, Support
- `Display_Order__c` (Number) - Sort order
- `Is_Active__c` (Checkbox) - Show/hide

**Usage Location:** `/components/pages/ContactPage.tsx` - FAQ section

---

## CMS Media Assets

### Image Storage
All images should be stored in Salesforce CMS and referenced via secure URLs.

**Image Categories:**
- Team photos (`team/`)
- Course thumbnails (`courses/`)
- Trail feature images (`trails/`)
- Hero banners (`heroes/`)
- Partner logos (`partners/`)

**Recommended Sizes:**
- Team photos: 800x800px (square)
- Course thumbnails: 1200x675px (16:9)
- Trail images: 1920x1080px (16:9)
- Hero banners: 1920x1080px

---

## Salesforce Experience Cloud Configuration

### Site Settings
- **Site Name:** Transition Trails
- **Theme:** Custom (TTDS - Transition Trails Design System)
- **Base Template:** Build Your Own (LWR)

### CSS Variables (Custom Theme)
```css
:root {
  --tt-evergreen: #2F6B4E;
  --tt-summit-teal: #254C59;
  --tt-sky-blue: #5B89A6;
  --tt-trail-cream: #F2EAD3;
  --tt-sun-amber: #F59E33;
  --tt-error: #B64E3B;
  --tt-success: #68922D;
}
```

### Component Mapping

| React Component | Salesforce LWC Component | CMS Object |
|----------------|-------------------------|------------|
| HomePage | `ttHomePage` | Multiple |
| AboutPage | `ttAboutPage` | `Team_Member__c` |
| TrailsPage | `ttTrailsPage` | `Trail_Program__c` |
| AcademyPage | `ttAcademyPage` | `Course__c` |
| ServicesPage | `ttServicesPage` | `Service_Offering__c` |
| SupportPage | `ttSupportPage` | `Impact_Stat__c`, `Partner__c` |
| ContactPage | `ttContactPage` | `FAQ__c` |
| DashboardPage | `ttDashboard` | `Trail_Progress__c`, `Event__c` |

---

## Authentication & User Roles

### Guest User Access
- Home, About, Trails, Academy, Services, Support, Contact pages

### Authenticated User Access
- Dashboard (personalized learning portal)
- Course enrollment
- Progress tracking
- Event registration

### Admin Access
- CMS content management
- User management
- Analytics dashboard

---

## API Integration Points

### Key Queries

**Homepage Stats:**
```javascript
// Fetch featured testimonials
SELECT Name, Role__c, Testimonial_Text__c, Rating__c 
FROM Testimonial__c 
WHERE Is_Featured__c = true 
ORDER BY Display_Order__c

// Fetch impact stats
SELECT Value__c, Label__c, Icon_Name__c 
FROM Impact_Stat__c 
WHERE Category__c = 'Homepage' AND Is_Active__c = true
```

**Dashboard Data:**
```javascript
// User's active trails
SELECT Course__r.Name, Progress_Percentage__c, Lessons_Completed__c, 
       Course__r.Lesson_Count__c, Next_Lesson__c, Due_Date__c
FROM Trail_Progress__c
WHERE User__c = :currentUserId AND Status__c = 'In Progress'

// Upcoming events
SELECT Name, Event_Date__c, Event_Time__c, Type__c
FROM Event__c
WHERE Event_Date__c >= TODAY AND Is_Active__c = true
ORDER BY Event_Date__c ASC
LIMIT 5
```

---

## Form Submissions

### Contact Form
- Object: `Contact_Request__c`
- Fields: First_Name__c, Last_Name__c, Email__c, Phone__c, Interest__c, Message__c
- Flow: Auto-assign to appropriate team based on Interest__c value

### Volunteer Application
- Object: `Volunteer_Application__c`
- Fields: Contact info, Skills, Availability, Background
- Flow: Send to Community Manager for review

### Donation Processing
- Integration: Salesforce Nonprofit Cloud or third-party payment processor
- Object: `Donation__c` or `Opportunity` (Nonprofit Cloud)

---

## Testing Checklist

- [ ] All CMS objects created with correct fields
- [ ] Sample data loaded for each object
- [ ] Image assets uploaded to Salesforce CMS
- [ ] Permission sets configured for Guest and Authenticated users
- [ ] API queries tested and optimized
- [ ] Form submissions working and routing correctly
- [ ] Navigation working across all pages
- [ ] Responsive design tested (mobile, tablet, desktop)
- [ ] Accessibility compliance (WCAG 2.1 AA)
- [ ] Performance testing (page load < 3s)

---

## Code Comments Key

Throughout the codebase, look for these comment patterns:

```javascript
// SALESFORCE CMS INTEGRATION: [Description of what needs to be connected]
```

These indicate where static mock data should be replaced with dynamic Salesforce queries.

---

## Support & Resources

**Salesforce Documentation:**
- [Experience Cloud Setup Guide](https://help.salesforce.com/s/articleView?id=sf.networks_overview.htm)
- [CMS Workspace](https://help.salesforce.com/s/articleView?id=sf.community_managed_content_overview.htm)
- [Lightning Web Components](https://developer.salesforce.com/docs/component-library/documentation/en/lwc)

**Design System:**
- Color palette and typography defined in `/styles/globals.css`
- Component library in `/components/`
- UI components (ShadCN) in `/components/ui/`

---

## Next Steps for Development Team

1. **Create Salesforce Objects** - Build custom objects as defined above
2. **Set Up CMS Workspace** - Configure content collections
3. **Upload Assets** - Add logo, team photos, course images to CMS
4. **Build LWC Components** - Convert React components to Lightning Web Components
5. **Configure Security** - Set up Guest and Authenticated user permissions
6. **Load Sample Data** - Populate objects with initial content
7. **Test Integration** - Verify all CMS queries and data flows
8. **UAT** - User acceptance testing with stakeholders
9. **Launch** - Deploy to production Experience Cloud site

---

**Document Version:** 1.0  
**Last Updated:** November 3, 2025  
**Contact:** Development Team Lead
