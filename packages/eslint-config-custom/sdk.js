module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/recommended',
    'prettier'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    extraFileExtensions: ['.vue']
  },
  plugins: ['@typescript-eslint', 'vue'],
  rules: {
    'vue/no-deprecated-slot-attribute': 'off',
    'vue/no-deprecated-slot-scope-attribute': 'off',
    'vue/no-v-html': 'off'
  }
}; 