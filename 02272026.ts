// Kth smallest element in a BST. (Binary tree)

function kthSmallest(root: TreeNode | null, k: number): number {
  let result = 0;

  // In-order depth first search
  (function dfs(node: TreeNode | null): void {
    if (!node || k < 1) {
      return undefined;
    }

    const left = dfs(node.left);

    // If k equals 0, resassign result to the node value. Else, decrement k.
    if (!--k) {
      result = node.val;
    }

    const right = dfs(node.right);

    return undefined;
  })(root);

  return result;
}

// https://leetcode.com/problems/kth-smallest-element-in-a-bst/

// root: TreeNode | null. k <= number of nodes <= 10^4. 0 <= Node.val <= 10^4.
// k: number. 1 <= k <= number of nodes.
// Return the kth smallest value (1-indexed) of all nodes in the tree.
