// Subtree of another tree. (Binary tree)

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  function dfs(node: TreeNode | null): boolean {
    if (!node) {
      return false;
    }

    const result = isSameTree(node, subRoot);

    if (result) {
      return true;
    }

    const left = dfs(node.left);
    const right = dfs(node.right);

    return left || right;
  }

  return dfs(root);
}

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (!p && !q) {
    return true;
  }

  if (!p || !q) {
    return false;
  }

  if (p.val !== q.val) {
    return false;
  }

  const left = isSameTree(p.left, q.left);
  const right = isSameTree(p.right, q.right);

  return left && right;
}

// https://leetcode.com/problems/subtree-of-another-tree/

// root: TreeNode | null. 1 <= Number of nodes <= 2000. -10^4 <= Node.val <= 10^4.
// subRoot: TreeNode | null. 1 <= Number of nodes <= 1000. -10^4 <= Node.val <= 10^4.
// Return true if subRoot is a subtree of root.
// - A subtree has the same structure and node values of another tree.
