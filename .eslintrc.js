module.exports = {
  root: true,
  overrides: [
    {
      files: ["src/**/*.{js,jsx}"],
      extends: ["react-app"]
    },
    {
      files: ["tests/**/*.js"],
      env: {
        mocha: true,
        node: true,
        browser: true,
        es2021: true
      },
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module"
      },
      plugins: ["mocha"],
      extends: ["plugin:mocha/recommended"],
      rules: {
        "jest/valid-expect": "off",
        "no-undef": "off"
      }
    }
  ]
};
