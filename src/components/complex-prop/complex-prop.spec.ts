import { newSpecPage } from '@stencil/core/testing';

import { MyComplexPropComponent } from './complex-prop';

describe('complex prop', () => {

    it('should render', async () => {
        const page = await newSpecPage({
            components: [MyComplexPropComponent],
            html: `
                <my-complex-prop>
                </my-complex-prop>
            `
        });
        page.rootInstance.data = ['aaa', 'bbb', 'ccc'];
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
            components: [MyComplexPropComponent],
            html: `
                <div>
                </div>
            `
        });
        let cmp: any = page.doc.createElement('my-complex-prop');
        cmp.data = ['aaa', 'bbb', 'ccc'];
        await page.waitForChanges();
        page.doc.appendChild(cmp);
        await page.waitForChanges();
        // expect(page.root).toEqualHtml(`
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