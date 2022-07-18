import { TreeNode } from '../utils'

export function preOrderTraverse(root: TreeNode | null | undefined) {
  const res: number[] = []
  preOrder(root, res)
  return res

  function preOrder(node: TreeNode | null | undefined, res: number[]) {
    if (!node) {
      return
    }

    res.push(node.val)
    preOrder(node.left, res)
    preOrder(node.right, res)
  }
}

export function inOrderTraverse(root: TreeNode | null | undefined) {
  if (!root) {
    return
  }
  const res: number[] = []
  inOrder(root, res)

  function inOrder(node: TreeNode | null | undefined, res: number[]) {
    if (!node) {
      return
    }

    inOrder(node.left, res)
    res.push(node.val)
    inOrder(node.right, res)
  }

  return res
}

export function postOrderTraverse(root: TreeNode | null | undefined) {
  if (!root) {
    return
  }
  const res: number[] = []
  postOrder(root, res)

  function postOrder(node: TreeNode | null | undefined, res: number[]) {
    if (!node) {
      return
    }

    postOrder(node.left, res)
    postOrder(node.right, res)
    res.push(node.val)
  }

  return res
}
