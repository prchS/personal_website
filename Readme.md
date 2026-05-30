# Suhaas Portfolio

Github contains personal website, built with Next.js and deployed on Vercel. The site is a single-page experience with animated sections, a project portfolio, and a contact form backed by a server route.

## Features

- Hero section with typewriter text and a call-to-action button
- About, skills, portfolio, contact, and footer sections
- Sticky navigation with a mobile menu
- Animated section reveals powered by Framer Motion
- Particle background rendered across the app
- Portfolio filters for browsing projects by category
- Contact form that sends messages through a server-side Gmail SMTP route
- Vercel Analytics integration

## Tech Stack

- Next.js App Router
- TypeScript
- React
- Tailwind CSS
- Framer Motion
- tsParticles
- Lucide React icons
- react-simple-typewriter
- Nodemailer
- Vercel Analytics

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm
- A Gmail account if you want the contact form to send email

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
```

### Start the production server

```bash
npm run start
```

### Lint the project

```bash
npm run lint
```

## Environment Variables

The contact form uses Gmail SMTP from the server route at [src/app/api/contact/route.ts](src/app/api/contact/route.ts).

Create a `.env.local` file in the project root with:

```env
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASS=your-gmail-app-password
```

Notes:

- Use a Gmail App Password, not your regular Gmail password
- Enable 2-Step Verification on the Gmail account before generating the App Password
- Set the same variables in Vercel for production deployments

## Contact Form Behavior

The contact form validates name, email, and message before sending a POST request to `/api/contact`.

The server route:

- validates the incoming payload
- rate limits requests by IP and by email address
- sends the message to the configured Gmail inbox
- sets the sender as `replyTo` so replies can go directly to the user

Rate limiting is currently in-memory, so it resets when the server restarts.

## Project Structure

```text
src/
├── app/
│   ├── api/contact/route.ts    # Contact form API route
│   ├── layout.tsx              # Root layout and analytics
│   └── page.tsx                # Home page composition
└── components/
    ├── Header.tsx
    ├── HeroSection.tsx
    ├── AboutSection.tsx
    ├── SkillsSection.tsx
    ├── PortfolioSection.tsx
    ├── ContactSection.tsx
    ├── Footer.tsx
    └── ParticlesBackground.tsx
```

## Sections

- Home: hero with animated typewriter text
- About: short bio and background
- Skills: grouped technical skills grid
- Portfolio: filterable project showcase
- Contact: message form plus social links

