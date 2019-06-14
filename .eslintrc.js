module.exports = {
  extends: ['react-app', 'plugin:react/recommended'],
  plugins: ['react-hooks'],
  root: true,
  env: {
    browser: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
      jsx: true
    }
  },
  rules: {
    'react/prop-types': 0,
    'react/no-direct-mutation-state': 'error',
    'react/no-typos': 'warn',
    'react/no-unused-state': 'error',
    'react/no-will-update-set-state': 'error',
    'react/void-dom-elements-no-children': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  }
};
