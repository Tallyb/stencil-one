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
            <my-fetch>
                <p>
                    This is the app
                </p>
            </my-fetch>
        `)
    });

    it('should render with language', async () => {
        const fetchMock = jest.fn().mockImplementation( v => {
            console.log('I am mocking ', v);
            return Promise.resolve({
                ok: true,
                json: jest.fn().mockImplementation(() => Promise.resolve({}))
            });
        });

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

        expect(fetchMock).toHaveBeenCalledWith('./assets/i18n/fr.json');
        expect(page.root).toEqualHtml(`
            <my-fetch language=\"fr\">
            <p>
            This is the app
            </p>
        </my-fetch>
        `);
    });

    it('should throw on json error', async () => {
        const fetchMock = jest.fn().mockImplementation( () => {
            return Promise.resolve({
                ok: false
            });
        });

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
        expect(page.root).toEqualHtml(`
            <my-fetch language=\"fr\">
                <p>
                This is the app
                </p>
            </my-fetch>
    `);
    });
});