
import { MyInstance } from './instance';

it ('Should format the name', () => {
  let cmp = new MyInstance();
  cmp.first = 'Donald';
  cmp.last = 'Duck';
  expect(cmp.format()).toEqual('Donald Duck');
});

it ('Should do nothing', () => {
  let cmp = new MyInstance();
  expect(cmp.doNothing()).toBeFalsy();
});

