/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest';

const config: Config = {
  testEnvironment: 'jest-fixed-jsdom',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  "moduleNameMapper": {
    "\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/style-mock.js",
  }
};

export default config;
