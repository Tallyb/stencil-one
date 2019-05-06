import { newSpecPage } from '@stencil/core/testing';

import { MyFetchComponent } from './my-fetch';

describe('app', () => {

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

    it('should render with language', async () => {
        let mockFetch = jest.fn(() => {
            console.log('I am mocking')
            return new Promise(() => {
                return {
                    ok: true,
                    json: {}
                }
            });
        });
        // Object.defineProperty(global, 'fetch', {
        //     value: mockFetch,
        //     writable: true
        // })
        
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