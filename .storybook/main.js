const { mergeConfig } = require('vite');

const PATH_BASE = '/warcraft-3-ui/';

const changeBasePath = config => {
  config.output.publicPath = PATH_BASE
  return config
}

module.exports = {
  "stories": [
    `${__dirname}/../src/**/*.stories.mdx`,
    `${__dirname}/../src/**/*.stories.@(js|jsx|ts|tsx)`
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    'storybook-dark-mode'
  ],
  "framework": "@storybook/vue3",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true
  },

  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: { foo: 'bar' },
      },
    });
  },

  webpackFinal: changeBasePath,
  managerWebpack: changeBasePath,
}