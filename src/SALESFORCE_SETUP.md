# Salesforce Experience Cloud Setup Guide
## Transition Trails Digital Experience

This guide provides step-by-step instructions for setting up the Transition Trails site in Salesforce Experience Cloud.

---

## Prerequisites

- Salesforce Experience Cloud license
- Nonprofit Success Pack (NPSP) or Nonprofit Cloud (recommended)
- System Administrator access
- Basic understanding of Salesforce object model

---

## Phase 1: Create Custom Objects (60 min)

### Step 1: Team Members
1. Setup → Object Manager → Create → Custom Object
2. Object Name: `Team Member`
3. API Name: `Team_Member__c`
4. Record Name: `Team Member Name` (Auto Number: TM-{0000})

**Add Custom Fields:**
```
Field Label          API Name              Type                Required
-----------          --------              ----                --------
Title                Title__c              Text(100)           Yes
Role                 Role__c               Picklist            Yes
Photo URL            Photo_URL__c          URL(255)            No
Bio                  Bio__c                Long Text Area      No
Display Order        Display_Order__c      Number(3,0)         Yes
Is Active            Is_Active__c          Checkbox            Yes (default)
```

**Role Picklist Values:**
- Leadership
- Education
- Consulting
- Technology
- Community

---

### Step 2: Trail Programs
1. Object Name: `Trail Program`
2. API Name: `Trail_Program__c`

**Add Custom Fields:**
```
Field Label          API Name              Type                Required
-----------          --------              ----                --------
Trail ID             Trail_ID__c           Text(50)            Yes (Unique)
Tagline              Tagline__c            Text(255)           Yes
Description          Description__c        Long Text Area      Yes
Image URL            Image_URL__c          URL(255)            Yes
Duration             Duration__c           Text(50)            Yes
Level                Level__c              Picklist            Yes
Time Commitment      Time_Commitment__c    Text(50)            Yes
Topics               Topics__c             Long Text Area      No
Display Order        Display_Order__c      Number(3,0)         Yes
Is Active            Is_Active__c          Checkbox            Yes (default)
```

**Level Picklist Values:**
- Beginner
- Intermediate
- Advanced
- All Levels

---

### Step 3: Courses
1. Object Name: `Course`
2. API Name: `Course__c`

**Add Custom Fields:**
```
Field Label          API Name              Type                Required
-----------          --------              ----                --------
Course ID            Course_ID__c          Text(50)            Yes (Unique)
Category             Category__c           Picklist            Yes
Duration             Duration__c           Text(50)            Yes
Level                Level__c              Picklist            Yes
Instructor           Instructor__c         Lookup(Team Member) No
Price                Price__c              Currency(10,2)      Yes
Description          Description__c        Long Text Area      Yes
Lesson Count         Lesson_Count__c       Number(4,0)         Yes
Enrolled Count       Enrolled_Count__c     Number(6,0)         Yes (default 0)
Image URL            Image_URL__c          URL(255)            Yes
Display Order        Display_Order__c      Number(3,0)         Yes
Is Active            Is_Active__c          Checkbox            Yes (default)
```

**Category Picklist Values:**
- Free
- Coaching
- Certification

---

### Step 4: Trail Progress (User Progress Tracking)
1. Object Name: `Trail Progress`
2. API Name: `Trail_Progress__c`

**Add Custom Fields:**
```
Field Label          API Name                  Type                Required
-----------          --------                  ----                --------
User                 User__c                   Lookup(User)        Yes
Course               Course__c                 Lookup(Course)      Yes
Progress Percentage  Progress_Percentage__c    Number(3,0)         Yes
Lessons Completed    Lessons_Completed__c      Number(4,0)         Yes
Next Lesson          Next_Lesson__c            Text(255)           No
Due Date             Due_Date__c               Date                No
Last Activity        Last_Activity__c          Date/Time           No
Status               Status__c                 Picklist            Yes
```

**Status Picklist Values:**
- In Progress
- Completed
- Paused

**Validation Rule:** `Progress_Percentage__c` must be between 0-100

---

### Step 5: Additional Objects

Repeat the same process for:
- **Testimonial__c** - Success stories and reviews
- **Impact_Stat__c** - Homepage and Support page statistics
- **Service_Offering__c** - Nonprofit services
- **Event__c** - Webinars, workshops, coaching sessions
- **Partner__c** - Partner organizations
- **FAQ__c** - Frequently asked questions
- **Contact_Request__c** - Contact form submissions
- **Volunteer_Application__c** - Volunteer applications

**See DEVELOPER_HANDOFF.md for complete field definitions**

---

## Phase 2: Configure CMS Workspace (30 min)

### Create CMS Workspace
1. Setup → All Sites → Click your site name
2. Workspaces → CMS → New Workspace
3. Name: `Transition Trails Content`
4. Click Create

### Create Content Collections

**Team Photos:**
1. Click workspace → Content → New Collection
2. Name: `Team Photos`
3. Upload team member images (800x800px)

**Course Images:**
1. New Collection: `Course Images`
2. Upload course thumbnails (1200x675px)

**Trail Images:**
1. New Collection: `Trail Images`
2. Upload trail feature images (1920x1080px)

**Partner Logos:**
1. New Collection: `Partner Logos`
2. Upload partner logo images (400x200px)

### Set Permissions
1. Workspace Settings → Access
2. Guest User Profile: View Only
3. Authenticated User Profile: View Only
4. Admin Profiles: Full Access

---

## Phase 3: Create Permission Sets (20 min)

### Guest User Permissions
```
Object               Read  Create  Edit  Delete
------               ----  ------  ----  ------
Team_Member__c       Yes   No      No    No
Trail_Program__c     Yes   No      No    No
Course__c            Yes   No      No    No
Testimonial__c       Yes   No      No    No
Impact_Stat__c       Yes   No      No    No
Service_Offering__c  Yes   No      No    No
Event__c             Yes   No      No    No
Partner__c           Yes   No      No    No
FAQ__c               Yes   No      No    No
Contact_Request__c   No    Yes     No    No
```

### Authenticated User Permissions
```
Object               Read  Create  Edit  Delete
------               ----  ------  ----  ------
Trail_Progress__c    Yes*  Yes*    Yes*  No
Event__c             Yes   No      No    No
(*Own records only)
```

---

## Phase 4: Load Sample Data (45 min)

### Option A: Data Import Wizard
1. Setup → Data Import Wizard
2. Custom Objects → Select object
3. Upload CSV with sample data
4. Map fields
5. Start Import

### Option B: Data Loader
For bulk uploads or complex relationships

### Sample Data Templates

**Team Members (6 records):**
```csv
Name,Title__c,Role__c,Display_Order__c,Is_Active__c
Dr. Maria Rodriguez,Founder & Executive Director,Leadership,1,TRUE
James Chen,Director of Learning,Education,2,TRUE
Aisha Williams,Nonprofit Services Lead,Consulting,3,TRUE
Marcus Thompson,Technology Director,Technology,4,TRUE
Sofia Patel,Community Manager,Community,5,TRUE
David Kim,Lead Instructor,Education,6,TRUE
```

**Trail Programs (4 records):**
```csv
Name,Trail_ID__c,Tagline__c,Duration__c,Level__c,Time_Commitment__c,Display_Order__c,Is_Active__c
Visitor's Trail,visitors,Your First Steps Into Digital Learning,4-6 weeks,Beginner,3-5 hours/week,1,TRUE
Guided Trail,guided,Structured Learning with Expert Support,12 weeks,Intermediate,8-10 hours/week,2,TRUE
Trail of Mastery,mastery,Advanced Certification & Career Launch,16-20 weeks,Advanced,15-20 hours/week,3,TRUE
Explorer's Journey,explorer,Self-Paced Learning Adventures,Flexible,All Levels,Self-paced,4,TRUE
```

**Continue for all objects...**

---

## Phase 5: Create Experience Cloud Site (60 min)

### Initialize Site
1. Setup → All Sites → New
2. Template: **Build Your Own (LWR)**
3. Name: `Transition Trails`
4. URL: `transitiontrails` (or custom domain)
5. Click Create

### Configure Site Settings
1. **General:**
   - Site Name: Transition Trails
   - Description: Empowering digital journeys
   - Default Language: English

2. **Theme:**
   - Create custom theme using TTDS colors
   - Upload logo (Transition Trails shield)
   - Set fonts to Inter

3. **Login & Registration:**
   - Enable self-registration
   - Custom login page
   - Password policies

4. **SEO:**
   - Title: Transition Trails - Find Your Trail. Build Your Future.
   - Meta Description: Digital education and Salesforce expertise for learners, nonprofits, and communities.
   - Favicon: Upload logo

---

## Phase 6: Build Lightning Web Components (120+ min)

Convert React components to LWC. Each page becomes a component:

### Component Structure
```
force-app/main/default/lwc/
├── ttHomePage/
│   ├── ttHomePage.html
│   ├── ttHomePage.js
│   ├── ttHomePage.js-meta.xml
│   └── ttHomePage.css
├── ttAboutPage/
├── ttTrailsPage/
├── ttAcademyPage/
├── ttServicesPage/
├── ttSupportPage/
├── ttContactPage/
├── ttDashboard/
├── ttNavigation/
└── ttFooter/
```

### Example: ttHomePage.js
```javascript
import { LightningElement, wire } from 'lwc';
import getTestimonials from '@salesforce/apex/HomePageController.getTestimonials';
import getImpactStats from '@salesforce/apex/HomePageController.getImpactStats';

export default class TtHomePage extends LightningElement {
    testimonials;
    impactStats;

    @wire(getTestimonials, { isFeatured: true })
    wiredTestimonials({ error, data }) {
        if (data) {
            this.testimonials = data;
        }
    }

    @wire(getImpactStats, { category: 'Homepage' })
    wiredStats({ error, data }) {
        if (data) {
            this.impactStats = data;
        }
    }
}
```

### Example: HomePageController.cls
```apex
public with sharing class HomePageController {
    @AuraEnabled(cacheable=true)
    public static List<Testimonial__c> getTestimonials(Boolean isFeatured) {
        return [
            SELECT Name, Role__c, Testimonial_Text__c, Rating__c
            FROM Testimonial__c
            WHERE Is_Featured__c = :isFeatured
            AND Is_Active__c = true
            ORDER BY Display_Order__c
            LIMIT 10
        ];
    }
    
    @AuraEnabled(cacheable=true)
    public static List<Impact_Stat__c> getImpactStats(String category) {
        return [
            SELECT Value__c, Label__c, Icon_Name__c
            FROM Impact_Stat__c
            WHERE Category__c = :category
            AND Is_Active__c = true
            ORDER BY Display_Order__c
        ];
    }
}
```

---

## Phase 7: Configure Site Pages (45 min)

### Create Pages
1. Builder → New Page
2. For each page:
   - Home (Standard, Home)
   - About (Standard, Content)
   - Our Trails (Standard, Content)
   - Academy (Standard, Content)
   - Services (Standard, Content)
   - Support (Standard, Content)
   - Contact (Standard, Content)
   - Dashboard (Standard, Account Management) - Authenticated only

### Add Components to Pages
1. Drag your custom LWC components onto pages
2. Configure component properties
3. Set page visibility (Guest vs Authenticated)

### Configure Navigation Menu
1. Builder → Navigation Menu
2. Add menu items matching header
3. Set URLs and order
4. Configure mobile menu

---

## Phase 8: Styling & Theming (60 min)

### Custom CSS
1. Builder → Theme → Styling
2. Add CSS variables:

```css
:root {
    --tt-evergreen: #2F6B4E;
    --tt-summit-teal: #254C59;
    --tt-sky-blue: #5B89A6;
    --tt-trail-cream: #F2EAD3;
    --tt-sun-amber: #F59E33;
    --tt-error: #B64E3B;
}

/* Apply to buttons, cards, sections */
.tt-button-primary {
    background: var(--tt-evergreen);
    color: white;
    border-radius: 8px;
    padding: 12px 24px;
    transition: all 100ms;
}

.tt-button-primary:hover {
    background: var(--tt-summit-teal);
}
```

### Import Inter Font
Add to head markup:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

---

## Phase 9: Testing (90 min)

### Functional Testing
- [ ] All navigation links work
- [ ] Forms submit correctly
- [ ] CMS content displays properly
- [ ] Images load from CMS
- [ ] Filters work on Academy page
- [ ] Trail detail pages load correctly

### User Role Testing
- [ ] Guest can view all public pages
- [ ] Guest cannot access Dashboard
- [ ] Authenticated user sees personalized Dashboard
- [ ] Progress tracking updates correctly

### Responsive Testing
- [ ] Mobile (320px - 767px)
- [ ] Tablet (768px - 1023px)
- [ ] Desktop (1024px+)

### Browser Testing
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

### Accessibility Testing
- [ ] Screen reader compatible
- [ ] Keyboard navigation works
- [ ] Color contrast meets WCAG AA
- [ ] All images have alt text

---

## Phase 10: Launch Preparation (30 min)

### Pre-Launch Checklist
- [ ] All sample data replaced with real content
- [ ] All images uploaded to CMS
- [ ] Team photos added
- [ ] Privacy policy and terms of service added
- [ ] Contact form tested and routing correctly
- [ ] Analytics configured (Google Analytics)
- [ ] SEO metadata complete
- [ ] Custom domain configured
- [ ] SSL certificate active
- [ ] Email templates customized
- [ ] User documentation created

### Go-Live Steps
1. Activate site
2. Set to "Public" visibility
3. Update DNS records for custom domain
4. Test production URL
5. Monitor for 24 hours
6. Announce launch

---

## Maintenance & Support

### Weekly Tasks
- Review contact form submissions
- Update event listings
- Check enrollment numbers
- Monitor site performance

### Monthly Tasks
- Update impact statistics
- Add new testimonials
- Review and update course offerings
- Check for broken links

### Quarterly Tasks
- Review and update team members
- Refresh homepage content
- Update FAQ section
- Review analytics and optimize

---

## Troubleshooting

### Common Issues

**Images not loading:**
- Check CMS workspace permissions
- Verify URL format in records
- Confirm CORS settings

**Styling not applying:**
- Clear browser cache
- Check CSS specificity
- Verify theme is published

**Data not displaying:**
- Check object permissions
- Verify SOQL query syntax
- Check Is_Active__c checkbox

**Forms not submitting:**
- Check validation rules
- Verify field requirements
- Review Flow errors

---

## Resources

**Salesforce Documentation:**
- [Experience Cloud Basics](https://help.salesforce.com/s/articleView?id=sf.networks_overview.htm)
- [Lightning Web Components Guide](https://developer.salesforce.com/docs/component-library/documentation/en/lwc)
- [CMS Workspace Setup](https://help.salesforce.com/s/articleView?id=sf.community_managed_content_overview.htm)

**Transition Trails Documentation:**
- `DEVELOPER_HANDOFF.md` - Full data model and integration points
- `DESIGN_SYSTEM.md` - Complete design system reference
- `/components/` - React component reference code

---

## Support Contacts

**Technical Questions:** dev-team@transitiontrails.org  
**Content Questions:** content@transitiontrails.org  
**Salesforce Admin:** admin@transitiontrails.org

---

**Last Updated:** November 3, 2025  
**Version:** 1.0  
**Estimated Total Setup Time:** 8-10 hours
