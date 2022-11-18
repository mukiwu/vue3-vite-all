module.exports = {
  root: true,
  env: {
    node: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    '@vue/typescript/recommended',
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020
  },
  rules: {
    'vue/multi-word-component-names': ['error', {
      ignores: ['Login', 'Layout', 'Home', 'Setting']
    }]
    // 'semi': [2, 'never']
  }
}
