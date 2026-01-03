// Maximum diameter of binary tree. (Binary tree)

function diameterOfBinaryTree(root: TreeNode | null): number {
  let maxDiameter = 0;

  (function dfs(node: TreeNode | null): number {
    if (!node) {
      return 0;
    }

    // Step 1: Calculate length of left and right branches.
    const left = dfs(node.left);
    const right = dfs(node.right);

    // Step 2: Sum of branches is the diameter.
    const total = left + right;
    maxDiameter = Math.max(maxDiameter, total);

    // Step 3: Return the larger branch + 1.
    const maxBranch = Math.max(left, right);
    return maxBranch + 1;
  })(root);

  return maxDiameter;
}

// https://leetcode.com/problems/diameter-of-binary-tree/

// root: TreeNode | null. 1 <= number of nodes <= 10^4. -100 <= Node.val <= 100.
// Return the tree's longest length of the tree.
// - Length is the longest distance between two nodes. It may pass through the root.
