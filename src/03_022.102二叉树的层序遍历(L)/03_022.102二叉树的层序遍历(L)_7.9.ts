// 给你二叉树的根节点 `root` ，返回其节点值的 **层序遍历** 。 （即逐层地，从左到右访问所有节点）。
// 输入：root = [3,9,20,null,null,15,7]
// 输出：[[3],[9,20],[15,7]]

import { TreeNode } from '../utils'

export function levelOrder(root: TreeNode | null): number[][] {
  if (!root) {
    return []
  }

  const queue: TreeNode[] = []
  const result: number[][] = []

  queue.unshift(root)

  while (queue.length > 0) {
    const layer: number[] = []
    const len = queue.length

    for (let i = 0; i < len; ++i) {
      const el = queue.pop()

      if (el) {
        el.val && layer.push(el.val)

        el.left && queue.unshift(el.left)
        el.right && queue.unshift(el.right)
      }
    }

    result.push(layer)
  }

  return result
}
