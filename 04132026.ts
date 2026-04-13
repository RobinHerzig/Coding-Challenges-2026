// Lowest common ancestor of binary search tree. (Binary tree)

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  if (root === p || root === q) {
    return root;
  }

  const nextP = p.val < root.val ? root.left : root.right;
  const nextQ = q.val < root.val ? root.left : root.right;

  if (nextP === nextQ) {
    // p and q share this ancestor.
    return lowestCommonAncestor(nextP, p, q);
  }

  return root;
}

// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

// root: TreeNode | null. 2 <= number of nodes <= 10^5. -10^9 <= Node.val <= 10^9. All values are unique.
// p: TreeNode | null. Node exists in the BST.
// q: TreeNode | null. Node exists in the BST.
// Return the lower common ancestor of p and q.
// - The ancestor can be p or q itself.
