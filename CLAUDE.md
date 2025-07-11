# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Turbopack (opens at http://localhost:3000)
- `npm run build` - Build production bundle with optimizations
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality checks

## Architecture Overview

This is a production-ready Next.js 15 portfolio website following App Router best practices and enterprise-level patterns.

### Core Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4 with CSS variables and optimization
- **Components**: shadcn/ui component library (New York style)
- **Theme**: next-themes with system preference detection
- **Icons**: Lucide React (optimized imports)
- **TypeScript**: Strict mode with comprehensive typing

### Project Structure (Optimized)

```
app/
├── constants/         # Application constants and configuration
│   ├── metadata.ts   # SEO metadata and Open Graph configuration
│   └── navigation.ts # Navigation items with types
├── lib/              # Utility functions and configurations
│   ├── fonts.ts     # Font optimization and loading
│   └── theme-script.ts # Theme hydration script
├── types/            # TypeScript type definitions
│   └── index.ts     # Shared interfaces and types
├── layout.tsx       # Root layout with performance optimizations
├── page.tsx         # Main page with Suspense boundaries
└── globals.css      # Optimized global styles with accessibility

components/
├── ui/              # shadcn/ui components
├── *Section.tsx     # Page sections with lazy loading
├── theme-provider.tsx # Theme context wrapper
└── ThemeToggle.tsx  # Accessible theme switcher with cycle mode

hooks/               # Custom React hooks
lib/                # Utility functions (legacy, being migrated to app/lib)
```

### Performance Optimizations

- **Suspense Boundaries**: Each section wrapped in Suspense for better loading
- **Font Optimization**: Preloaded fonts with display: swap
- **Image Optimization**: WebP/AVIF formats with responsive sizing
- **Bundle Optimization**: Optimized package imports for lucide-react
- **Security Headers**: Comprehensive security headers in next.config.ts

### Component Architecture

- **Typed Components**: All components use proper TypeScript interfaces
- **Error Boundaries**: Error handling with fallbacks
- **Accessibility**: ARIA labels, focus management, reduced motion support
- **Performance**: useCallback for event handlers, proper memoization

### Theme System

- **Triple Mode**: Light/Dark/System with visual indicators
- **Hydration Safe**: Prevents flash of incorrect theme
- **Accessible**: Proper ARIA labels and keyboard navigation
- **Persistent**: localStorage with system preference fallback

### SEO & Metadata

- **Dynamic Metadata**: Comprehensive Open Graph and Twitter cards
- **Structured Data**: Optimized for search engines
- **Performance**: Core Web Vitals optimized
- **Accessibility**: WCAG compliant with focus management

### Development Best Practices

- **Type Safety**: Comprehensive TypeScript coverage
- **Constants**: Centralized configuration and navigation items
- **Error Handling**: Try-catch blocks with meaningful fallbacks
- **Code Splitting**: Automatic route-based code splitting
- **Tree Shaking**: Optimized imports and unused code elimination

## Configuration Files

- `components.json` - shadcn/ui configuration with path aliases
- `tsconfig.json` - TypeScript strict configuration
- `next.config.ts` - Production-optimized Next.js configuration
- `tailwind.config.js` - Tailwind with dark mode and custom colors
- Path aliases: `@/*` maps to project root

## Theme Toggle Implementation

The ThemeToggle component now cycles through three states:

1. Light mode (Sun icon - yellow)
2. Dark mode (Moon icon - blue)
3. System mode (Monitor icon - gray)

This provides users maximum flexibility while maintaining accessibility standards.
