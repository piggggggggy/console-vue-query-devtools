/* eslint-env node */
var sdkConfig = require('./packages/eslint-config-custom/sdk.js');
var extensionConfig = require('./packages/eslint-config-custom/extension.js');

// SDK와 Extension에 대한 오버라이드 설정
var sdkOverride = {
  files: ['packages/sdk/**/*.{js,ts,vue}']
};
Object.assign(sdkOverride, sdkConfig);

var extensionOverride = {
  files: ['packages/extension/**/*.{js,ts,vue}']
};
Object.assign(extensionOverride, extensionConfig);

module.exports = {
  root: true,
  // 모든 패키지에서 공통으로 사용할 수 있는 기본 설정
  extends: ['eslint:recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 2018
  },
  overrides: [
    // Vue 2.7 (SDK) 파일에 대한 설정
    sdkOverride,
    // Vue 3 (Extension) 파일에 대한 설정
    extensionOverride
  ]
}; 