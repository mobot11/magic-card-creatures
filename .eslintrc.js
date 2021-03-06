module.exports = {
    extends: 'airbnb',
    rules: {
        indent: [1, 4],
        "react/jsx-filename-extension": [0, { "extensions": [".js", ".jsx"] }],
        "react/jsx-indent": [0, { "extensions": [".js", ".jsx"] }],
        "react/jsx-indent-props": [0, { "extensions": [".js", ".jsx"] }],
        "react/jsx-no-bind": [0]
    },
    "env": {
        "jest": true
    },
    "parser": "babel-eslint",
};
