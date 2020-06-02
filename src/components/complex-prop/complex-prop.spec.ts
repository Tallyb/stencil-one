import { newSpecPage } from "@stencil/core/testing";

import { MyComplexPropComponent } from "./complex-prop";

describe("complex prop", () => {
  it("should change to upper case", () => {
    const cmp = new MyComplexPropComponent();
    const res = cmp.toUpper(["aaa", "bbb", "ccc"]);
    expect(res).toEqual(["AAA", "BBB", "CCC"]);
  });

  it("should render", async () => {
    const page = await newSpecPage({
      components: [MyComplexPropComponent],
      html: `
                <my-complex-prop>
                </my-complex-prop>
            `,
    });
    page.rootInstance.values = ["aaa", "bbb", "ccc"];
    await page.waitForChanges();
    expect(page.root).toMatchInlineSnapshot(`
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
    `);
  });
  it("should render with data", async () => {
    const page = await newSpecPage({
      components: [MyComplexPropComponent],
      html: "<div></div>",
    });
    const cmp = page.doc.createElement("my-complex-prop");
    (cmp as any).values = ["aaa", "bbb", "ccc"];
    page.root.appendChild(cmp);
    await page.waitForChanges();
    const el = await page.doc.querySelector("my-complex-prop");
    const items = el.shadowRoot.querySelectorAll(".item");
    expect(items.length).toEqual(3);
    expect(items[0].textContent).toEqual("AAA");
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
