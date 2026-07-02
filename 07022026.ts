// Maximum depth of binary tree. (Binary tree) (Breadth-first search)

function maxDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  let depth = 0;
  const stack: TreeNode[] = [root];

  while (stack.length) {
    depth++;

    const length = stack.length;

    for (let i = 0; i < length; i++) {
      const node = stack.shift();

      const left = node.left;
      const right = node.right;

      if (left) {
        stack.push(left);
      }

      if (right) {
        stack.push(right);
      }
    }
  }

  return depth;
}

// https://leetcode.com/problems/maximum-depth-of-binary-tree/

// root: TreeNode | null. 0 <= number of nodes <= 10^4. -100 <= Node.val <= 100.
// Return the tree's maximum depth using a breadth-first search algorithm.