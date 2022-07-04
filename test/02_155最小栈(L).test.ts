import { MinStack } from '../src';

// 输入
// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [],[-2],[0],[-3],[],[],[],[]

// 输出
// ;[null, null, null, null, -3, null, 0, -2]

describe('min stack', () => {
  let minStack = new MinStack();
  beforeEach(() => {
    minStack = new MinStack();
  });

  it('works', () => {
    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);

    expect(minStack.getMin()).toBe(-3);
    expect(minStack.pop()).toBe(-3);
    expect(minStack.top()).toBe(0);
    expect(minStack.getMin()).toBe(-2);
  });
});
