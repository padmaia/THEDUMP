module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**',
    '!src/**/*.spec.*',
    '!**/dev.*',
    '!src/client/index.jsx',
  ],
};
