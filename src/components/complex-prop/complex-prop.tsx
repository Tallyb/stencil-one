import { Component, Prop, h, JSX} from '@stencil/core';

@Component({
  tag: 'my-complex-prop',
  styleUrl: 'complex-prop.css',
  shadow: true
})
export class MyComplexPropComponent {

  @Prop({mutable: true}) values: Array<string> = [];

  toUpper (items: Array<string>) {
    return items.map( i => i.toUpperCase());
  }
  componentWillLoad() {
    this.values = this.toUpper(this.values);
    console.log('Will load', this.values);
  }

  render() : JSX.Element {
    return (
      <div class="nice">
      {this.values.map((item) => {
            return <div class="item">
                <span>{item}</span>
            </div>
        })}
      </div>
    );
  }
}
