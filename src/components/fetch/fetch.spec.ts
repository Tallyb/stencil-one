import { newSpecPage } from '@stencil/core/testing';

//import fetchMock from 'fetch-mock';
import { MyFetchComponent } from './fetch';

const fetchMock = jest.requireActual('fetch-mock');
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

    it('should render with language', async () => {
        fetchMock.mock('*', { a: 'a'} );
        // let mockFetch = jest.fn().mockImplementation(async v => {
        //     console.log('V IS', v);
        //     return {

        //     };
        // });

        Object.defineProperty(global, 'fetch', {
            value: fetchMock,
            writable: true
        });

        const html = `
            <my-fetch language="fr">
                <p> This is the app </p>
            </my-fetch>
        `
        const page = await newSpecPage({
            components: [MyFetchComponent],
            html
        });    

        //await page.setContent(html);

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