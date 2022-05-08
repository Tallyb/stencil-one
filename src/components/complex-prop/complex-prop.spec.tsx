import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';

import { MyComplexPropComponent } from './complex-prop';

describe('complex prop', () => {
  it('should change to upper case', () => {
    const cmp = new MyComplexPropComponent();
    const res = cmp.toUpper(['aaa', 'bbb', 'ccc']);
    expect(res).toEqual(['AAA', 'BBB', 'CCC']);
  });

  it('should render', async () => {
    const page = await newSpecPage({
      components: [MyComplexPropComponent],
      template: () => (
        <my-complex-prop values={['aaa', 'bbb', 'ccc']}></my-complex-prop>
      ),
    });
    // page.rootInstance.values = ['aaa', 'bbb', 'ccc'];
    await page.waitForChanges();
    expect(page.root).toMatchInlineSnapshot(`
      <my-complex-prop>
        <mock:shadow-root>
          <div class="nice">
            <div class="item">
              <span>
                AAA
              </span>
            </div>
            <div class="item">
              <span>
                BBB
              </span>
            </div>
            <div class="item">
              <span>
                CCC
              </span>
            </div>
          </div>
        </mock:shadow-root>
      </my-complex-prop>
    `);
  });

  it('should render with data', async () => {
    const page = await newSpecPage({
      components: [MyComplexPropComponent],
      html: '<div></div>',
    })!;
    const cmp = page.doc.createElement('my-complex-prop');
    page.root?.appendChild(cmp);
    (cmp as any).values = ['aaa', 'bbb', 'ccc'];
    await page.waitForChanges();
    const el = await page.doc.querySelector('my-complex-prop')!;
    const items = el.shadowRoot?.querySelectorAll('.item')!;
    expect(items.length).toEqual(3);
    expect(items[0].textContent).toEqual('AAA');
    expect(page.root).toMatchInlineSnapshot(`
      <my-complex-prop>
        <mock:shadow-root>
          <div class="nice">
            <div class="item">
              <span>
                AAA
              </span>
            </div>
            <div class="item">
              <span>
                BBB
              </span>
            </div>
            <div class="item">
              <span>
                CCC
              </span>
            </div>
          </div>
        </mock:shadow-root>
      </my-complex-prop>
    `);
  });

  it('should render with data', async () => {
    const values = ['aaa', 'bbb', 'ccc'];
    const page = await newSpecPage({
      components: [MyComplexPropComponent],
      template: () => <my-complex-prop values={values}></my-complex-prop>,
    });
    const el: any = await page.doc.querySelector('my-complex-prop')!;
    const items = el.shadowRoot?.querySelectorAll('.item')!;
    expect(items.length).toEqual(3);
    expect(items[0].textContent).toEqual('AAA');
    expect(page.root).toMatchInlineSnapshot(`
      <my-complex-prop>
        <mock:shadow-root>
          <div class="nice">
            <div class="item">
              <span>
                AAA
              </span>
            </div>
            <div class="item">
              <span>
                BBB
              </span>
            </div>
            <div class="item">
              <span>
                CCC
              </span>
            </div>
          </div>
        </mock:shadow-root>
      </my-complex-prop>
    `);
  });
});
