import {newSpecPage} from '@stencil/core/testing';

import {MyInput} from './input';

describe('MyInput', () => {
   
  it('Should emit thisHappened when input entered', async() => {
    const TEST_VALUE = 'Test Value'
    const page = await newSpecPage({
      components: [ MyInput ],
      html: `<my-input ></my-input>`
    });
    let inputSpy = jest.fn();
    page.doc.addEventListener('thisHappened', inputSpy);
    let inputField = page.root.shadowRoot.querySelector('input');
    inputField.value = TEST_VALUE;
    await inputField.dispatchEvent(new Event('input'));
    await page.waitForChanges();
    expect(inputSpy).toHaveBeenCalled();
    let ev = inputSpy.mock.calls[inputSpy.mock.calls.length - 1][0].detail;
    expect(ev).toBe(TEST_VALUE);
  });
  
});

