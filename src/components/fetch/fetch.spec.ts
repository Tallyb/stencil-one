import { newSpecPage } from '@stencil/core/testing';

import { MyFetchComponent } from './fetch';

describe('fetch', () => {

    it('should render', async () => {
        const page = await newSpecPage({
            components: [MyFetchComponent],
            html: `
                <my-fetch>
                    <p> This is the app </p>
                </my-fetch>
            `
        });
        expect(page.root).toEqualHtml(`
            <my-fetch class=\"hydrated\">
                <!---->
                <p>
                    This is the app
                </p>
            </my-fetch>
        `)
    });

    xit('should render with language', async () => {

        fetch['mockResponse']({
            val: 'adfd'
        });
        
        const page = await newSpecPage({
            components: [MyFetchComponent],
            html: `
                <my-fetch language="fr">
                    <p> This is the app </p>
                </my-fetch>
            `
        });    

        //let component = page.root.shadowRoot.querySelector('yoo-tabs');
        expect(page.root).toEqualHtml(`
            <my-fetch class=\"hydrated\" language=\"fr\">
            <!---->
            <p>
            This is the app
            </p>
        </my-fetch>
        `);
    });

});