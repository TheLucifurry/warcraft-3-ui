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
    'storybook-dark-mode'
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
    { from: '../src/assets', to: '/assets' },
  ],

  async viteFinal(config, { configType }) {
    if (configType === 'PRODUCTION') {
      config.base = PATH_BASE;
    }

    return mergeConfig(config, {
      define: {
        'ASSETS_PATH': `'./'`
      },
      optimizeDeps: {
        include: ['storybook-dark-mode'],
      },
    });
  },
}