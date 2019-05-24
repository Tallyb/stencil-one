import { newSpecPage } from '@stencil/core/testing';

import { MyHostComponent } from './host';

describe('complex prop', () => {

    it('should render', async () => {
        const page = await newSpecPage({
            components: [MyHostComponent],
            html: `
            <div>    
              <my-host>
                </my-host>
              </div>
            `
        });
        expect(page.root).toEqualHtml(`
        <my-host class=\"cool\">
      <mock:shadow-root>
        <h>
          I am a The host
        </h>
        <slot></slot>
      </mock:shadow-root>
    </my-host>
        `)
    });
    
});