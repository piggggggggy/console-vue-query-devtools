// eslint-config-custom 공통 설정
const baseConfig = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    // 공통 규칙
  }
};

// 각 워크스페이스별 설정
const extension = require('./extension.js');
const sdk = require('./sdk.js');

module.exports = baseConfig;
module.exports.baseConfig = baseConfig;
module.exports.extension = extension;
module.exports.sdk = sdk; 