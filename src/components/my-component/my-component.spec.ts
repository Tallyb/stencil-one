import {newSpecPage} from '@stencil/core/testing';

import {MyComponent} from './my-component';

it('Should render', async() => {
  const {root, styles} = await newSpecPage({
    components: [MyComponent],
    html: `<my-component first="Hello" last="World"></my-component>`
  });

  expect(root).toEqualHtml(`
    <my-component class=\"hydrated\" first=\"Hello\" last=\"World\">
    <shadow-root>
      <div class=\"nice\">
        <span>
          Hello, World! I'm Hello World
        </span>
        <button>
          Click Me!
        </button>
      </div>
    </shadow-root>
  </my-component>
  `);

  let text = root._shadowRoot.querySelector('span');
  expect(text.textContent).toBe(`Hello, World! I'm Hello World`);
  expect(root.first).toEqual('Hello')
});

it('Should emit', async() => {
  const {root, win} = await newSpecPage({
    components: [MyComponent],
    html: `<my-component first="John" last="Doe"></my-component>`
  });
  let button = root._shadowRoot.querySelector('button');
  let buttonClicked = jest.fn();
  win.addEventListener('buttonClicked', buttonClicked);
  button.click();
  expect(buttonClicked).toHaveBeenCalled;
});

it('Should emit', async() => {
  const {root, win} = await newSpecPage({
    components: [MyComponent],
    html: `<my-component first="John" last="Doe"></my-component>`
  });
  let button = root._shadowRoot.querySelector('button');
  let buttonClicked = jest.fn();
  win.addEventListener('buttonClicked', buttonClicked);
  button.click();
  expect(buttonClicked).toHaveBeenCalled;
});
