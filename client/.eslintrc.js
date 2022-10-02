module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint/eslint-plugin",
    "react",
    "react-hooks",
    "unused-imports",
    "jest",
    "jest-dom",
    "testing-library",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  ignorePatterns: [".eslintrc.js"],
  rules: {
    "no-duplicate-case": "error",
    "unused-imports/no-unused-imports": "error",
    "@typescript-eslint/no-use-before-define": "warn",
    "no-use-before-define": "off",
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "_" }],
    "@typescript-eslint/no-unused-expressions": "error",
    "no-unused-expressions": "off",
    "@typescript-eslint/array-type": ["error", { default: "array-simple" }],
  },
};
