// Subtree of another tree. (Binary tree)

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  let result = false;

  // Step 1: Find node in root that matches subRoot.
  (function dfs(a: TreeNode | null): void {
    if (!a || result) {
      return undefined;
    }

    if (a.val === subRoot.val && !result) {
      result = isIdentical(a, subRoot);
    }

    const left = a.left;
    const right = a.right;

    dfs(left);
    dfs(right);
  })(root);

  // Step 2: Iterate both trees and check nodes and values.
  function isIdentical(a: TreeNode | null, b: TreeNode | null): boolean {
    if (!a && !b) {
      return true;
    }

    if (!a || !b) {
      return false;
    }

    if (a.val !== b.val) {
      return false;
    }

    const left = isIdentical(a.left, b.left);
    const right = isIdentical(a.right, b.right);

    return left && right;
  }

  return result;
}

// https://leetcode.com/problems/subtree-of-another-tree/

// root: TreeNode | null. 1 <= Number of nodes <= 2000. -10^4 <= Node.val <= 10^4.
// subRoot: TreeNode | null. 1 <= Number of nodes <= 1000. -10^4 <= Node.val <= 10^4.
// Return true if subRoot is a subtree of root.
// - A subtree has the same structure and node values of another tree.
