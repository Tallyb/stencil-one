/* eslint-disable no-useless-escape */
import { newSpecPage } from '@stencil/core/testing';
import { h } from '@stencil/core';

const mockFormat = jest.fn(); // function name must start with mock (for hoisting)
jest.mock('../../utils', () => { //import here must be exactly the same as in the tested file
  return {
    format: mockFormat
  };
});
//component import must come after the mock! 
import { MyComponent } from './component';

describe('it should mock external file', () => {
  it('should format mock value', async () => {
    mockFormat.mockImplementation(() => 'Tally Barak');
    const { root } = await newSpecPage({
      components: [MyComponent],
      template: () => (
        <my-component first="Hello" last="World">Some Text</my-component>
      ),
      supportsShadowDom: true,
    });
    const span = root?.shadowRoot?.querySelector('span');
    expect(span?.textContent).toEqual('Hello, World! I\'m Tally Barak');
  });
});
