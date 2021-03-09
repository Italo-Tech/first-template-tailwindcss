const purgecss = require('@fullhuman/postcss-purgecss')({
    content: [
        'src/*.html'
    ],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})

module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {},
    plugins: [
        require('tailwindcss'),
        purgecss,
        require('cssnano'),
        require('autoprefixer')
    ]
}
