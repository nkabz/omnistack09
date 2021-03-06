module.exports = {
  extends: [
      'eslint:recommended',
      'plugin:react/recommended'
  ],
  parser: 'babel-eslint',
  parserOptions: {
      parser: 'babel-eslint',
      ecmaVersion: 2017,
      sourceType: 'module',
      allowImportExportEverywhere: true
  },
  settings: {
      "react": {
          version: "detect",
      }
  },
  env: {
      amd: true,
      browser: true,
  },
  rules: {
      'indent': ['error', 4, { 'SwitchCase': 1, 'MemberExpression': 1 }],
      'no-trailing-spaces': 'error',
      'no-console': process.env.NODE_ENV === 'production' ? [
          'error',
          { 'allow': ['warn', 'error'] },
      ] : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-fallthrough': 'off',
      'no-case-declarations': 'off',
      'space-before-function-paren': 'error',
      'spaced-comment': 'error',
      'arrow-spacing': 'error',
      'keyword-spacing': 'error',
      'semi': ['error', 'always'],
      'dot-location': ['error', 'property'],
      'dot-notation': 'error',
      'no-alert': 'off',
      'eqeqeq': ['error', 'always'],
      'no-floating-decimal': 'error',
      'no-global-assign': 'error',
      'no-multi-spaces': 'error',
      'no-useless-return': 'error',
      'no-undef-init': 'warn',
      'no-use-before-define': ['error', { 'functions': false }],
      'array-bracket-newline': ['error', 'consistent'],
      'brace-style': ['error', '1tbs'],
      'comma-dangle': ['error', 'always-multiline'],
      'comma-spacing': 'error',
      'comma-style': 'error',
      'eol-last': 'error',
      'func-call-spacing': 'error',
      'jsx-quotes': ['error', 'prefer-double'],
      'quotes': ['error', 'single', { 'allowTemplateLiterals': true }],
      'quote-props': ['error', 'as-needed'],
      'linebreak-style': 'warn',
      'lines-around-comment': 'warn',
      'max-depth': ['error', 3],
      'max-statements-per-line': 'error',
      'newline-per-chained-call': 'error',
      'no-lonely-if': 'error',
      'no-mixed-operators': 'warn',
      'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 0, 'maxBOF': 0 }],
      'no-tabs': 'warn',
      'space-before-blocks': 'error',
      'space-infix-ops': 'error',
      'space-unary-ops': [2, {
          'words': true,
          'nonwords': true,
          'overrides': {
              '-': false,
              '++': false,
              '--': false,
          },
      }],
      'space-in-parens': 'error',
      'switch-colon-spacing': 'error',
      'arrow-body-style': 'error',
      'no-duplicate-imports': 'warn',
      'no-useless-computed-key': 'warn',
      'no-var': 'error',
      'arrow-parens': ['error', 'as-needed'],
      'curly': 'error',
      'require-atomic-updates': 'off',
      'no-prototype-builtins': 'off',
      "react/prop-types": 0,
  },
};
