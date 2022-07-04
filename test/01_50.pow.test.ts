import { quickMul } from '../src';

describe('pow', () => {
  it('works in 2**2', () => {
    expect(quickMul(2, 2)).toBe(4);
  });
  it('works in 2**4', () => {
    expect(quickMul(2, 4)).toBe(16);
  });
  it('works in 2**10', () => {
    expect(quickMul(2, 10)).toBe(1024);
  });

  it('works in 10**10', () => {
    expect(quickMul(10, 10)).toBe(10000000000);
  });
});
