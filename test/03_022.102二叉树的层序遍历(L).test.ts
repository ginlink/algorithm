import { arr2tree, levelOrder } from '../src';

// 给你二叉树的根节点 `root` ，返回其节点值的 **层序遍历** 。 （即逐层地，从左到右访问所有节点）。
// 输入：root = [3,9,20,null,null,15,7]
// 输出：[[3],[9,20],[15,7]]

const arr = [3, 9, 20, null, null, 15, 7];

describe('leverOrder', () => {
  it('works', () => {
    const root = arr2tree(arr);

    expect(levelOrder(root)).toEqual([[3], [9, 20], [15, 7]]);
  });
});
