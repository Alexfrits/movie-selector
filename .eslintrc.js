module.exports = {
  extends: 'eslint:recommended',
  env: {
    browser: true
  },
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      'experimentalObjectRestSpread': true
    }
  },
  rules: {
    indent: [
      1,
      2
    ],
    'linebreak-style': [
      1,
      'unix'
    ],
    'no-unused-vars': [
      1
    ],
    quotes: [
      1,
      'single',
      { allowTemplateLiterals: true }
    ],
    semi: [
      1,
      'always'
    ]
  }
};
