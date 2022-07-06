export class TreeNode {
  val: number | null;
  left: TreeNode | null | undefined = null;
  right: TreeNode | null | undefined = null;

  constructor(
    val: number | null,
    left?: TreeNode | null,
    right?: TreeNode | null
  ) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// Optimize array to binary tree
export function arr2tree(arr: (number | null)[]) {
  if (arr[0] == null) return null;

  const queue: TreeNode[] = [];
  const root = new TreeNode(arr[0]);

  queue.unshift(root);

  let isLeft = true;
  for (let i = 1; i < arr.length; ++i) {
    const peekEl = queue[queue.length - 1];

    if (isLeft) {
      if (arr[i] != null) {
        peekEl.left = new TreeNode(arr[i]);
        queue.unshift(peekEl.left);
      }
      isLeft = false;
    } else {
      if (arr[i] != null) {
        peekEl.right = new TreeNode(arr[i]);
        queue.unshift(peekEl.right);
      }

      queue.pop();
      isLeft = true;
    }
  }

  return root;
}

// Not optimizing the array to binary tree
export function arr2tree2(arr: (number | null)[]) {
  return createTreeNode(arr, 1);

  function createTreeNode(
    arr: (number | null)[],
    index: number
  ): TreeNode | null {
    if (arr[index - 1] == null) {
      return null;
    }

    if (index > arr.length) {
      return null;
    }

    const node = new TreeNode(arr[index - 1]);

    node.left = createTreeNode(arr, 2 * index);
    node.right = createTreeNode(arr, 2 * index + 1);

    return node;
  }
}
