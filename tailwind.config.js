export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#f5f3f0',
          100: '#e6d8c9',
          200: '#d4bca2',
          300: '#c2a07b',
          400: '#b08455',
          500: '#9e6830',
          600: '#8a5626',
          700: '#76451c',
          800: '#623512',
          900: '#4e2508'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'system-ui', 'sans-serif']
      },
      backgroundImage: {
        'coffee-gradient': 'linear-gradient(135deg, #9e6830 0%, #4e2508 100%)'
      }
    }
  },
  plugins: []
}