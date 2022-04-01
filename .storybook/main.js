module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',

  ],
  core: {
    builder: 'webpack5'
  },
  webpackFinal: async (config, { configType }) => {
    config.module.rules.shift();
    config.module.rules = [
      {
        test: /\.(mjs|tsx?|jsx?)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
        options: {configFile: 'tsconfig.sb.json'}
      },
      ...config.module.rules
    ];
    console.log(config.module.rules);
    return config;
  }
}