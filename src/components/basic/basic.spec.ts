import { newSpecPage } from "@stencil/core/testing";

import { MyBasic } from './basic';

describe('basic', () => {

    const html = `
    <my-basic first="Julia" last="Roberts">
        <p slot class="cool">Cool!</p>
    </my-basic>
    `;
    const components = [MyBasic];

    it('should render with shadow dom', async () => {
        const page = await newSpecPage({
            html,
            components
        });
        expect(page.root.shadowRoot).toBeTruthy();
        expect(page.root.querySelector('.nice')).toBeFalsy();
        expect(page.root.shadowRoot.querySelector('.nice')).toBeTruthy();
        expect(page.root.querySelector('.cool')).toBeTruthy();
        expect(page.root).toMatchSnapshot();
    });

    it('should render without shadow dom', async () => {
        const page = await newSpecPage({
            html,
            components,
            supportsShadowDom: false
        });
        expect(page.root.shadowRoot).toBeFalsy();
        expect(page.root.querySelector('.nice')).toBeTruthy();
        expect(page.root.querySelector('.cool')).toBeTruthy();

    });

});