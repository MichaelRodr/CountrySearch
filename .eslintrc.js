module.exports = {
  env: {
    browser: true,
    es2021: true,
    test: 'jest',
  },
  extends: ['plugin:react/recommended', 'airbnb', 'eslint - config - prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
};
