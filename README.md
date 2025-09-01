# Lebit MVDS (Minimum Viable Design System)

A modern, code-first React design system starter built with TypeScript, Vite, and Tailwind CSS. Features a comprehensive design token system, reusable UI components, and consistent styling patterns.  

## PREVIEW as follows:   
<img width="1028" height="716" alt="Screenshot 2025-09-01 at 12 13 17" src="https://github.com/user-attachments/assets/14cf1401-5032-4918-8eec-939fbee149a5" />  


## ✨ Features

- 🎨 **Design Token System** - CSS variables for consistent theming
- 🌓 **Dark/Light Theme** - Built-in theme switching support
- 🧩 **UI Components** - 8+ production-ready components
- 📱 **Responsive** - Mobile-first responsive design
- ⚡ **Fast Development** - Vite for instant hot reload
- 🎭 **Animations** - Framer Motion for smooth interactions
- 🎯 **TypeScript** - Full type safety
- 🎪 **Icons** - Lucide React icon library

## 🚀 Quick Start

```bash
# Install dependencies (pnpm recommended)
pnpm install
# or npm install / yarn install

# Start development server
pnpm dev
# or npm run dev

# Build for production
pnpm build
# or npm run build
```

Open [http://localhost:5173](http://localhost:5173) to view the demo.

## 🏗️ Architecture

### Design Tokens
- **Middle Radius**: 8px standard border radius
- **1.5px Outline**: Consistent border width
- **Motion**: Fast (120ms), Medium (200ms), Slow (320ms) timing
- **CSS Variables**: All tokens defined in `src/styles/tokens.css`

### Components
- **Button** - Primary, secondary, ghost, destructive variants
- **Input/Textarea** - Form controls with consistent styling
- **Checkbox/Radio/Switch** - Selection components
- **Dialog** - Modal with Framer Motion animations  
- **Toast** - Notification system with context provider

### Tech Stack
- **React 19** + **TypeScript 5.8**
- **Vite 7** for build tooling
- **Tailwind CSS 3.4** for styling
- **Framer Motion 12** for animations
- **Lucide React** for icons
- **ESLint** for code quality

## 📁 Project Structure

```
src/
├── components/ui/     # Reusable UI components
├── lib/              # Utility functions
├── styles/           # CSS tokens and global styles  
├── App.tsx           # Demo showcase page
└── main.tsx          # Application entry point
```

## 🎨 Design Philosophy

This design system follows a **middle radius & 1.5px outline** approach with:

- Consistent 8px border radius across components
- 1.5px border width for definition without heaviness
- CSS variable-based theming for easy customization
- Motion-first approach with standardized timing functions
- Accessible focus states with brand-colored outlines

## 🏭 Production Usage

### Installation in Existing Projects

To use Lebit MVDS components in your production React project:

1. **Copy the core files** to your project:
   ```bash
   # Copy design tokens
   cp src/styles/tokens.css your-project/src/styles/
   
   # Copy utility functions
   cp src/lib/cn.ts your-project/src/lib/
   
   # Copy UI components (choose what you need)
   cp -r src/components/ui/ your-project/src/components/
   ```

2. **Install required dependencies**:
   ```bash
   npm install framer-motion lucide-react
   # or
   pnpm add framer-motion lucide-react
   ```

3. **Update your Tailwind config** to include the design tokens:
   ```javascript
   // tailwind.config.js
   module.exports = {
     content: ["./src/**/*.{js,ts,jsx,tsx}"],
     theme: {
       extend: {
         colors: {
           brand: {
             50: "var(--brand-50)",
             100: "var(--brand-100)",
             // ... copy from this project's tailwind.config.js
           },
           // ... other token mappings
         }
       }
     }
   }
   ```

4. **Import tokens in your main CSS**:
   ```css
   /* src/index.css */
   @import "./styles/tokens.css";
   @tailwind base;
   @tailwind components; 
   @tailwind utilities;
   ```

### Customization

**Brand Colors**: Modify CSS variables in `tokens.css`:
```css
:root {
  --brand-500: #your-brand-color;
  --brand-600: #your-brand-hover;
  /* ... other brand variants */
}
```

**Component Variants**: Extend existing components by adding new variants in the `variantMap` objects.

**New Components**: Follow the established patterns:
- Use `React.forwardRef` for proper ref handling
- Implement size and variant props consistently
- Use the `cn()` utility for className merging
- Follow the design token system for spacing, colors, and timing

### Integration Examples

**With Next.js**:
```jsx
// app/layout.tsx
import './globals.css' // includes tokens.css
import { ToastProvider } from '@/components/ui/Toast'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ToastProvider>
          {children}
        </ToastProvider>
      </body>
    </html>
  )
}
```

**With Create React App**:
```jsx
// src/index.js
import './index.css' // includes tokens.css
import { ToastProvider } from './components/ui/Toast'

ReactDOM.render(
  <ToastProvider>
    <App />
  </ToastProvider>,
  document.getElementById('root')
)
```

## 📄 License

MIT
