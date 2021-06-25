import {newSpecPage} from '@stencil/core/testing';

import {MyInput} from './input';

describe('MyInput', () => {

  it('Should emit thisHappened when input entered', async() => {
    const TEST_VALUE = 'Test Value';
    const page = await newSpecPage({
      components: [ MyInput ],
      html: '<my-input ></my-input>'
    });
    const inputSpy = jest.fn();
    page.doc.addEventListener('thisHappened', inputSpy);
    const inputField = page.root.querySelector('input');
    inputField.value = TEST_VALUE;
    await inputField.dispatchEvent(new Event('input'));
    // await page.waitForChanges();
    expect(inputSpy).toHaveBeenCalled();

    const ev = inputSpy.mock.calls[inputSpy.mock.calls.length - 1][0].detail;
    expect(ev).toBe(TEST_VALUE);
  });
  
});

