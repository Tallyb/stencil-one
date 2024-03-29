import { Component, Prop, h, JSX } from '@stencil/core';

@Component({
  tag: 'my-basic',
  styleUrl: 'basic.css',
  shadow: true
})
export class MyBasic {

    @Prop() first: string = '';

    @Prop() last: string = '';
  

    componentWillLoad() {
      console.log('component will load');
    }

    componentDidLoad() {
      console.log('component did load');
    }

    connectedCallback() {
      console.log('Connected Callback');
    }

    disconnectedCallback() {
      console.log('disconnected Callback');
    }

    render(): JSX.Element {
      return (
        <div>
          <p class="nice">My name is {this.last} {this.first}</p>
          <slot/>
        </div>
            
      );
    }
}