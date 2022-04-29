const config = {
  preset: '@stencil/core/testing',
  testRunner: 'jasmine2',
  collectCoverage: true,
  coverageReporters: ['json', 'html', 'text'],
};
module.exports = config;
