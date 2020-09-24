module.exports = {
  roots: ['<rootDir>/packages'],
  testMatch: null,
  testRegex: '(.+)\\.test\\.(j|t)sx?$',
  testPathIgnorePatterns: ['node_modules', 'tpls', 'fixtures'],
  modulePathIgnorePatterns: ['tpls', 'fixtures'],
  watchPathIgnorePatterns: ['fixtures'],
  // moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
