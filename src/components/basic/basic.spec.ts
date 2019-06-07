import { newSpecPage } from "@stencil/core/dist/testing";

import { MyBasic } from './basic';

describe('basic', () => {
    it('should render with shadow dom', async () => {
        const page = await newSpecPage({
            html: `<my-basic first="Julia" last="Roberts"></my-basic>`,
            components: [MyBasic]
        });
        expect(page.root).toEqualHtml(`
            <my-basic first=\"Julia\" last=\"Roberts\">
                <mock:shadow-root>
                     <p class="nice">
                        My name is Roberts Julia
                    </p>
                </mock:shadow-root>
            </my-basic>
        `);
    });

    it('should render with shadow dom', async () => {
        const page = await newSpecPage({
            html: `<my-basic first="Julia" last="Roberts"></my-basic>`,
            components: [MyBasic],
            supportsShadowDom: false
        });
        expect(page.root).toEqualHtml(`
            <my-basic first=\"Julia\" last=\"Roberts\">
                <p class="nice">
                    My name is Roberts Julia
                </p>
            </my-basic>
        `);
    });

});