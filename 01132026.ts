// Balanced binary tree. (Binary tree)

function isBalanced(root: TreeNode | null): boolean {
  let result = true;

  (function dfs(node: TreeNode | null): number {
    if (!node) {
      return 0;
    }

    const left: number = dfs(node.left);
    const right: number = dfs(node.right);

    if (Math.abs(left - right) > 1) {
      result = false;
    }

    return Math.max(left, right) + 1;
  })(root);

  return result;
}

// https://leetcode.com/problems/balanced-binary-tree/

// root: TreeNode | null. 0 <= number of nodes <= 5000. -10^4 <= Node.val <= 10^4.
// Return true if the binary tree is height-balanced.
// - A height-balanced binary tree is one in which the depth of the two subtrees of every node never differs by more than one.
