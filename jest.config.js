const path = require('path');

const rootDir = '@stencil/core';
const distDir = path.join(rootDir, 'dist');
// const testingDir = path.join(rootDir, 'testing');

const config = {
  preset: '@stencil/core/testing',
  //setupFiles: ['<rootDir>/src/setupJest.ts']
}
module.exports = config;
