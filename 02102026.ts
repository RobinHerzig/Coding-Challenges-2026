// Maximum diameter of binary tree. (Binary tree)

function diameterOfBinaryTree(root: TreeNode | null): number {
  let maxDiameter = 0;

  (function dfs(node: TreeNode | null): number {
    if (!node) {
      return 0;
    }

    const leftDepth = dfs(node.left);
    const rightDepth = dfs(node.right);

    // Calculate current diameter.
    const currDiameter = leftDepth + rightDepth;
    maxDiameter = Math.max(maxDiameter, currDiameter);

    // Return the larger branch depth.
    return Math.max(leftDepth, rightDepth) + 1;
  })(root);

  return maxDiameter;
}

// https://leetcode.com/problems/diameter-of-binary-tree/

// root: TreeNode | null. 1 <= number of nodes <= 10^4. -100 <= Node.val <= 100.
// Return the longest length of the tree.
// - Length is the longest distance between two nodes. It may not pass through the root.
