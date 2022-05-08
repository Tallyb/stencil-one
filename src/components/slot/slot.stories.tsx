/** @jsx h */
/** @jsxRuntime classic */

import {h} from '@stencil/core';


export default {
  title: 'My slot',
};

export const Default = {
  render: () => 
    <my-slot>
      <my-component first={'Juliaa'} last={'Roberts'}></my-component>
    </my-slot>
};

