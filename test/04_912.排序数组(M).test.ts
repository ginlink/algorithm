import { bubbleSort, insertSort, quickSort } from '../src'

describe('Array sort', () => {
  let nums: number[] = []
  beforeEach(() => {
    nums = [5, 2, 3, 1]
  })

  it('quick sort', () => {
    const result = quickSort(nums)

    expect(result).toEqual([1, 2, 3, 5])
  })
  it('bubble sort', () => {
    const result = bubbleSort(nums)

    expect(result).toEqual([1, 2, 3, 5])
  })
  it('insert sort', () => {
    const result = insertSort(nums)

    expect(result).toEqual([1, 2, 3, 5])
  })
})
