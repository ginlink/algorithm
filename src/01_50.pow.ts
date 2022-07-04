// 题目：实现 pow(x, n) ，即计算 x 的 n 次幂函数。

// 输入: 2.0, 10;
// 输出: 1024.0;

export function quickMul(x: number, n: number): number {
  if (n == 0) {
    return 1;
  }

  const y = quickMul(x, Math.floor(n / 2));

  return n % 2 == 0 ? y * y : y * y * x;
}

// 思路：假设算2^10，我一次性算不出来2^10，那我先去算2^5*2^5
// 同理，我一次性算不出来2^10，那我先去算2^2*2^3
