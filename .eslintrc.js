module.exports = {
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2022,
    "sourceType": "module",
    "ecmaFeatures": {
      // Allows for the parsing of JSX
      "jsx": true
    }
  },
  "plugins": ["unused-imports"],
  // "rules": {
  //   "unused-imports/no-unused-imports": "error",
  // }
  "rules": {
    "unused-imports/no-unused-imports": "error",
  }
}