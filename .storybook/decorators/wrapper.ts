/** @jsx h */
import { h } from '@stencil/core';
import { makeDecorator, MakeDecoratorResult } from '@storybook/addons';

const stencilClient = require("@stencil/core/internal/client");

export const withAppWrapper: MakeDecoratorResult = (storyFn, context) => {
  console.log(storyFn());
  console.log(context);
  stencilClient.renderVdom(
    {
      $ancestorComponent$: undefined,
      $flags$: 0,
      $modeName$: undefined,
      $cmpMeta$: {
        $flags$: 0,
        $tagName$: 'div',  
      },
      $hostElement$: context.canvasElement,
    },
    storyFn(context)
  );
  return context.canvasElement.children[0];
}
// makeDecorator({
//   name: 'withWrapper',
//   parameterName: 'appWrapper',
//   wrapper: (getStory, context) => {
//     return (
//       <div>
//         {getStory(context)}
//       </div>
//     );
//   }
// });
