# Repository Guidelines

## Project Structure & Module Organization
The Vite app lives under `src/`. UI primitives reside in `src/components/ui`, shared helpers in `src/lib`, tokens and globals in `src/styles`, and media in `src/assets`. `src/main.tsx` boots the gallery defined by `src/App.tsx`. Build output lands in `dist/`, while the static files in `public/` pass through unchanged. Tooling configuration files (`vite.config.ts`, `tailwind.config.js`, `tsconfig*.json`, `eslint.config.js`) live at the root for quick auditing.

## Build, Test, and Development Commands
- `pnpm install` – install dependencies; prefer PNPM for lockfile parity.
- `pnpm dev` – run the playground with hot reload on http://localhost:5173.
- `pnpm lint` – execute ESLint across the repo; append `-- --fix` for safe autofixes.
- `pnpm build` – type-check with `tsc -b` and emit an optimized bundle to `dist/`.
- `pnpm preview` – serve the production bundle locally for final verification.

## Coding Style & Naming Conventions
ESLint enforces TypeScript, React hooks, and globals rules; keep code compatible by using 2-space indentation, single quotes, and the no-semicolon style already in `src/App.tsx`. Components should be PascalCase files exporting a matching component, with shared hooks or utilities in camelCase under `src/lib`. Favor Tailwind utility classes backed by the CSS variables in `src/styles/tokens.css` instead of hard-coded colors or spacing.

## Testing Guidelines
Automated tests are not yet wired, so every change must ship with manual QA notes covering the states exercised in `pnpm dev` or `pnpm preview`. New test suites should use Vitest plus React Testing Library, named `*.test.tsx`, and either colocated with the component or stored in `src/__tests__/`; focus on behavior and accessibility assertions.

## Commit & Pull Request Guidelines
Follow Conventional Commits (`feat:`, `fix:`, `docs:`) as illustrated by `feat: Complete Lebit MVDS - Minimum Viable Design System`, keeping subjects imperative and under 72 characters. Pull requests should summarize intent, link any tracking issues, and include screenshots or short clips for UI updates. Run `pnpm lint` and `pnpm build` before requesting review and call out theming or token changes explicitly so reviewers can double-check downstream impact.

## Design Tokens & Theming
All tokens live in `src/styles/tokens.css` and are surfaced through `tailwind.config.js`. Update variables there first, then adjust components to consume the new token names; never introduce raw color values without adding a corresponding token and documenting the addition in your PR.
