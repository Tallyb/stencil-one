import { MyComplexPropComponent } from './complex-prop';
import {h} from '@stencil/core';

export default {
  title: 'My Complex',
  components: MyComplexPropComponent
};

export const Default = () => 
  (<my-complex-prop values={['aaa', 'bbb']}></my-complex-prop>);

