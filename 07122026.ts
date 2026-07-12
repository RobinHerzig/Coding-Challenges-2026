// Subtree of another tree. (Binary tree)

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (!root) {
    return false;
  }

  let isMatching = false;

  if (root.val === subRoot.val) {
    isMatching = isMatchingTree(root, subRoot);
  }

  const left = isSubtree(root.left, subRoot);
  const right = isSubtree(root.right, subRoot);

  return isMatching || left || right;
}

function isMatchingTree(q: TreeNode | null, p: TreeNode | null): boolean {
  if (!q && !p) {
    return true;
  }

  if (!q || !p) {
    return false;
  }

  if (q.val !== p.val) {
    return false;
  }

  const left = isMatchingTree(q.left, p.left);
  const right = isMatchingTree(q.right, p.right);

  return left && right;
}

// https://leetcode.com/problems/subtree-of-another-tree/

// root: TreeNode | null. 1 <= Number of nodes <= 2000. -10^4 <= Node.val <= 10^4.
// subRoot: TreeNode | null. 1 <= Number of nodes <= 1000. -10^4 <= Node.val <= 10^4.
// Return true if subRoot is a subtree of root.
// - A subtree has the same structure and node values of another tree.
