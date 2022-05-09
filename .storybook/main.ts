const fs = require('fs');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

const OUTPUT_DIR = '../dist';
const PROJECT_NAME = 'stencil-one';

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

  // webpack: async (config) => {
  // },

  webpackFinal: async (config) => {
    const tsxRule = config.module.rules.find(rule => 'a.tsx'.match(rule.test));
  
    if(tsxRule) {
        const options = tsxRule.use[0].options;
        options.plugins = [
          ['@babel/plugin-transform-react-jsx', {
            prgama: 'h'
          }],
          ...options.plugins
        ];
    }
    return config;
  }
}