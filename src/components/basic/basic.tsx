import { Component, Prop, h, JSX } from '@stencil/core';

@Component({
  tag: 'my-basic',
  styleUrl: 'basic.css',
  shadow: true
})
export class MyBasic {

    @Prop() first: string;

    @Prop() last: string;
  
    render(): JSX.Element {
      return (
        <div>
          <p class="nice">My name is {this.last} {this.first}</p>
          <slot/>
        </div>
            
      );
    }
}