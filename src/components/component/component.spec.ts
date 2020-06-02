/* eslint-disable no-useless-escape */
import { newSpecPage } from "@stencil/core/testing";

import { MyComponent } from "./component";
import * as utils from "../../utils/utils";

describe("component", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  describe("render", () => {
    it("should return text", () => {
      const cmp = new MyComponent();
      expect(cmp.getOne()).toEqual("This is a string");
    });

    it("should format mock value", async () => {
      // this is here to show mocking example.
      jest.spyOn(utils, "format").mockReturnValue("Tally Barak");
      const { root } = await newSpecPage({
        components: [MyComponent],
        html:
          '<my-component first="Hello" last="World">Some Text</my-component>',
        supportsShadowDom: true,
      });
      const span = root.shadowRoot.querySelector("span");
      expect(span.textContent).toEqual("Hello, World! I'm Tally Barak");
    });

    it("Should render with serializing shadow dom", async () => {
      const { root } = await newSpecPage({
        components: [MyComponent],
        html:
          '<my-component first="Hello" last="World">Some Text</my-component>',
        supportsShadowDom: true,
      });

      expect(root).toEqualHtml(`
        <my-component first=\"Hello\" last=\"World\">
          <mock:shadow-root>
            <div class=\"nice\">
              <span>
                Hello, World! I'm Hello World
              </span>
              <button>
                Click Me!
              </button>
            </div>
          </mock:shadow-root>
          Some Text
        </my-component>
      `);
      expect(root.shadowRoot).toBeTruthy();
      expect(root.shadowRoot.querySelector("button")).toBeTruthy();
      expect(root.querySelector("button")).toBeFalsy();
    });

    it("Should render without serializing shadow dom", async () => {
      const { root } = await newSpecPage({
        components: [MyComponent],
        html:
          '<my-component first="Hello" last="World">Some Text</my-component>',
        supportsShadowDom: false,
      });

      expect(root).toEqualHtml(`
       <my-component first="Hello" last="World">
        Some Text      
        <div class="nice">
          <span>
            Hello, World! I'm Hello World
          </span>
          <button>
            Click Me!
          </button>
        </div>
      `);
      expect(root).toMatchInlineSnapshot(`
        <my-component first="Hello" last="World">
          <!---->
          Some Text
          <div class="nice">
            <span>
              Hello, World! I'm Hello World
            </span>
            <button>
              Click Me!
            </button>
          </div>
        </my-component>
      `);
      expect(root.shadowRoot).toBeFalsy();
      expect(root.querySelector("button")).toBeTruthy();
    });

    it("Should render setting content later", async () => {
      const html =
        '<my-component first="Hello" last="World">Some Text</my-component>';
      const page = await newSpecPage({
        components: [MyComponent],
        supportsShadowDom: true,
      });
      await page.setContent(html);

      expect(page.doc.body).toEqualHtml(`
       <my-component first="Hello" last="World">
         <mock:shadow-root>
           <div class="nice">
             <span>
               Hello, World! I'm Hello World
             </span>
             <button>
               Click Me!
             </button>
           </div>
         </mock:shadow-root>
         Some Text
         </my-component>
         `);
      expect(page.doc.body).toMatchInlineSnapshot(`
        <body>
          <my-component first="Hello" last="World">
            <mock:shadow-root>
              <div class="nice">
                <span>
                  Hello, World! I'm Hello World
                </span>
                <button>
                  Click Me!
                </button>
              </div>
            </mock:shadow-root>
            Some Text
          </my-component>
        </body>
      `);
    });
  });

  it("Should emit", async () => {
    const { root, win } = await newSpecPage({
      components: [MyComponent],
      html: '<my-component first="John" last="Doe"></my-component>',
    });
    const button = root.shadowRoot.querySelector("button");
    const buttonClicked = jest.fn();
    win.addEventListener("buttonClicked", buttonClicked);
    button.click();
    expect(buttonClicked).toHaveBeenCalled;
  });

  it("Should run method", async () => {
    const page = await newSpecPage({
      components: [MyComponent],
      html: '<my-component first="John" last="Doe"></my-component>',
    });

    const button = page.root.shadowRoot.querySelector("button");
    expect(button.textContent).toEqual("Click Me!");
    const ret = await page.rootInstance.updateFace("New Click!");
    await page.waitForChanges();
    expect(ret).toEqual("NEW CLICK!");
    expect(button.textContent).toEqual("New Click!");
  });
});
