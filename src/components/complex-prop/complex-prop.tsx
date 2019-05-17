import { Component, Prop, h, JSX} from '@stencil/core';

@Component({
  tag: 'my-complex-prop',
  styleUrl: 'complex-prop.css',
  shadow: true
})
export class MyComplexPropComponent {

  @Prop() data: Array<string>;

  render() : JSX.Element {
    return (
      <div class="nice">
      {this.data.map((item) => {
            return <div class="item">
                <span>{item}</span>
            </div>
        })}
      </div>
    );
  }
}
