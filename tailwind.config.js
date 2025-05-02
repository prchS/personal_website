module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    'bg-background', 'text-primary', 'text-secondary', 'text-accent', 'text-accent2', 'border-divider'
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        primary: '#f5f5f5',
        secondary: '#bbbbbb',
        accent: '#4fd1c5',
        accent2: '#5ac8fa',
        divider: 'rgba(245,245,245,0.08)',
      },
      fontFamily: {
        heading: ['Poppins', 'Montserrat', 'sans-serif'],
        body: ['Inter', 'Open Sans', 'Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}; 