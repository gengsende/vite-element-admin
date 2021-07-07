module.exports = {
  root: true,
  extends: '@youngjuning/airbnb',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['off'],
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
}
