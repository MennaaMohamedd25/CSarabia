module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  rules: {
    'no-unused-vars': process.env.CI ? ['warn'] : ['error'],
    'jsx-a11y/iframe-has-title': process.env.CI ? ['warn'] : ['error'],
  }
}
