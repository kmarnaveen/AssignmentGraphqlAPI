const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./src/*/.js'],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Roboto', ...defaultTheme.fontFamily.sans],
                merriweather: ['Merriweather', 'serif'],
            },
            fontSize: {
                baseHalf: '0.5rem',
            },
        },
    },
    variants: {
        extend: {
            opacity: ['disabled'],
        },
    },
    plugins: [require('@tailwindcss/forms')],
}