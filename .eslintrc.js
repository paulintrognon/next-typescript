module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  settings: { react: { version: 'detect' } },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier/@typescript-eslint', // Prettier plugin
    'plugin:prettier/recommended', // Prettier recommended rules
  ],
  rules: {
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      {
        allowExpressions: true,
        allowConciseArrowFunctionExpressionsStartingWithVoid: true,
      },
    ],
    // Includes .prettierrc.js rules
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
  },
}
