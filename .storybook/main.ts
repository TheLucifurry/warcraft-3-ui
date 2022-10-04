const { mergeConfig } = require('vite');

const PATH_BASE = '/warcraft-3-ui/';

module.exports = {
  "stories": [
    `${__dirname}/../src/**/*.stories.mdx`,
    `${__dirname}/../src/**/*.stories.@(js|jsx|ts|tsx)`
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    'storybook-dark-mode',
    'storybook-addon-turbo-build'
  ],
  "framework": "@storybook/vue3",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true
  },
  "staticDirs": [
    '../src/assets',
    { from: '../src/assets', to: '/assets-lib' },
  ],

  async viteFinal(config, { configType }) {
    if (configType === 'DEVELOPMENT') {
      config.define['ASSETS_PATH'] = `'./'`;
    }
    if (configType === 'PRODUCTION') {
      config.base = PATH_BASE;
      config.define['ASSETS_PATH'] = `'./assets-lib/'`;
    }

    return mergeConfig(config, {
      optimizeDeps: {
        include: ['storybook-dark-mode'],
      },
    });
  },
}