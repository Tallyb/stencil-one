import { Component, State, Event, Method, EventEmitter, h , JSX } from '@stencil/core';

@Component({
  tag: 'my-event'
})
export class MyEvent {
    @State() buttonFace: string = 'Click Me!';
    @State() clicked: boolean;
  
    @Event() buttonClicked: EventEmitter<string>;
  
    @Method() 
    async updateFace(value: string): Promise<string>{
      this.buttonFace = value;
      return this.buttonFace.toUpperCase();
    }

    onClicked(value: string) {
      console.log('value is: ', value);
      this.clicked = !this.clicked; 
      this.buttonClicked.emit('Yep!');   
    }
    
    render(): JSX.Element {
      return (
        <button onClick={()=>this.onClicked('ABCD')}>
          {this.buttonFace}
        </button>
      );
    }
}