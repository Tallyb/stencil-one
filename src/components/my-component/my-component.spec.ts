import { newSpecPage } from '@stencil/core/testing';

import { MyComponent } from './my-component';

it('override default values from attribute', async () => {
  const { root } = await newSpecPage({
    components: [MyComponent],
    html: `<my-component some-prop="value"></my-component>`,
  });

  expect(root).toEqualHtml(`
    <my-component first="value">
      value
    </my-component>
  `);

  expect(root.someProp).toBe('value');
});
