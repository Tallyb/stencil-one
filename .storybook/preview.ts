
import { addDecorator } from '@storybook/html';

import {defineCustomElements} from '../dist/loader';

const stencilClient = require("@stencil/core/internal/client");

defineCustomElements(window);

const stencilWrapper = (storyFn, context) => {
  const host = document.createElement('div');
  stencilClient.renderVdom(
    {
      $ancestorComponent$: undefined,
      $flags$: 0,
      $modeName$: undefined,
      $cmpMeta$: {
        $flags$: 0,
        $tagName$: 'div',  
      },
      $hostElement$: host,
    },
    storyFn(context)
  );
  return host.children[0];
}

addDecorator(stencilWrapper);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}