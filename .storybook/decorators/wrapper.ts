import { makeDecorator, MakeDecoratorResult } from '@storybook/addons';

const stencilClient = require("@stencil/core/internal/client");

export const stencilWrapper: MakeDecoratorResult = (storyFn, context) => {
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
  return host;
}

