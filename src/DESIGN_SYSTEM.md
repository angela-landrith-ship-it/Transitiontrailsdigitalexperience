# Transition Trails Design System (TTDS)

## Brand Colors

### Primary Palette
```css
--tt-evergreen: #2F6B4E      /* Primary brand color - buttons, headings, key elements */
--tt-summit-teal: #254C59    /* Secondary brand color - gradients, accents */
--tt-sky-blue: #5B89A6       /* Tertiary color - info elements, links */
--tt-trail-cream: #F2EAD3    /* Background tint - sections, cards */
--tt-sun-amber: #F59E33      /* Accent color - CTAs, highlights, active states */
```

### Utility Colors
```css
--tt-error: #B64E3B          /* Error messages, validation */
--tt-success: #68922D        /* Success messages, completed states */
```

### Usage Guidelines
- **Evergreen**: Primary buttons, navigation active state, headings in white sections
- **Summit Teal**: Footer background, gradients (paired with Evergreen), dark sections
- **Sky Blue**: Secondary information, tertiary buttons, role labels
- **Trail Cream**: Section backgrounds (alternating with white), card backgrounds, soft accents
- **Sun Amber**: Call-to-action buttons, progress indicators, hover states, active links

---

## Typography

### Font Family
**Inter** - Google Fonts  
Weights: 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)

### Type Scale

```css
H1: 48px / Bold / 120% line-height
H2: 36px / SemiBold / 125% line-height  
H3: 24px / SemiBold / 130% line-height
H4: 20px / Medium / 140% line-height
Body: 18px / Regular / 160% line-height
Labels: 14px / Medium / 140% line-height
Buttons: 16px / SemiBold / Uppercase tracking
```

### Implementation Note
⚠️ **DO NOT use Tailwind font classes** (text-2xl, font-bold, etc.) unless specifically overriding. Default typography is defined in `/styles/globals.css`.

---

## Components

### TTButton (`/components/TTButton.tsx`)

**Variants:**
- `primary` - Evergreen background, white text (default)
- `secondary` - White background, Evergreen border
- `accent` - Sun Amber background, dark text

**Props:**
- `variant?: 'primary' | 'secondary' | 'accent'`
- `pulse?: boolean` - Adds subtle pulse animation
- Standard button HTML attributes

**Usage:**
```tsx
<TTButton variant="primary" onClick={handleClick}>
  Get Started
</TTButton>

<TTButton variant="accent" pulse>
  Enroll Now
</TTButton>
```

---

### TrailCard (`/components/TrailCard.tsx`)

Reusable card for displaying trail programs, courses, or content items.

**Props:**
- `title: string`
- `description: string`
- `image: string`
- `onClick: () => void`
- `icon?: ReactNode` - Optional icon displayed above title

**Usage:**
```tsx
<TrailCard
  title="Visitor's Trail"
  description="Your first steps into digital learning"
  image={trailImage}
  icon={<Compass size={40} />}
  onClick={() => navigate('trail-detail')}
/>
```

---

### ProgressBar (`/components/ProgressBar.tsx`)

Animated progress indicator for learning trails.

**Props:**
- `progress: number` - Percentage (0-100)
- `label?: string` - Optional label above bar
- `showPercentage?: boolean` - Show percentage value (default: true)
- `animated?: boolean` - Animate on mount (default: true)

**Usage:**
```tsx
<ProgressBar 
  progress={65} 
  label="Salesforce Fundamentals"
  showPercentage={true}
  animated={true}
/>
```

---

### Navigation (`/components/Navigation.tsx`)

Sticky header with desktop/mobile responsive navigation.

**Features:**
- Sticky positioning with shadow
- Active page highlighting (amber underline)
- Mobile slide-in menu
- Sign In button routes to dashboard

**Props:**
- `currentPage: string` - Current active page
- `onNavigate: (page: string) => void` - Navigation handler

---

### Footer (`/components/Footer.tsx`)

Dark teal footer with links, contact info, and social media.

**Sections:**
- Brand & social links
- Quick navigation links
- Support links
- Contact information

**Props:**
- `onNavigate: (page: string) => void` - Navigation handler

---

## Layout & Spacing

### Grid System
- **Desktop**: 12-column grid, 80px side margins
- **Mobile**: 16px gutters

### Spacing Scale (Multiples of 8)
```
8px   - xs (tight spacing)
16px  - sm (small gaps)
24px  - md (standard spacing)
32px  - lg (section spacing)
48px  - xl (large sections)
96px  - 2xl (major sections)
```

### Section Padding
```css
Desktop: py-24 (96px top/bottom)
Mobile:  py-12 (48px top/bottom)
```

### Container Padding
```css
Desktop: px-20 (80px left/right)
Tablet:  px-6  (24px left/right)
Mobile:  px-4  (16px left/right)
```

---

## Animations

### Available Animations (in globals.css)

**Trail Progress:**
```css
.animate-trail-progress {
  animation: trailProgress 1.5s ease-out forwards;
}
```
Used for progress bars filling from 0 to target percentage.

**Fade In Up:**
```css
.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
}
```
Used for hero sections and mobile menu entrance.

**Pulse (Slow):**
```css
.animate-pulse-slow {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
```
Used for CTA buttons to draw attention.

### Transitions
- Button hover: `100ms` duration
- Card hover: `300ms` shadow
- Navigation: `200ms` color transitions

---

## Component Patterns

### Hero Section Pattern
```tsx
<section className="relative h-[600px] flex items-center justify-center overflow-hidden">
  <div className="absolute inset-0">
    <ImageWithFallback src={heroImage} className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-r from-[var(--tt-summit-teal)]/80 to-[var(--tt-evergreen)]/70" />
  </div>
  <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
    <h1 className="mb-6 text-white">Headline</h1>
    <p className="mb-8">Subheading</p>
    <TTButton variant="accent">Call to Action</TTButton>
  </div>
</section>
```

### Alternating Section Backgrounds
- White background
- Trail Cream background (`bg-[var(--tt-trail-cream)]`)
- Dark gradient (`bg-gradient-to-r from-[var(--tt-evergreen)] to-[var(--tt-summit-teal)]`)

### Card Hover Effect
```tsx
<div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
  {/* Card content */}
</div>
```

---

## Icons

### Icon Library: Lucide React
```tsx
import { Compass, Users, Heart, BookOpen } from 'lucide-react';

<Compass size={40} className="text-[var(--tt-evergreen)]" />
```

### Common Icon Sizes
- Small: `size={16}`
- Medium: `size={20}`
- Large: `size={32}`
- XLarge: `size={40}`

---

## Accessibility

### Color Contrast
All color combinations meet WCAG 2.1 AA standards:
- Evergreen on white: ✓
- White on Evergreen: ✓
- Sun Amber on white: ✓
- White on Summit Teal: ✓

### Focus States
All interactive elements have visible focus rings using:
```css
focus:ring-2 focus:ring-[var(--tt-sun-amber)] focus:ring-offset-2
```

### Keyboard Navigation
- Tab through all interactive elements
- Enter/Space to activate buttons
- Escape to close mobile menu

---

## Responsive Breakpoints

```css
sm: 640px   /* Small tablets */
md: 768px   /* Tablets */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
2xl: 1536px /* Extra large desktop */
```

### Common Responsive Patterns
```tsx
/* Mobile-first: stack on mobile, grid on desktop */
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

/* Hide on mobile, show on desktop */
<div className="hidden lg:flex">

/* Adjust padding */
<section className="py-12 lg:py-24">
```

---

## Best Practices

### DO:
✅ Use CSS variables for all brand colors  
✅ Maintain consistent spacing with 8px increments  
✅ Use Inter font for all text  
✅ Apply hover states to all interactive elements  
✅ Use ImageWithFallback for all images (except Figma imports)  
✅ Add ARIA labels for accessibility  
✅ Test on mobile, tablet, and desktop  

### DON'T:
❌ Hardcode color hex values  
❌ Use arbitrary spacing values  
❌ Override default typography without reason  
❌ Use inline styles (except for dynamic values)  
❌ Forget alt text on images  
❌ Create deeply nested components  

---

## File Structure

```
/components
  /pages          - Full page components
  /ui             - ShadCN UI components (do not modify)
  /figma          - Figma integration utilities
  Navigation.tsx  - Header navigation
  Footer.tsx      - Site footer
  TTButton.tsx    - Custom button component
  TrailCard.tsx   - Reusable card component
  ProgressBar.tsx - Progress indicator

/styles
  globals.css     - Global styles, animations, typography
```

---

## Developer Notes

1. **Color Variables**: Always use CSS variables, never hex codes directly
2. **Typography**: Let globals.css handle font sizes unless explicitly overriding
3. **Animations**: Prefer CSS animations over JavaScript for performance
4. **Images**: Use Salesforce CMS URLs in production
5. **Mobile First**: Write mobile styles first, then add breakpoints
6. **Accessibility**: Every image needs alt text, every button needs clear purpose

---

**Version:** 1.0  
**Last Updated:** November 3, 2025  
**Maintained by:** Design Team
