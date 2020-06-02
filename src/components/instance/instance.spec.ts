
import { MyInstance } from './instance';

it ('Should format the name', () => {
  const cmp = new MyInstance();
  cmp.first = 'Donald';
  cmp.last = 'Duck';
  expect(cmp.format()).toEqual('Donald Duck');
});

it ('Should do nothing', () => {
  const cmp = new MyInstance();
  expect(cmp.doNothing()).toBeFalsy();
});

