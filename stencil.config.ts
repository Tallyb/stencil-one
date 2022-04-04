import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-one',
  outputTargets:[
    {
      type: 'dist',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    { type: 'docs-readme' },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    },

  ]
};
