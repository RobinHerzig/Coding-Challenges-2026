// Binary tree from right side. (Binary tree)

function rightSideView(root: TreeNode | null): number[] {
  const queue = [root];
  const result: number[] = [];

  // BFS algorithm
  while (queue.length) {
    const length = queue.length;
    const vals: number[] = [];

    for (let i = 0; i < length; i++) {
      const node = queue.shift();

      if (!node) {
        continue;
      }

      vals.push(node.val);
      queue.push(node.left);
      queue.push(node.right);
    }

    if (vals.length) {
      result.push(vals.at(-1)!);
    }
  }

  return result;
}

// https://leetcode.com/problems/binary-tree-right-side-view/

// root: TreeNode | null. 0 <= number of nodes <= 10^4. -100 <= Node.val <= 100.
// Return an array of values that are on the rightmost side for each level.
// - Arrange from top to bottom.
