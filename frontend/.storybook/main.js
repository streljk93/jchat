const path = require('path');

module.exports = {
  "webpackFinal": async (config) => {

    // modules
    config.module.rules.push({
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
      ],
      include: path.resolve(__dirname, '../'),
    });
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            additionalData: `
              @import "${path.resolve(__dirname, '../src/styles/_variables.scss')}";
              @import "~normalize.css";
              @import "${path.resolve(__dirname, '../src/styles/fonts.css')}";
            `,
          }
        },
      ],
      include: path.resolve(__dirname, '../'),
    });

    // resolve
    config.resolve.alias['@'] = path.resolve(__dirname, '../src');

    return config;
  },
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ]
}
