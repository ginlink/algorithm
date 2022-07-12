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

export function reverseListByLoop(root: ListNode | undefined) {
  if (!root) {
    return undefined
  }

  let pre: ListNode | undefined
  let curr: ListNode | undefined = root

  while (curr) {
    const next: ListNode | undefined = curr.next

    curr.next = pre
    pre = curr
    curr = next
  }

  return pre
}
