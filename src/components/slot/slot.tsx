import { Component, Prop, h, JSX} from '@stencil/core';

@Component({
  tag: 'my-slot',
  styleUrl: 'slot.css',
  shadow: true
})
export class MySlotComponent {

  @Prop() values: Array<string> = [];

  render() : JSX.Element {
    return (
      <div class="cool">
        <h>I am a header </h>
        <slot/>
      </div>
    );
  }
}
