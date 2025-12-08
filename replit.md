# CarGPS.kz - GPS Vehicle Tracking Platform

## Overview

CarGPS.kz is a B2B/B2C GPS vehicle tracking service for Kazakhstan, offering real-time monitoring of cars, trucks, and special equipment. The platform features a marketing landing page with bilingual support (Russian/Kazakh) and integrates with an external GPS monitoring dashboard. It emphasizes trustworthy design, conversion optimization, and local market targeting.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- **Framework:** React with TypeScript
- **Routing:** Wouter (lightweight client-side routing)
- **UI Components:** Radix UI primitives with shadcn/ui component library
- **Styling:** Tailwind CSS with custom design system
- **State Management:** TanStack React Query for server state
- **Forms:** React Hook Form with Zod validation

**Design System:**
- Based on "new-york" shadcn/ui style with dark mode as default
- Hybrid reference design combining Stripe's minimalism, Linear's dark UI, and Notion's content hierarchy
- Custom color system with HSL-based theming supporting light/dark modes
- Typography uses Inter font family via Google Fonts
- Responsive breakpoints follow Tailwind's mobile-first approach

**Key Architectural Decisions:**

1. **Bilingual Architecture:** The application implements URL-based language routing (`/ru` for Russian, `/kk` for Kazakh) with a React Context-based translation system. Language detection occurs via URL path with fallback to Russian.

2. **Component Organization:** Components are split into reusable UI primitives (`components/ui/`) and feature-specific sections (`components/`). Each section component has a corresponding example wrapper for development.

3. **SEO Optimization:** Separate HTML entry points for each language (`index.html`, `ru.html`, `kk.html`) with comprehensive meta tags, Open Graph data, and geo-targeting specifically for Kazakhstan.

4. **External Dashboard Integration:** The monitoring page (`/new`) embeds an external GPS tracking dashboard via iframe from `gps.cargps.kz`.

### Backend Architecture

**Technology Stack:**
- **Runtime:** Node.js with Express.js
- **Database ORM:** Drizzle ORM configured for PostgreSQL (via Neon serverless)
- **Session Management:** express-session with connect-pg-simple for PostgreSQL-backed sessions
- **Build Tool:** Vite for frontend, esbuild for backend compilation

**Key Architectural Decisions:**

1. **Minimal Backend:** Currently implements a minimal Express server with placeholder routes. The storage interface is abstracted (`IStorage`) with an in-memory implementation, designed to be swapped for a database-backed version.

2. **Development/Production Split:** Vite middleware is used in development for HMR and hot reloading. Production builds serve static files from the compiled `dist/public` directory.

3. **API Structure:** All API routes are prefixed with `/api` with logging middleware for request/response tracking. Health check endpoint at `/health` for deployment monitoring.

4. **Session Architecture:** Configured for PostgreSQL session storage but currently using MemStorage for user data, suggesting a planned migration to full database integration.

### Data Architecture

**Database Schema (Drizzle):**
- **Users Table:** Basic authentication schema with UUID primary keys, username (unique), and password fields
- **Migration Strategy:** Drizzle Kit configured for schema migrations in `./migrations` directory
- **Validation:** Zod schemas derived from Drizzle tables for type-safe validation

**Rationale:** PostgreSQL chosen for relational data integrity, UUID for distributed-safe primary keys, and Drizzle for type-safe database queries with automatic TypeScript inference.

### Routing Strategy

**Frontend Routes:**
- `/` → Redirects to `/ru` (default language)
- `/ru` → Russian landing page
- `/kk` → Kazakh landing page
- `/new` → GPS monitoring dashboard (iframe embed)

**Language Switching:** Changing language updates both React state and URL, triggering navigation to preserve language context across sessions.

## External Dependencies

### Third-Party Services

1. **Neon Database (@neondatabase/serverless):**
   - PostgreSQL serverless database provider
   - Accessed via WebSocket-based connection pooling
   - Used for user authentication and session storage

2. **GPS Monitoring Dashboard:**
   - External service hosted at `gps.cargps.kz`
   - Embedded via iframe on `/new` route
   - Provides real-time vehicle tracking interface

3. **WhatsApp Business API:**
   - Primary contact method for lead generation
   - Deep links constructed with pre-filled messages in user's language
   - Phone number: +7 778 258 9661

### UI Libraries

- **Radix UI:** Headless component primitives for accessibility
- **shadcn/ui:** Pre-styled component library built on Radix
- **Lucide React:** Icon library for consistent iconography
- **Embla Carousel:** Carousel/slider functionality
- **Vaul:** Drawer component for mobile interfaces

### Development Tools

- **Vite:** Frontend bundler with hot module replacement
- **esbuild:** Fast JavaScript/TypeScript bundler for backend
- **Drizzle Kit:** Database migration and schema management
- **TanStack Query:** Data fetching and caching layer
- **Wouter:** Lightweight routing without React Router overhead

### Content Delivery

- **Google Fonts CDN:** Inter font family delivery
- **Local Assets:** Generated images stored in `attached_assets/generated_images/`

### Deployment Considerations

- **Replit Integration:** Custom plugins for runtime error overlay, cartographer debugging, and dev banner
- **Health Monitoring:** `/health` endpoint returns JSON status for uptime checks
- **Static Asset Serving:** Production builds serve from `dist/public` with Express static middleware