import { ListNode } from '../utils'

export function reverseListByRec(root: ListNode | undefined) {
  return root ? recReverseList(root) : undefined

  function recReverseList(node: ListNode): ListNode {
    if (!node.next) {
      return node
    }

    const head = recReverseList(node.next)
    node.next.next = node
    node.next = undefined

    return head
  }
}

export function reverseListByLoop(root: ListNode | undefined): ListNode | undefined {
  let pre,
    curr = root

  while (curr) {
    const next = curr.next
    curr.next = pre
    pre = curr
    curr = next
  }

  return pre
}
