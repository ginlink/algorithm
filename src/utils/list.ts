export class ListNode {
  val?: any;
  next: ListNode | undefined;

  constructor(val?: any, next?: ListNode) {
    this.val = val;
    this.next = next;
  }
}

export function createList(n = 5): ListNode | undefined {
  if (n <= 0) return;

  const head = new ListNode(1);
  let cloneHead = head;

  for (let i = 1; i < n; ++i) {
    const newNode = new ListNode(i + 1);
    cloneHead.next = newNode;

    cloneHead = cloneHead.next;
  }

  return head;
}

export function traverseList(head: ListNode | undefined) {
  let clone = head;
  while (clone) {
    clone = clone.next;
  }
}
