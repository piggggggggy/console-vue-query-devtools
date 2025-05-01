const baseConfig = {
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier'
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    rules: {}
  };
  
const extension = require('./extension.js');
//   const sdk = require('./sdk.js');
  
module.exports = baseConfig;
module.exports.baseConfig = baseConfig;
module.exports.extension = extension;
//   module.exports.sdk = sdk; 