import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'my-instance'
})
export class MyInstance {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  format () {
    return [this.first, this.middle, this.last].filter (e => !!e).join(' ');
  }

}
