import { Component, State, Event, EventEmitter, h , JSX } from '@stencil/core';

@Component({
  tag: 'my-event'
})
export class MyEvent {
    @State() buttonText: string = 'Click Me!'; 
    @Event() buttonClicked: EventEmitter<string>;

    onClicked(value: string) {
      console.log('value is: ', value);
      this.buttonText = value; 
      this.buttonClicked.emit(value);   
    }
    
    render(): JSX.Element {
      return (
        <button onClick={()=>this.onClicked('I was clicked')}>
          {this.buttonText}
        </button>
      );
    }
}