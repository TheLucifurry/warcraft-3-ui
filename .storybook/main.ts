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
  "staticDirs": ['../src/assets'],

  async viteFinal(config, { configType }) {
    // if (configType === 'DEVELOPMENT') {}
    if (configType === 'PRODUCTION') {
      config.base = PATH_BASE;
    }
    debugger

    return mergeConfig(config, {
      // resolve: {
      //   alias: {
      //     '/assets/': PATH_BASE
      //   },
      // },
      publicDir: PATH_BASE,
      optimizeDeps: {
        include: ['storybook-dark-mode'],
      },
    });
  },
}