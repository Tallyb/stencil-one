import { newSpecPage } from '@stencil/core/testing';
import {h} from '@stencil/core';
import { MyBasic } from './basic';

describe('basic - using html', () => {
  const html = `
    <my-basic first="Julia" last="Roberts">
        <p slot class="cool">Cool!</p>
    </my-basic>
    `;
  const components = [MyBasic];

  it('should render with shadow dom', async () => {
    const page = await newSpecPage({
      html,
      components,
    });
    expect(page.root.shadowRoot).toBeTruthy();
    expect(page.root.querySelector('.nice')).toBeFalsy();
    expect(page.root.shadowRoot.querySelector('.nice')).toBeTruthy();
    expect(page.root.querySelector('.cool')).toBeTruthy();
    expect(page.root).toMatchInlineSnapshot(`
      <my-basic first="Julia" last="Roberts">
        <mock:shadow-root>
          <div>
            <p class="nice">
              My name is Roberts Julia
            </p>
            <slot></slot>
          </div>
        </mock:shadow-root>
        <p class="cool" slot="">
          Cool!
        </p>
      </my-basic>
    `);
  });

  it('should render without shadow dom', async () => {
    const page = await newSpecPage({
      html,
      components,
      supportsShadowDom: false,
    });
    expect(page.root.shadowRoot).toBeFalsy();
    expect(page.root.querySelector('.nice')).toBeTruthy();
    expect(page.root.querySelector('.cool')).toBeTruthy();
  });
});

describe('basic - using template', () => {
  const first = 'Julia';
  const last = 'Roberts';
  const template = () => (
    <my-basic first={first} last={last}>
      <slot></slot>
      <p class="cool">Cool!</p>
    </my-basic>
  );
  const components = [MyBasic];

  it('should render with shadow dom', async () => {
    const page = await newSpecPage({
      template,
      components,
    });
    // expect(page.root.sh).toEqualHtml('aaa');
    expect(page.root.shadowRoot).toBeTruthy();
    expect(page.root.querySelector('.nice')).toBeFalsy();
    expect(page.root.shadowRoot.querySelector('.nice')).toBeTruthy();
    expect(page.root.querySelector('.cool')).toBeTruthy();
    expect(page.root).toMatchInlineSnapshot(`
      <my-basic>
        <mock:shadow-root>
          <div>
            <p class="nice">
              My name is Roberts Julia
            </p>
            <slot></slot>
          </div>
        </mock:shadow-root>
        <p class="cool">
          Cool!
        </p>
      </my-basic>
    `);
  });

  it('should render without shadow dom', async () => {
    const page = await newSpecPage({
      template,
      components,
      supportsShadowDom: false,
    });
    expect(page.root.shadowRoot).toBeFalsy();
    expect(page.root.querySelector('.nice')).toBeTruthy();
    expect(page.root.querySelector('.cool')).toBeTruthy();
  });
});
