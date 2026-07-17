// Binary tree from right side. (Binary tree)

function rightSideView(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }

  const result: number[] = [];
  const queue: TreeNode[] = [root];

  // Breadth-first search
  while (queue.length) {
    const length = queue.length;
    result.push(queue.at(-1).val); // Copy right-most value into result

    for (let i = 0; i < length; i++) {
      const node = queue.shift();

      if (node.left) {
        const left = node.left!;
        queue.push(left);
      }

      if (node.right) {
        const right = node.right!;
        queue.push(right);
      }
    }
  }

  return result;
}

// https://leetcode.com/problems/binary-tree-right-side-view/

// root: TreeNode | null. 0 <= number of nodes <= 10^4. -100 <= Node.val <= 100.
// Return an array of values that are on the rightmost side for each level.
// - Arrange from top to bottom.
