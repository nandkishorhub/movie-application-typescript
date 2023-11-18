module.exports = {
  roots: ["<rootDir>/src"],
  //   transform: {
  //     "^.+\\.tsx?$": "ts-jest",
  //   },
  setupFilesAfterEnv: [
    '<rootDir>/jest.env.js',
  ],
  transform: {
    "^.+\\.tsx?$": "@swc/jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  transformIgnorePatterns: ["<rootDir>/node_modules/(?!lodash-es)"],
  customExportConditions: [""],
};
