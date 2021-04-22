import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { MyEvent } from './event';

describe('Event', () => {
    let page;
    const buttonSpy = jest.fn();
    beforeEach(async () => {
        page = await newSpecPage({
            components: [MyEvent],
            template: () => (<my-event
                onButtonClicked={(ev) => buttonSpy(ev)}
            ></my-event>)
        });
    });
    
    it('Should emit on click', async() => {
        let button = page.root.querySelector('button');
        button.click();
        await page.waitForChanges();
        expect(buttonSpy).toHaveBeenCalled();
        // [0][0] - first argument of the first call
        expect(buttonSpy.mock.calls[0][0].detail).toEqual('Yep!')
    });

    it('Should run method', async() => {
        let button = page.root.querySelector('button');
        expect(button.textContent).toEqual('Click Me!')
        let ret = await page.root.updateFace('New Click!');
        await page.waitForChanges();
        expect(ret).toEqual('NEW CLICK!');
        expect(button.textContent).toEqual('New Click!');
    });
});