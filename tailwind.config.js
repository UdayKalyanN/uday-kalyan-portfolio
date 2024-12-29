// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: {
          dark: '#1a1a1a',
          DEFAULT: '#232323',
          darker: '#141414',
          light: '#2d2d2d'
        },
        accent: {
          peach: '#ffd7ba',
          DEFAULT: '#ffb799',
          light: '#FFD7BA',
          dark: '#FF9776'
        },
        surface: {
          DEFAULT: '#232323',
          hover: '#2A2A2A'
        },
        text: {
          primary: '#ffffff',
          secondary: '#b3b3b3',
          muted: '#808080'
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': 'linear-gradient(to bottom right, #1a1a1a, #2d2d2d)'
      },
      fontFamily: {
        'lucida': ['"Lucida Sans"', '"Lucida Grande"', '"Lucida Sans Unicode"', 'sans-serif'],
        'mono': ['"Lucida Console"', 'Monaco', 'monospace'],
        'dancing': ['Dancing Script', 'cursive']
      }
    }
  }
}