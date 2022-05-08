import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';

import { MySlotComponent } from './slot';
import { MyComponent } from '../component/component';

describe('complex prop', () => {
  it('should render', async () => {
    const page = await newSpecPage({
      components: [MySlotComponent, MyComponent],
      template: () => (
        <my-slot>
          <my-component first={'Julia'} last={'Roberts'}></my-component>
        </my-slot>
      ),
    });
    expect(page.root).toMatchSnapshot();
  });
});
