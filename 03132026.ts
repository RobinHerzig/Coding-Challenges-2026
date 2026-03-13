// Maximum depth of binary tree. (Binary tree) (Depth-first search)

function maxDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  const left = maxDepth(root.left);
  const right = maxDepth(root.right);

  return Math.max(left, right) + 1;
}

// https://leetcode.com/problems/maximum-depth-of-binary-tree/

// root: TreeNode | null. 0 <= number of nodes <= 10^4. -100 <= Node.val <= 100.
// Return the tree's maximum depth using a depth-first search algorithm.
