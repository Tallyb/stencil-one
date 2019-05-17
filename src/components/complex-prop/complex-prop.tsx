import { Component, Prop, h, JSX} from '@stencil/core';

@Component({
  tag: 'my-complex-prop',
  styleUrl: 'complex-prop.css',
  shadow: true
})
export class MyComplexPropComponent {

  @Prop({mutable: true}) data: Array<string> = [];

  toUpper (items: Array<string>) {
    return items.map( i => i.toUpperCase());
  }
  componentWillLoad() {
    this.data = this.toUpper(this.data);
    console.log('Will load', this.data);
  }

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
