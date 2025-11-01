# Design Guidelines for CarGPS.kz

## Design Approach

**Selected Approach:** Hybrid Reference-Based (Stripe + Linear aesthetic)
- Reason: B2B/B2C GPS tracking service requires credibility, clarity, and conversion optimization
- Reference blend: Stripe's trustworthy minimalism + Linear's sophisticated dark UI + Notion's content hierarchy
- Maintain existing dark theme foundation while elevating visual sophistication

## Core Design Elements

### A. Typography
**Font System:** Inter (via Google Fonts CDN)
- **Headings:**
  - H1: 48px (mobile: 32px), weight 700, line-height 1.1
  - H2: 36px (mobile: 28px), weight 700, line-height 1.2
  - H3: 24px (mobile: 20px), weight 600, line-height 1.3
- **Body:** 16px, weight 400, line-height 1.6, color #e6e8ec
- **Muted text:** 14px, weight 400, color #9aa3b2
- **Accent text:** 18px, weight 500, for emphasis

### B. Layout System
**Spacing Primitives:** Tailwind units of 4, 6, 8, 12, 16, 20, 24, 32
- Section padding: py-20 (desktop), py-12 (mobile)
- Card padding: p-6 to p-8
- Grid gaps: gap-6 to gap-8
- Container: max-w-7xl with px-6 padding

**Viewport Strategy:**
- Hero: 85vh (not forced full viewport)
- Content sections: Natural height with py-20 rhythm
- Multi-column grids: 3 columns (desktop), 2 columns (tablet), 1 column (mobile)

### C. Component Library

**Navigation:**
- Fixed header with subtle backdrop blur
- Logo left, navigation center, language toggle + CTA right
- Smooth scroll anchors to sections
- Mobile: Hamburger menu with slide-in drawer

**Hero Section:**
- Large hero image: GPS tracker device in car dashboard context (photorealistic)
- Overlay gradient: Dark gradient for text legibility
- Headline + subheadline hierarchy
- Dual CTAs: Primary WhatsApp button (blue #4da3ff) + Secondary "View Pricing" (ghost/outline)
- Trust indicators below CTAs: "500+ транспортов под контролем" with verification badges
- Feature pills beneath hero content

**Cards:**
- Background: #161a22
- Border: 1px solid #232935
- Border radius: 16px
- Hover state: Subtle lift (translate-y-1) with border color shift to #2a3140
- Icon integration: 48px icons (line-style) in brand blue above card titles

**Benefits Section (3-column grid):**
- Icon + Title + Description format
- Icons: GPS pin, chart/analytics, fuel/savings themed
- Equal height cards with centered alignment

**Device Showcase:**
- 2-column split: Product image left (GS900 device hero shot), specifications right
- Pricing badge: Prominent with "15,000 ₸" and small "установка по запросу" tag
- Feature checklist with checkmark icons
- Secondary CTA: "Подробнее о GS900"

**Process Steps (3-column):**
- Numbered cards (1, 2, 3) with large numerals
- Title + concise description
- Progressive disclosure feel with subtle connecting lines between cards (desktop only)

**Pricing Section:**
- 2-3 pricing tiers in card format
- Highlight "Most Popular" tier with brand color accent border
- Feature comparison table below cards
- All tiers include WhatsApp CTA button

**Contact Section:**
- 2-column layout: Contact form left, info card right
- Info card includes: Phone (+77782589661), working hours, office address (if applicable)
- WhatsApp floating action button: Fixed bottom-right, brand green (#12c48b)
- Form inputs: Dark (#161a22) with focus state border (brand blue)

**Footer:**
- 4-column layout: About, Services, Support, Legal
- Social media links (if applicable)
- Language toggle mirror
- Copyright + "Разработано в Казахстане" badge

### D. Color Palette (Dark Theme)
**Existing brand colors (preserve):**
- Background: #0e1117
- Card surface: #161a22
- Text primary: #e6e8ec
- Text muted: #9aa3b2
- Brand blue: #4da3ff (CTAs, links, accents)
- Success green: #12c48b (WhatsApp, success states)

**Extended palette:**
- Border base: #232935
- Border hover: #2a3140
- Card highlight border: #283247
- Overlay gradient: rgba(14, 17, 23, 0.85) to transparent

### E. Interactive Elements
**Buttons:**
- Primary: bg-[#4da3ff], text-[#081018], px-6 py-3, rounded-xl, font-semibold
- Secondary: bg-[#161a22], text-[#e6e8ec], border border-[#2a3140], hover:border-[#4da3ff]
- WhatsApp CTA: bg-[#12c48b] with WhatsApp icon
- All buttons: Subtle shadow, hover scale (1.02), active state brightness adjustment

**Language Toggle:**
- Pill-shaped toggle with active state highlighting
- RU/KZ labels, active tab has brand blue border

**Animations:**
- Minimal, tasteful: Fade-in on scroll for cards (stagger delay)
- Button hover: Scale + shadow enhancement
- No distracting auto-play animations

## Images Strategy

**Hero Image:** 
Full-width hero image showing GS900 GPS tracker installed in modern car dashboard, daytime cityscape visible through windshield. Image should convey professionalism and modern technology. Use dark overlay gradient (top-to-bottom) for text contrast.

**Device Section:**
High-quality product photography of GS900 tracker - 3/4 angle shot with clean studio lighting against dark background. Show device size relative to hand or common object.

**Optional Supporting Images:**
- Map interface screenshot showing tracking dashboard
- Fleet of vehicles (trucks, cars) for testimonial/social proof section

## Bilingual Implementation
- JavaScript toggle switches `data-lang` attribute on `<body>`
- All content duplicated with `data-lang="ru"` and `data-lang="kk"` attributes
- CSS controls visibility: `[data-lang]:not([data-lang="kk"]) { display: none; }` when Kazakh active
- Maintain identical layout structure between languages

## Conversion Optimization
- WhatsApp CTAs prominently placed: Hero, Device section, Pricing cards, Floating button
- Trust signals: Client count, years in business, Kazakhstan-wide coverage badge
- Clear value proposition: "от 2000 ₸/мес" pricing front and center
- Urgency/scarcity: "Установка за 1 день" messaging
- Social proof: Add testimonials section if available (3-column cards with client quotes)