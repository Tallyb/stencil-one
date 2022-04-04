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
    // '@storybook/addon-links',
    // '@storybook/addon-essentials',
    // '@storybook/addon-notes/register',
  ],
  core: {
    builder: 'webpack5'
  },

  webpackFinal: async (config, { configType }) => {
    // const tsxRule = config.module.rules.find(rule => 'a.tsx'.match(rule.test));
  
    // if(tsxRule) {
    //     const options = tsxRule.use[0].options;
    //     options.presets = options.presets || []; 
    //     // const presetIndex = options.presets.findIndex( p => p.includes('typescript'));
    //     // options.presets[presetIndex] = [ options.presets[presetIndex] , {isTSX: true, allExtensions: true, }];
    //     options.plugins = [
    //       'plugin-transform-react-jsx',
    //       ...options.plugins
    //     ];
    // }
    
    // Custom webpack config to tell Storybook where to find the compiled files from Stencil
      config.entry.push(path.join(__dirname, OUTPUT_DIR, `index.js`));
      fs.readdirSync(path.join(__dirname, OUTPUT_DIR, 'collection/components')).map(file => {
        const jsFilePath = path.join(__dirname, OUTPUT_DIR, `collection/components/${file}/${file}.js`);
        try {
          if (fs.existsSync(jsFilePath)) {
            config.entry.push(jsFilePath);
          }
        } catch (err) {
          console.error(err);
        }
  
        // Add CSS
        let cssFilePath = path.join(
          __dirname,
          OUTPUT_DIR,
          `collection/components/${file}/${file}.css`
        );
        try {
          if (fs.existsSync(cssFilePath)) {
            config.entry.push(cssFilePath);
          }
        } catch (err) {
          console.error(err);
        }
      });
  
      // // Add all static files to Storybook
      // config.plugins.push(
      //   new CopyPlugin([
      //     {
      //       from: '**/*',
      //       to: './',
      //       context: 'dist',
      //     },
      //   ])
      // );
  
      // Write the files to disk and not to memory
      config.plugins.push(new WriteFilePlugin());
    return config;
  }
}