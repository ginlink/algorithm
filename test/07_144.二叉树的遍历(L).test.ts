import { arr2tree, inOrderTraverse, postOrderTraverse, preOrderTraverse } from '../src'

describe('Tree traverse', () => {
  it('PreOrder traverse', () => {
    expect(preOrderTraverse(arr2tree([1, null, 2, 3]))).toEqual([1, 2, 3])
  })
  it('InOrder traverse', () => {
    expect(inOrderTraverse(arr2tree([1, null, 2, 3]))).toEqual([1, 3, 2])
  })
  it('PostOrder traverse', () => {
    expect(postOrderTraverse(arr2tree([1, null, 2, 3]))).toEqual([3, 2, 1])
  })
})
