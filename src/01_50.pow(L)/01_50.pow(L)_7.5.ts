// 题目：实现 pow(x, n) ，即计算 x 的 n 次幂函数。

// 输入: 2.0, 10;
// 输出: 1024.0;

// 难度：简单

export function quickMul(x: number, n: number): number {
  if (n == 0) {
    return 1
  }

  const y = quickMul(x, Math.floor(n / 2))

  // 为什么如果冥是奇数这里要乘以 底？
  // 因为 要抵消向下取整的差值
  return n % 2 == 0 ? y * y : y * y * x
}
