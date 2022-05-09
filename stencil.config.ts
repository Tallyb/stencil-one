import { Config } from '@stencil/core';

export const config: Config = {
  sourceMap: !process.env.CI,
  namespace: 'stencil-one',
  outputTargets:[
    {
      type: 'dist',
    },
    { type: 'docs-readme' },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    },

  ]
};
