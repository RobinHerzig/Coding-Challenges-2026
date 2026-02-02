// Count good nodes. (Binary tree)

function goodNodes(root: TreeNode | null): number {
  let result = 0;

  (function dfs(node: TreeNode | null, maxVal: number): void {
    if (!node) {
      return undefined;
    }

    // Step 1: Compare greatest value to current node.
    if (maxVal <= node.val) {
      result++;
    }

    // Step 2: Update greatest value and continue dfs algorithm.
    maxVal = Math.max(maxVal, node.val);

    dfs(node.left, maxVal);
    dfs(node.right, maxVal);

    return undefined;
  })(root, root.val);

  return result;
}

// https://leetcode.com/problems/count-good-nodes-in-binary-tree/

// root: TreeNode | null. 1 <= number of nodes <= 10^5. -10^4 <= Node.val <= 10^4.
// Return the number of good nodes in the tree.
// - A good node is one where there are no greater values along the path from the root.
