module.exports = {
  root: true,
  plugins: ['prettier'],
  extends: ['plugin:vue/vue3-recommended', 'airbnb-base', 'plugin:prettier/recommended'],
  env: {
    browser: true,
    es2021: true
  },
  parserOptions: {
    ecmaVersion: 12
  },
  rules: {
    'prettier/prettier': 'error'
  }
}
