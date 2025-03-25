/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        animation: {
          'spin-slow': 'spin 8s linear infinite',
          'spin-slow-reverse': 'spin 6s linear infinite reverse',
          'spin-slower': 'spin 10s linear infinite',
          'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          'blob': 'blob 7s infinite',
          'float': 'float 3s ease-in-out infinite',
          'float-delayed': 'float 3s ease-in-out 1s infinite',
          'float-slow': 'float 4s ease-in-out 2s infinite',
          'text': 'text 5s ease infinite',
          'text-slow': 'text 5s ease 0.5s infinite',
          'bounce': 'bounce 2s infinite',
          'fade-in': 'fadeIn 1s ease-out forwards',
        },
        keyframes: {
          spin: {
            from: {
              transform: 'rotate(0deg)',
            },
            to: {
              transform: 'rotate(360deg)',
            },
          },
          pulse: {
            '0%, 100%': {
              opacity: 1,
            },
            '50%': {
              opacity: .5,
            },
          },
          blob: {
            '0%': {
              transform: 'translate(0px, 0px) scale(1)',
            },
            '33%': {
              transform: 'translate(30px, -50px) scale(1.1)',
            },
            '66%': {
              transform: 'translate(-20px, 20px) scale(0.9)',
            },
            '100%': {
              transform: 'translate(0px, 0px) scale(1)',
            },
          },
          float: {
            '0%, 100%': {
              transform: 'translateY(0)',
            },
            '50%': {
              transform: 'translateY(-20px)',
            },
          },
          text: {
            '0%, 100%': {
              'background-size': '200% 200%',
              'background-position': 'left center',
            },
            '50%': {
              'background-size': '200% 200%',
              'background-position': 'right center',
            },
          },
          bounce: {
            '0%, 100%': {
              transform: 'translateY(-25%)',
              animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
            },
            '50%': {
              transform: 'translateY(0)',
              animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
            },
          },
          fadeIn: {
            '0%': { opacity: '0', transform: 'translateY(10px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
        },
        colors: {
          maroon: {
            300: '#fca5a5',
            400: '#f87171',
            500: '#800000',
            900: '#300000',
          },
        },
      },
    },
    plugins: [],
  };
  