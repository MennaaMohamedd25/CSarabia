/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors:{
        main: 'var(--color-main)',
        primary: 'var(--color-primary)',
        secondery: 'var(--color-secondery)',
        vanish: 'var(--color-vanish)',
        span: 'var(--color-span)',
        base: 'var(--color-base)',
        ts: 'var(--color-ts)',
      },
      screens: {
        xs: '480px',  // Add custom xs breakpoint at 480px
      },
      
    },
  },
  plugins: [],
}

