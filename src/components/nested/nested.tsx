import { Component, Prop, h, JSX } from '@stencil/core';

@Component({
  tag: 'my-nested',
  styleUrl: 'nested.css',
  shadow: true
})
export class MyNested {

    @Prop() first: string = '';

    @Prop() last: string = '';
  

    render(): JSX.Element {
      return (
        <div>
          <my-basic first={'Sean'} last={'Connery'}/>
          <p class="very-nice">My name is {this.last} {this.first}</p>
        </div>            
      );
    }
}