// 快速排序
// 思路：
// 选定一个pivot
// 将小于pivot的值放在pivot的左边
// 将大于pivot的值放在pivot的右边

import { swap } from '../utils'

export function quickSort(nums: number[]): number[] {
  const len = nums.length
  recQuickSort(nums, 0, len - 1)

  function recQuickSort(nums: number[], L: number, R: number) {
    if (L >= R) {
      return
    }

    let left = L,
      right = R
    const pivot = nums[left]

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
        nums[left] = pivot
      }
    }

    recQuickSort(nums, L, right - 1)
    recQuickSort(nums, right + 1, R)
  }

  return nums
}

export function bubbleSort(nums: number[]): number[] {
  const len = nums.length

  for (let i = 0; i < len; ++i) {
    for (let j = 1; j < len - i; ++j) {
      if (nums[j - 1] > nums[j]) {
        swap(nums, j - 1, j)
      }
    }
  }

  return nums
}

export function insertSort(nums: number[]): number[] {
  const len = nums.length

  for (let i = 1; i < len; ++i) {
    let j = i
    let temp = nums[j]

    while (j > 0 && nums[j - 1] > temp) {
      nums[j] = nums[j - 1]
      --j
    }

    nums[j] = temp
  }

  return nums
}
