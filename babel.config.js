module.exports = {
  "presets": [
    [
      "@babel/preset-env",
      {
        "modules": false
      },
    ],
    "@babel/preset-react"
  ],
  "plugins": [
    "babel-plugin-styled-components",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-transform-modules-commonjs",
    "@babel/plugin-proposal-export-default-from",
    "@babel/plugin-proposal-export-namespace-from",
  ],
  "env": {
    "development": {
      "plugins": [
        [
          "babel-plugin-styled-components",
          {
            "displayName": true,
          }
        ]
      ]
    }
  }
};
