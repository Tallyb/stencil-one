import { newSpecPage } from '@stencil/core/testing';

import { MySlotComponent } from './slot';
import { MyComponent } from '../component/component';

describe('complex prop', () => {

    it('should render', async () => {
        const page = await newSpecPage({
            components: [MySlotComponent, MyComponent],
            html: `
                <my-slot>
                  <my-component></my-component>
                </my-slot>
            `
        });
        expect(page.root).toEqualHtml(`
        <my-slot>
          <mock:shadow-root>
            <div class=\"cool\">
              <h>
                I am a header
              </h>
              <slot></slot>
            </div>
          </mock:shadow-root>
          <my-component>
            <mock:shadow-root>
              <div class=\"nice\">
                <span>
                  Hello, World! I'm
                </span>
                <button>
                  Click Me!
                </button>
              </div>
            </mock:shadow-root>
          </my-component>
        </my-slot>
        `)
    });
    
});