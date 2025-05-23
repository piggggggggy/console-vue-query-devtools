module.exports = {
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:vue/vue3-recommended',
      'plugin:prettier/recommended',
      'prettier'
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
      parser: '@typescript-eslint/parser',
      ecmaVersion: 2020,
      sourceType: 'module',
      extraFileExtensions: ['.vue']
    },
    plugins: ['@typescript-eslint', 'vue', 'prettier'],
    rules: {
      'vue/script-setup-uses-vars': 'error',
      'semi': ['error', 'always'],
      'quotes': ['error', 'single'],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      'no-trailing-spaces': 'error',
      'no-multi-spaces': 'error',
      'prettier/prettier': 'error',
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-explicit-any': 'off'
    }
}; 