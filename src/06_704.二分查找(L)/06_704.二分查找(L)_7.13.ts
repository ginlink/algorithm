export function binarySearch(nums: number[], s: number): number {
  const len = nums.length
  let left = 0,
    right = len - 1

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2)

    const value = nums[mid]

    if (s === value) {
      return mid
    } else if (s > value) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return -1
}
