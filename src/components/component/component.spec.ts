import {newSpecPage} from '@stencil/core/testing';

import {MyComponent} from './component';

describe('component', () => {
  describe('render', () => {
    it('Should render with serializing shadow dom', async() => {
      const {root, styles} = await newSpecPage({
        components: [MyComponent],
        html: `<my-component first="Hello" last="World">Some Text</my-component>`,
        serializedShadowDom: true
      });
  
      expect(root).toEqualHtml(`
        <my-component class=\"hydrated\" first=\"Hello\" last=\"World\">
          <shadow-root>
            <div class=\"nice\">
              <span>
                Hello, World! I'm Hello World
              </span>
              <button>
                Click Me!
              </button>
            </div>
          </shadow-root>
          Some Text
        </my-component>
      `);
      expect(root.shadowRoot).toBeTruthy();
      expect(root.shadowRoot.querySelector('button')).toBeTruthy();
      expect(root.querySelector('button')).toBeFalsy();
    });
  
    it('Should render without serializing shadow dom', async() => {
      const { root } = await newSpecPage({
        components: [MyComponent],
        html: `<my-component first="Hello" last="World">Some Text</my-component>`,
        serializedShadowDom: false
      });
  
      expect(root).toEqualHtml(`
       <my-component class="hydrated sc-my-component-h" first="Hello" last="World">
        <!---->
        Some Text      
        <div class="nice sc-my-component">
          <span class="sc-my-component">
            Hello, World! I'm Hello World
          </span>
          <button class="sc-my-component">
            Click Me!
          </button>
        </div>
      `);
      expect(root.shadowRoot).toBeFalsy();
      expect(root.querySelector('button')).toBeTruthy();

    });

    it('Should render setting content later', async() => {
      const html = `<my-component first="Hello" last="World">Some Text</my-component>`;
      const page = await newSpecPage({
        components: [MyComponent],
        serializedShadowDom: true
      });
      await page.setContent(html);
      //await page.waitForChanges();
  
      expect(page.doc.body).toEqualHtml(`
       <my-component class="hydrated" first="Hello" last="World">
         <shadow-root>
           <div class="nice">
             <span>
               Hello, World! I'm Hello World
             </span>
             <button>
               Click Me!
             </button>
           </div>
         </shadow-root>
         Some Text
         </my-component>
         `);
       });
  });
  

  it('Should emit', async() => {
    const {root, win} = await newSpecPage({
      components: [MyComponent],
      html: `<my-component first="John" last="Doe"></my-component>`
    });
    let button = root
      .shadowRoot
      .querySelector('button');
    let buttonClicked = jest.fn();
    win.addEventListener('buttonClicked', buttonClicked);
    button.click();
    expect(buttonClicked).toHaveBeenCalled;
  });

  it('Should run method', async() => {
    const page = await newSpecPage({
      components: [MyComponent],
      html: `<my-component first="John" last="Doe"></my-component>`
    });
    
    let button = page.root.shadowRoot.querySelector('button');
    expect(button.textContent).toEqual('Click Me!')  
    let ret = await page.rootInstance.updateFace('New Click!');
    await page.waitForChanges();
    expect(ret).toEqual('NEW CLICK!');
    expect(button.textContent).toEqual('New Click!');
  });
  

});
