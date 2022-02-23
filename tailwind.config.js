module.exports = {
    content: ["./app/**/*.{ts,tsx,jsx,js}"],
    plugins: [require("@tailwindcss/typography"), require("daisyui")],
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    daisyui: {
        themes: ["synthwave"],
    },
}