module.exports = {
  purge: {
    enabled: true,
    content: [
      './**/*.html'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Nunito', 'sans-serif'],
      display: ['Nunito', 'sans-serif'],
      body: ['Nunito', 'sans-serif']
    },
    extend: {
      colors: {
        primary: '#EA755E',
        secondary: '#BD675F'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')
  ],
}
