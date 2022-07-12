import { createList, ListNode, reverseListByLoop, reverseListByRec } from '../src'

describe('Reverse list', () => {
  let root: ListNode | undefined = new ListNode()
  beforeEach(() => {
    root = createList(10)
  })
  it('Reverse list with recursion', () => {
    expect(reverseListByRec(reverseListByRec(root))).toEqual(root)
  })
  it('Reverse list with loop', () => {
    expect(reverseListByLoop(reverseListByLoop(root))).toEqual(root)
  })
})
