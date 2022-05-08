
import { addDecorator } from '@storybook/html';

import { withAppWrapper } from './decorators/wrapper';

import {defineCustomElements} from '../dist/loader';

defineCustomElements();

addDecorator(withAppWrapper);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}