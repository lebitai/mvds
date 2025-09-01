# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

**Development**
- `npm run dev` or `pnpm dev` - Start development server with Vite
- `npm run build` or `pnpm build` - Build for production (runs TypeScript compilation + Vite build)
- `npm run preview` or `pnpm preview` - Preview production build locally
- `npm run lint` or `pnpm lint` - Run ESLint for code quality checks

**Package Manager**
- This project uses `pnpm` as the preferred package manager (see `pnpm-lock.yaml`)
- Use `pnpm install` to install dependencies

## Architecture Overview

This is **Lebit MVDS** (Minimum Viable Design System) - a React + TypeScript design system starter built with Vite, Tailwind CSS, and Framer Motion.

### Design Token System
- **CSS Variables**: All design tokens are defined in `src/styles/tokens.css` with CSS custom properties
- **Tailwind Integration**: Tailwind config extends with token mappings for consistent usage
- **Theme Support**: Light/dark theme switching via `data-theme` attribute on `<html>`
- **Token Categories**: Brand colors, grays, semantic colors, spacing, border radius, motion timing, and focus states

### Component Architecture
- **Location**: UI components in `src/components/ui/`
- **Pattern**: All components use React.forwardRef for proper ref forwarding
- **Styling**: Tailwind classes with design token CSS variables
- **Variants**: Size and variant props following consistent patterns
- **Utilities**: `cn()` helper function in `src/lib/cn.ts` for className concatenation

### Key Components
- **Button**: Primary, secondary, ghost, destructive variants with sm/md/lg sizes
- **Form Controls**: Input, Textarea, Checkbox, Radio, Switch - all following consistent focus and border styling
- **Overlays**: Dialog (with Framer Motion animations), Toast notifications
- **Motion**: Framer Motion integrated for dialog animations and transitions

### Styling Philosophy
- **Middle Radius**: 8px border radius as the standard (`--radius-md`)
- **1.5px Outline**: Consistent border width (`--border-width: 1.5px`)
- **Motion Timing**: Fast (120ms), Medium (200ms), Slow (320ms) with cubic-bezier easing
- **Focus States**: 2px outline with brand-based focus color
- **CSS Variables**: All values use CSS custom properties for theme consistency

### File Structure
```
src/
├── components/ui/     # Reusable UI components
├── lib/              # Utility functions (cn helper)
├── styles/           # CSS files (tokens, global styles)
├── App.tsx           # Demo/showcase page
└── main.tsx          # App entry point with ToastProvider
```

### Development Notes
- TypeScript strict mode enabled with comprehensive linting rules
- ESLint configured with React Hooks and React Refresh plugins
- Framer Motion used for dialog animations and micro-interactions
- Lucide React for consistent icon usage
- Toast system with context provider pattern