import { Component, Prop, h, JSX, Event, EventEmitter } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'component.css',
  shadow: true
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  @Event() buttonClicked: EventEmitter<string>;
  private getText(): string {
    return format(this.first, this.middle, this.last);
  }
   onClicked(value: string) {
     console.log('Value Clicked is ', value);
   }

  render() : JSX.Element {
    return (
      <div class="nice">
      <span>
        Hello, World! I'm {this.getText()}
      </span>
      <button onClick={()=>this.onClicked('ABCD')}>
        Click Me!
      </button>
      </div>
    );
  }
}
