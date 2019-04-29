const path = require('path');

// const rootDir = '@stencil/core';
// const distDir = path.join(rootDir, 'dist');
// const testingDir = path.join(rootDir, 'testing');
const config = {
  preset: '@stencil/core/testing',
//   testRegex: 'design-system/stencil/src/.*\\.spec\\.(ts|tsx)$',
//   transformIgnorePatterns: ['<rootDir>/node_modules/'],
//   moduleFileExtensions: [
//     'ts',
//     'tsx',
//     'js',
//     'jsx',
//     'json'
//   ],
//   testEnvironment: path.join(testingDir, 'jest-environment.js'),
//   setupFilesAfterEnv: [path.join(testingDir, 'jest-setuptestframework.js')],

//   testPathIgnorePatterns: [
//     '/.stencil',
//     '/dist',
//     '/node_modules',
//     '/www',
//     '/.vscode',
//   ],
//   collectCoverageFrom: [
//     '<rootDir>/design-system/stencil/src/**.tsx',
//     '!**/node_modules/**'
//   ],
//   transform: {
//     '^.+\\.js$': 'babel-jest',
//     '^.+\\.(ts|tsx)$': path.join(testingDir, 'jest-preprocessor.js')
//   },
//   transformIgnorePatterns: [
//     '<rootDir>/node_modules'
//   ],

//   moduleNameMapper: {
//     "@stencil/core/build-conditionals": path.join(distDir, 'testing', 'build-conditionals'),
//     "@stencil/core/internal": path.join(rootDir, 'internal'),
//     "@stencil/core/mock-doc": path.join(distDir, 'testing', 'mock-doc'),
//     "@stencil/core/platform": path.join(distDir, 'testing', 'platform'),
//     "@stencil/core/sys": path.join(distDir, 'sys', 'node'),
//     "@stencil/core/testing": path.join(distDir, 'testing'),
//     "@stencil/core/utils": path.join(distDir, 'utils'),
//     "@stencil/core": path.join(distDir, 'testing', 'core')
//   },
  // setupTestFrameworkScriptFile: path.join(testingDir, 'jest-setuptestframework.js'),
  // testEnvironment: path.join(testingDir, 'jest-environment.js'),
  // testPathIgnorePatterns: [
  //   '/.stencil',
  //   '/.vscode',
  //   '/dist',
  //   '/node_modules',
  //   '/www'
  // ],
  // testRegex: '(/__tests__/.*|\\.(test|spec))\\.(tsx?|ts?|jsx?|js?)$',
  // transform: {
  //   '^.+\\.(ts|tsx|jsx)$': path.join(testingDir, 'jest-preprocessor.js')
  // },
  
  modulePathIgnorePatterns: [
    '<rootDir>/yooschematics/',
    '<rootDir>/build/',
    '<rootDir>/builds/',
    '<rootDir>/services/',
    '<rootDir>/i18n/',
    '<rootDir>/bin/',
    '<rootDir>/assets/'
  ]
};
module.exports = config;
