module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**',
    '!src/**/*.spec.*',
    '!**/dev.*',
    '!src/client/index.jsx',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
