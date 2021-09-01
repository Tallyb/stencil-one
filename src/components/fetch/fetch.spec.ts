import { newSpecPage } from '@stencil/core/testing';

import { MyFetchComponent } from './fetch';

describe('fetch', () => {

  it('should render with language', async () => {
    const fetchMock = jest.fn().mockImplementation( () => {
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
        `;
    const page = await newSpecPage({
      components: [MyFetchComponent],
      html
    })!;    

    expect(fetchMock).toHaveBeenCalledWith('./assets/i18n/fr.json');
    page!.root!.language = 'he';
    await page.waitForChanges();
    expect(fetchMock).toHaveBeenCalledWith('./assets/i18n/he.json');
  });
});