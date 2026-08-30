// Maximum diameter of binary tree. (Binary tree)

function diameterOfBinaryTree(root: TreeNode | null): number {
  let result = 0;

  function dfs(node: TreeNode | null): number {
    if (!node) {
      return 0;
    }

    const left = dfs(node.left);
    const right = dfs(node.right);
    const sum = left + right;
    const max = Math.max(left, right);

    result = Math.max(result, sum);

    return max + 1;
  }

  dfs(root);
  return result;
}

// https://leetcode.com/problems/diameter-of-binary-tree/

// root: TreeNode | null. 1 <= number of nodes <= 10^4. -100 <= Node.val <= 100.
// Return the longest length of the tree.
// - Length is the longest distance between two nodes. It may not pass through the root.
