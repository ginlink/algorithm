import { binarySearch } from '../src'

describe('Binary search', () => {
  let nums: number[] = []
  beforeEach(() => {
    nums = [1, 2, 3, 4, 5]
  })
  it('Binary search', () => {
    expect(binarySearch(nums, 3)).toEqual(2)
    expect(binarySearch(nums, 5)).toEqual(4)
  })
})
