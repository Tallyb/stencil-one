import { Component, Prop, h, JSX, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'my-input',
  styleUrl: 'input.css',
  shadow: true
})
export class MyInput {
  @Prop() header: string;

  @Event() thisHappened: EventEmitter<any>; 

  private inputElement: HTMLInputElement;

  onInputChanged = () => {
    let value = this.inputElement.value;
    this.thisHappened.emit(value);
  }
  render() : JSX.Element {
    return (
      <div class="nice">
        <input
          onInput={this.onInputChanged}
          ref={el => this.inputElement = el as HTMLInputElement}
        />
      </div>
    );
  }
}
