import { ListNode } from '../utils'

export function reverseListByRec(root: ListNode | undefined) {
  if (!root) {
    return undefined
  }

  return recReverseList(root)

  function recReverseList(node: ListNode | undefined): ListNode | undefined {
    if (!node?.next) {
      return node
    }

    const head = recReverseList(node.next)

    node.next.next = node
    node.next = undefined

    return head
  }
}

export function reverseListByLoop(root: ListNode | undefined): ListNode | undefined {
  let curr = root,
    pre: ListNode | undefined = undefined
  while (curr) {
    const next = curr.next

    curr.next = pre
    pre = curr
    curr = next
  }

  return pre
}
