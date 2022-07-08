import { bubbleSort, insertSort, mergeSort, quickSort } from '../src'

describe('Array sort', () => {
  let nums: number[] = []
  beforeEach(() => {
    nums = [5, 2, 3, 1]
  })

  it('quick sort', () => {
    const result = quickSort(nums)
    expect(result).toEqual([1, 2, 3, 5])

    expect(quickSort([5, 1, 1, 2, 0, 0])).toEqual([0, 0, 1, 1, 2, 5])
  })
  it('merge sort', () => {
    const result = mergeSort(nums)

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
