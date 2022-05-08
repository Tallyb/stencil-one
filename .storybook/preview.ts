
import { addDecorator } from '@storybook/html';

import { stencilWrapper } from './decorators/wrapper';

import {defineCustomElements} from '../dist/loader';

defineCustomElements();

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