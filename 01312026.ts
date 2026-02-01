// Subtree of another tree. (Binary tree)

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  let result = false;

  (function dfs(node: TreeNode | null): void {
    if (!node || result) {
      return undefined;
    }

    if (node.val === subRoot.val) {
      result = compareNodes(node, subRoot);
      console.log(result);
    }

    dfs(node.left);
    dfs(node.right);

    return undefined;
  })(root);

  return result;
}

function compareNodes(nodeA: TreeNode | null, nodeB: TreeNode | null): boolean {
  if (!nodeA && !nodeB) {
    return true;
  }

  if (!nodeA || !nodeB) {
    return false;
  }

  if (nodeA.val !== nodeB.val) {
    return false;
  }

  const left = compareNodes(nodeA.left, nodeB.left);
  const right = compareNodes(nodeA.right, nodeB.right);

  return left && right;
}

// https://leetcode.com/problems/subtree-of-another-tree/

// root: TreeNode | null. 1 <= Number of nodes <= 2000. -10^4 <= Node.val <= 10^4.
// subRoot: TreeNode | null. 1 <= Number of nodes <= 1000. -10^4 <= Node.val <= 10^4.
// Return true if subRoot is a subtree of root.
// - A subtree has the same structure and node values of another tree.
