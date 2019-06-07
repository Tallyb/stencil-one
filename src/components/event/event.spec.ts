import { newSpecPage } from '@stencil/core/testing';
import { MyEvent } from './event';

describe('Event', () => {
    let page;
    beforeEach(async () => {
        page = await newSpecPage({
            components: [MyEvent],
            html: `<my-event></my-event>`
        });
    });
    
    it('Should emit on click', async() => {
        let button = page.root.querySelector('button');
        let buttonSpy = jest.fn();
        page.win.addEventListener('buttonClicked', buttonSpy);
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