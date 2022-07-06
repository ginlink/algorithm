// 给你二叉树的根节点 `root` ，返回其节点值的 **层序遍历** 。 （即逐层地，从左到右访问所有节点）。
// 输入：root = [3,9,20,null,null,15,7]
// 输出：[[3],[9,20],[15,7]]

import { TreeNode } from '../utils'

export function levelOrder(root: TreeNode | null): (number | null)[][] {
  const queue: (TreeNode | null | undefined)[] = []
  const result: (number | null)[][] = []

  queue.unshift(root)

  while (queue.length > 0) {
    const len = queue.length
    const layer: (number | null)[] = []

    for (let i = 0; i < len; ++i) {
      const top = queue.pop()
      layer.push(top?.val ?? null)

      if (top?.left) {
        queue.unshift(top.left)
      }
      if (top?.right) {
        queue.unshift(top.right)
      }
    }

    result.push(layer)
  }

  return result
}
