module.exports = {
    testEnvironment: "node",
    testMatch: ["**/tests/**/*.test.js"],
    moduleFileExtensions: ["js"],
    coverageDirectory: "coverage",
    collectCoverageFrom: ["**/*.js", "!**/__tests__/**"],
  };
  