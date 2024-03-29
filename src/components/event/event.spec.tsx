import {h} from '@stencil/core';
import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { MyEvent } from './event';

describe('Event', () => {
  let page: SpecPage;
  const buttonSpy = jest.fn();
  beforeEach(async () => {
    page = await newSpecPage({
      components: [MyEvent],
      template: () => <my-event
        onButtonClicked={(ev: any) => buttonSpy(ev)}
      ></my-event>
    })!;
  });
    
  it('Should emit on click', async() => {
    const button = page.root?.querySelector('button');
    button!.click();
    expect(buttonSpy).toHaveBeenCalled();
    // [0][0] - first argument of the first call
    expect(buttonSpy.mock.calls[0][0].detail).toEqual('I was clicked');
  });

});