import { Component, Prop, h, JSX } from '@stencil/core';

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

  // @Watch('values') //this will run everytime values are changed
  // onValuesChange(newValue: any, oldValue: any) {
  //   //change to upper here
  // } 

  componentWillLoad() { // this wi
    console.log('Will load', this.values);
    this.values = this.toUpper(this.values);
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
