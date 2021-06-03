module.exports = {
  displayName: "angular-learning",
  preset: "../jest.preset.js",
  setupFilesAfterEnv: ["<rootDir>/test-setup.ts"],
  resolver: "@nrwl/jest/plugins/resolver",
  globals: {
    "ts-jest": {
      stringifyContentPathRegex: "\\.(html|svg)$",
      tsconfig: "<rootDir>/tsconfig.spec.json",
    },
  },
  coverageDirectory: "../coverage/",
};
