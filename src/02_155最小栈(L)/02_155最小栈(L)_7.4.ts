// 题目：155.最小栈
// 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。
// push(x) —— 将元素 x 推入栈中。 pop() —— 删除栈顶的元素。 top() —— 获取栈顶元素。 getMin() —— 检索栈中的最小元素。

// 输入
// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [],[-2],[0],[-3],[],[],[],[]

// 输出
// ;[null, null, null, null, -3, null, 0, -2]

// 难度：简单
// [1] https://segmentfault.com/a/1190000041534341

export class MinStack {
  private stack: number[] = []
  private minStack: number[] = [Infinity]

  push(value: number) {
    this.stack.push(value)

    this.minStack.push(Math.min(value, this.minStack[this.minStack.length - 1]))
  }

  pop() {
    const e = this.stack.pop()
    this.minStack.pop()

    return e
  }

  top() {
    return this.stack[this.stack.length - 1]
  }

  getMin() {
    return this.minStack[this.minStack.length - 1]
  }
}
