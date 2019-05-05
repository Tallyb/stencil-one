import { newSpecPage } from '@stencil/core/testing';

import { MyFetchComponent } from './my-fetch';

// function mockFetch() {
//     console.log('MOCKING')
//     return jest.fn().mockImplementation(() => {
//         console.log('IN FUNC')
//         return Promise.resolve({
//         ok: true,
//         json: () => {}
//       })
//     });
//   }

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