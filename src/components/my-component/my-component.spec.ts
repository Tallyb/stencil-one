import {newSpecPage} from '@stencil/core/testing';

import {MyComponent} from './my-component';

it('override default values from attribute', async() => {
  const {root} = await newSpecPage({
    components: [MyComponent],
    html: `<my-component first="Hello" last="World"></my-component>`
  });

  expect(root).toEqualHtml(`
  <my-component class="hydrated" first="Hello" last="World">
    <shadow-root>
      <div>
      Hello, World! I'm Hello World
      </div>
    </shadow-root>
  </my-component>`);

  expect(root.first).toBe('Hello');
});
