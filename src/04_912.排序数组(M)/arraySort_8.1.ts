// 快速排序
// 思路：
// 选定一个pivot
// 将小于pivot的值放在pivot的左边
// 将大于pivot的值放在pivot的右边

import { swap } from '../utils'

export function quickSort(nums: number[]): number[] {
  const len = nums.length
  recQuickSotr(nums, 0, len - 1)
  return nums

  function recQuickSotr(nums: number[], L: number, R: number) {
    if (L >= R) {
      return
    }

    let left = L,
      right = R,
      pivot = nums[left]

    while (left < right) {
      while (left < right && nums[right] >= pivot) {
        --right
      }
      if (left < right) {
        nums[left] = nums[right]
      }
      while (left < right && nums[left] <= pivot) {
        ++left
      }
      if (left < right) {
        nums[right] = nums[left]
      }

      if (left >= right) {
        nums[right] = pivot
      }
    }

    recQuickSotr(nums, L, right - 1)
    recQuickSotr(nums, right + 1, R)
  }
}

export function mergeSort(nums: number[]): number[] {
  const len = nums.length
  divide(nums, 0, len - 1)
  return nums

  function divide(nums: number[], L: number, R: number) {
    if (L >= R) {
      return
    }

    const M = L + Math.floor((R - L) / 2)

    divide(nums, L, M)
    divide(nums, M + 1, R)
    merge(nums, L, M, R)
  }

  function merge(nums: number[], L: number, M: number, R: number) {
    let i = L,
      j = M + 1,
      len = R - L + 1,
      tmp: number[] = []

    while (i <= M && j <= R) {
      tmp.push(nums[i] < nums[j] ? nums[i++] : nums[j++])
    }
    while (i <= M) {
      tmp.push(nums[i++])
    }
    while (j <= R) {
      tmp.push(nums[j++])
    }

    for (let k = 0; k < len; ++k) {
      nums[L++] = tmp[k]
    }
  }
}

export function bubbleSort(nums: number[]): number[] {
  const len = nums.length
  for (let i = 0; i < len; ++i) {
    for (let j = 0; j < len - i - 1; ++j) {
      if (nums[j] > nums[j + 1]) {
        swap(nums, j, j + 1)
      }
    }
  }

  return nums
}

export function insertSort(nums: number[]): number[] {
  const len = nums.length
  for (let i = 0; i < len; ++i) {
    let j = i,
      target = nums[i]

    while (j > 0 && target < nums[j - 1]) {
      nums[j] = nums[j - 1]
      --j
    }
    nums[j] = target
  }

  return nums
}
