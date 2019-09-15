module.exports = {
  extends: ['react-tools', 'airbnb', 'prettier'],
  plugins: ['cypress', 'prettier'],
  env: {
    'cypress/globals': true
  },
  rules: {
    "prettier/prettier": "error",
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to']
      }
    ],
    'react/jsx-curly-brace-presence': 0,
    'no-restricted-globals': 0,
    indent: ['error', 2],
    quotes: ["error", "backtick"],
    'import/no-extraneous-dependencies': 0,
    'react/prop-types': 2,
    'react/forbid-prop-types': 0,
    'react/require-default-props': 0,
    'react/jsx-filename-extension': 0,
    'class-methods-use-this': 0,
    'global-require': 0
  }
};
