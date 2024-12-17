module.exports = {
  darkMode: ["class"],
  content: [
    "'./pages/**/*.{ts,tsx}'",
    "'./components/**/*.{ts,tsx}'",
    "'./app/**/*.{ts,tsx}'",
    "'./src/**/*.{ts,tsx}'",
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // New color palette
        shadowIsles: {
          100: "#E6FFF9",
          200: "#B3FFE6",
          300: "#80FFD9",
          400: "#4DFFCC",
          500: "#1AFFBF",
          600: "#00E6A8",
          700: "#00B386",
          800: "#008064",
          900: "#004D3D",
        },
        spectral: {
          100: "#E6E6FF",
          200: "#B3B3FF",
          300: "#8080FF",
          400: "#4D4DFF",
          500: "#1A1AFF",
          600: "#0000E6",
          700: "#0000B3",
          800: "#000080",
          900: "#00004D",
        },
        void: {
          100: "#E6D8FF",
          200: "#C2A3FF",
          300: "#9E6EFF",
          400: "#7A39FF",
          500: "#5604FF",
          600: "#4500CC",
          700: "#340099",
          800: "#230066",
          900: "#110033",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

