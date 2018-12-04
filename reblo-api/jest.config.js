module.exports = {
  coverageDirectory: '../coverage',
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  rootDir: 'src',
  transform: { '^.+\\.(t|j)s$': 'ts-jest' },
  // testMatch: ['**/__tests__/**(.spec?|.test?).(js|jsx|ts|tsx)'],
  testRegex: '.spec.ts$',
  testEnvironment: 'node',
};
