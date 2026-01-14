// Subtree of another tree. (Binary tree)

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  let result = false;

  // Step 1: Iterate each node from root to find match with subRoot.
  (function dfs(node: TreeNode | null): void {
    if (!node || result) {
      return undefined;
    }

    if (node.val === subRoot.val) {
      result = compareTrees(node, subRoot);
    }

    dfs(node.left);
    dfs(node.right);

    return undefined;
  })(root);

  return result;
}

// Step 2: Compare node structure and values.
function compareTrees(nodeA: TreeNode | null, nodeB: TreeNode | null): boolean {
  if (!nodeA && !nodeB) {
    return true;
  }

  if (!nodeA || !nodeB) {
    return false;
  }

  if (nodeA.val !== nodeB.val) {
    return false;
  }

  return compareTrees(nodeA.left, nodeB.left) && compareTrees(nodeA.right, nodeB.right);
}

// https://leetcode.com/problems/subtree-of-another-tree/

// root: TreeNode | null. 1 <= Number of nodes <= 2000. -10^4 <= Node.val <= 10^4.
// subRoot: TreeNode | null. 1 <= Number of nodes <= 1000. -10^4 <= Node.val <= 10^4.
// Return true if subRoot is a subtree of root.
// - A subtree has the same structure and node values of another tree.
