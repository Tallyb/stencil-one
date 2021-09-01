import {h} from '@stencil/core';
import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { MyCanvas } from './canvas';



describe('Event', () => {
  let page: SpecPage;


  // @ts-ignore no need to type safety here
  global.Image = class {
    constructor() {
      return {
        decode: jest.fn(),
        src: jest.fn()

      };
      // setTimeout(() => {
      // // @ts-ignore
      //   console.log('before on load')
      //   this.onload(); // simulate success
      //   console.log('after on load')
      // }, 100);
    }
  };

  beforeEach(async () => {
    page = await newSpecPage({
      components: [MyCanvas],
      template: () => <my-canvas src="https://stenciljs.com/assets/img/stenciljs-og.png"
      ></my-canvas>
    });
  });
    
  it('Should emit on click', async() => {
    const canvas = page!.root?.querySelector('canvas');
    expect(canvas).toBeTruthy();
  });

});