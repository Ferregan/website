/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        fontFamily: {
            sans: ["Satoshi-Variable", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"]
        },
        colors: {
            transparent: "rgba(0, 0, 0, 0)",
            white: "rgb(255, 255, 255)",
            black: "rgb(28, 28, 28)",
            yellow: "rgb(255, 224, 35)",
        },
        extend: {},
    },
    plugins: [],
}
