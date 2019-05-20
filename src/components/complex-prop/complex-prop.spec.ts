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
         <my-complex-prop class="hydrated">
           <shadow-root>
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
           </shadow-root>
         </my-complex-prop>
        `)
    });
    it('should render with data', async () => {
        const page = await newSpecPage({
            components: [MyComplexPropComponent]
        });
        let cmp = page.doc.createElement('my-complex-prop');
        page.doc.appendChild(cmp);
        await page.waitForChanges();
        // let my = page.doc.querySelector('my-complex-prop'); //this is now ""
        // expect(my.shadowRoot).toEqualHtml(`
        //  <my-complex-prop class="hydrated">
        //    <shadow-root>
        //      <div class="nice">
        //        <div class="item">
        //          <span>
        //            aaa
        //          </span>
        //        </div>
        //        <div class="item">
        //          <span>
        //            bbb
        //          </span>
        //        </div>
        //        <div class="item">
        //          <span>
        //            ccc
        //          </span>
        //        </div>
        //      </div>
        //    </shadow-root>
        //  </my-complex-prop>
        // `)
    });


});