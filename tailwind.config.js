/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "var(--brand-50)",
          100: "var(--brand-100)",
          200: "var(--brand-200)",
          300: "var(--brand-300)",
          400: "var(--brand-400)",
          500: "var(--brand-500)",
          600: "var(--brand-600)",
          700: "var(--brand-700)",
          800: "var(--brand-800)",
          900: "var(--brand-900)",
        },
        gray: {
          0: "var(--gray-0)",
          50: "var(--gray-50)",
          100: "var(--gray-100)",
          200: "var(--gray-200)",
          300: "var(--gray-300)",
          400: "var(--gray-400)",
          500: "var(--gray-500)",
          600: "var(--gray-600)",
          700: "var(--gray-700)",
          800: "var(--gray-800)",
          900: "var(--gray-900)",
        },
        success: "var(--success)",
        warning: "var(--warning)",
        danger: "var(--danger)",
        info: "var(--info)",
      },
      borderRadius: {
        sm: "4px",
        md: "8px", 
        lg: "12px",
        full: "999px",
      },
      spacing: {
        2: "8px",
        3: "12px", 
        4: "16px",
        5: "20px",
        6: "24px",
        8: "32px",
      },
      transitionTimingFunction: {
        standard: "var(--ease-standard)",
        emphatic: "var(--ease-emphatic)",
      },
      transitionDuration: {
        fast: "var(--dur-fast)",
        medium: "var(--dur-medium)", 
        slow: "var(--dur-slow)",
      },
      boxShadow: {
        lebit: "0 4px 16px rgba(2, 6, 23, 0.08)",
      },
    },
  },
  plugins: [],
};