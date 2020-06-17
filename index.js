'use strict';

const builtin = [
  './lib/legacy',
  './lib/rules/es6',
].map(require.resolve);

module.exports = {
  extends: builtin,
  rules: {
    indent: ['error', 4, { // 缩进
      SwitchCase: 1,
      }
    ],
    'linebreak-style': ['off', 'windows'], // 换行符风格 \r\n
  },
  env: {
    node: true, // Node.js全局变量和Node.js作用域
    es6: true
  },
  parserOptions: {
    ecmaVersion: 8, //ECMAScript语法的版本
    sourceType: 'module',
  },
  "eqeqeq": [
    2,
    "allow-null"
],
"indent": [
    "error",
    4,
    {
        "SwitchCase": 1
    }
],
"no-class-assign": 2,
"newline-per-chained-call": [
    "error",
    {
        "ignoreChainWithDepth": 5
    }
],
"array-bracket-spacing": [
    "error",
    "never"
],
"semi": [
    "error",
    "always"
],
"linebreak-style": [
    "error",
    "unix"
],
"no-unused-vars": [
    "warn",
    {
        "args": "none"
    }
],
"space-before-function-paren": [
    "error",
    {
        "anonymous": "ignore",
        "named": "never",
        "asyncArrow": "always"
    }
]
};
