module.exports = async () => {
  return {
    modulePathIgnorePatterns: ['lib', 'dist'],
    testPathIgnorePatterns: ['templates', 'fixtures'],
    watchPathIgnorePatterns: ['fixtures'],
  };
};
