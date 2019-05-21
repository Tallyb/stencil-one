import { newSpecPage } from '@stencil/core/testing';

import { MyComplexPropComponent } from './complex-prop';

describe('complex prop', () => {

    it ('should change to upper case', () => {
        let cmp = new MyComplexPropComponent();
        let res = cmp.toUpper(['aaa', 'bbb', 'ccc']);
        expect(res).toEqual(['AAA', 'BBB', 'CCC']);
    });

    it('should render', async () => {
        const page = await newSpecPage({
            components: [MyComplexPropComponent],
            html: `
                <my-complex-prop>
                </my-complex-prop>
            `
        });
        page.rootInstance.values = ['aaa', 'bbb', 'ccc'];
        await page.waitForChanges();
        expect(page.root).toEqualHtml(`
         <my-complex-prop>
           <mock:shadow-root>
             <div class="nice">
               <div class="item">
                 <span>
                   aaa
                 </span>
               </div>
               <div class="item">
                 <span>
                   bbb
                 </span>
               </div>
               <div class="item">
                 <span>
                   ccc
                 </span>
               </div>
             </div>
           </mock:shadow-root>
         </my-complex-prop>
        `)
    });
    it('should render with data', async () => {
        const page = await newSpecPage({
            components: [MyComplexPropComponent],
            html: '<div></div>'
        });
        let cmp = page.doc.createElement('my-complex-prop');
        (cmp as any).values = ['aaa', 'bbb', 'ccc'];
        page.root.appendChild(cmp);
        await page.waitForChanges();
        expect(page.root).toEqualHtml(`
        <div>
          <my-complex-prop>
            <mock:shadow-root>
              <div class=\"nice\">
                <div class=\"item\">
                  <span>
                    AAA
                  </span>
                </div>
                <div class=\"item\">
                  <span>
                    BBB
                  </span>
                </div>
                <div class=\"item\">
                  <span>
                    CCC
                  </span>
                </div>
              </div>
            </mock:shadow-root>
          </my-complex-prop>
        </div>
        `)
    });


});