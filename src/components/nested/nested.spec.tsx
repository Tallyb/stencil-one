import { newSpecPage } from '@stencil/core/testing';
import {h} from '@stencil/core';
import { MyNested } from './nested';
import { MyBasic } from '../basic/basic';


describe('nested - using template', () => {
  const template = () => (
    <my-nested first={'Julia'} last={'Roberts'}>
    </my-nested>
  );
  const components = [MyNested, MyBasic];

  it('should render with shadow dom', async () => {
    const page = await newSpecPage({
      template,
      components,
    })!;
    // expect(page.root.sh).toEqualHtml('aaa');
    expect(page.root?.shadowRoot).toBeTruthy();
    const el: HTMLElement = page.root?.shadowRoot?.querySelector('.very-nice')!;
    expect(el.innerHTML).toEqual('My name is Roberts Julia');
    expect(page.root?.shadowRoot?.querySelector('my-basic')).toBeTruthy();
    expect(page.root).toMatchSnapshot();
  });
});
