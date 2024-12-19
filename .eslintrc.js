module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['@sveltejs', '@typescript-eslint'],
  extends: ['plugin:@sveltejs/recommended', 'plugin:@typescript-eslint/recommended'],
  settings: {
    'svelte3/typescript': require('typescript'),
  },
  ignorePatterns: ['node_modules'],
};