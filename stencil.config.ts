import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'myspace',
  outputTargets:[
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },    { type: 'docs-readme' },
    {
      type: 'www',
      baseUrl: 'https://localhost:3000',
      serviceWorker: null // disable service workers
    },

  ]
};
