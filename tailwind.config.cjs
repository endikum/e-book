module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#7C3AED",
                "secondary": "#A78BFA",
                "background-light": "#F9FAFB",
                "background-dark": "#111827",
                "surface": "#FFFFFF",
                "surface-dark": "#1F2937",
            },
            fontFamily: {
                "sans": ["Inter", "system-ui", "sans-serif"],
                "display": ["Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
            },
            borderRadius: {
                "DEFAULT": "0.75rem",
                "lg": "1rem",
                "xl": "1.5rem",
                "2xl": "2rem",
            },
            boxShadow: {
                "premium": "0 20px 40px -15px rgba(124, 58, 237, 0.1)",
                "card": "0 4px 20px -2px rgba(0, 0, 0, 0.05)",
            }
        },
    },
    plugins: [],
}
