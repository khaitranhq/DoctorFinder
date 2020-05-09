module.exports = {
    "extends": [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:cypress"
    ],
    "env": {
      "browser": true,
      "node": true,
      "cypress/globals": true
    },
    "rules": {
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off"
    },
    "globals": {
      "React": "writable"
    },
    "parser": "babel-eslint"
  }
  