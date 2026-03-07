// Kth smallest element in a BST. (Binary tree)

function kthSmallest(root: TreeNode | null, k: number): number {
  let result = 0;

  (function dfs(node: TreeNode | null): void {
    if (!node || k <= 0) {
      return undefined;
    }

    dfs(node.left);

    if (!--k) {
      result = node.val;
    }

    dfs(node.right);

    return undefined;
  })(root);

  return result;
}

// https://leetcode.com/problems/kth-smallest-element-in-a-bst/

// root: TreeNode | null. k <= number of nodes <= 10^4. 0 <= Node.val <= 10^4.
// k: number. 1 <= k <= number of nodes.
// Return the kth smallest value (1-indexed) of all nodes in the tree.
