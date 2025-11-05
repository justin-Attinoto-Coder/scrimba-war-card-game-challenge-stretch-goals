module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5',
        secondary: '#3B82F6',
        accent: '#FBBF24',
      },
      backgroundImage: {
        'gradient-rainbow': 'linear-gradient(90deg, #FF5733, #FFBD33, #DBFF33, #75FF33, #33FF57, #33FFBD, #33DBFF, #3375FF, #335BFF, #5733FF, #BD33FF, #FF33DB, #FF335B)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in forwards',
        'fade-out': 'fadeOut 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};