# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Turbopack (opens at http://localhost:3000)
- `npm run build` - Build production bundle
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality checks

## Architecture Overview

This is a Next.js 15 portfolio website using the App Router architecture. Key architectural decisions:

### Core Stack
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4 with CSS variables for theming
- **Components**: shadcn/ui component library (New York style)
- **Theme**: next-themes for dark/light mode switching
- **Icons**: Lucide React
- **TypeScript**: Strict mode enabled

### Project Structure
```
app/                    # Next.js App Router pages
├── layout.tsx         # Root layout with theme provider
├── page.tsx           # Main landing page
└── globals.css        # Global styles and Tailwind

components/            # Reusable React components
├── ui/               # shadcn/ui components (Button, Card, etc.)
├── *Section.tsx      # Page sections (Hero, About, Services, etc.)
├── theme-provider.tsx # Theme context wrapper
└── ThemeToggle.tsx   # Dark/light mode toggle

hooks/                # Custom React hooks
lib/                  # Utility functions
```

### Component Architecture
- **Page Composition**: Single-page application composed of section components
- **Section Pattern**: Each major page section is a separate component (*Section.tsx)
- **Theme Integration**: All components support dark/light themes via CSS variables
- **Component Library**: Uses shadcn/ui for consistent, accessible components

### Styling System
- **Tailwind v4**: Latest version with enhanced features
- **CSS Variables**: Theme colors defined as CSS custom properties
- **Dark Mode**: Class-based theme switching with system preference detection
- **Typography**: Geist Sans and Geist Mono fonts from Google Fonts

### Key Features
- Responsive design optimized for all devices
- Client-side theme persistence with SSR hydration handling
- French language content for Alexandre Petitjean's portfolio
- Animated counters and interactive elements

## Configuration Files
- `components.json` - shadcn/ui configuration with path aliases
- `tsconfig.json` - TypeScript configuration with strict settings
- `next.config.ts` - Next.js configuration (minimal setup)
- Path aliases configured: `@/*` maps to project root