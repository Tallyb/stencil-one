import { Component, Prop, h, JSX, Element, Host} from '@stencil/core';

@Component({
  tag: 'my-host',
  styleUrl: 'host.css',
  shadow: true
})
export class MyHostComponent {

  @Prop() values: Array<string> = [];

  @Element() host;
  render() : JSX.Element {
    return (
      <Host class="cool">
        <h>I am a The host </h>
        <slot/>
      </Host>
    );
  }
}
