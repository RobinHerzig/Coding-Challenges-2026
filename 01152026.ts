// Lowest common ancestor of binary search tree. (Binary tree)

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  // Find differences between root value and p/q values.
  // If both are positive or negative, a lower common ancestor exists.
  const searchRight = root.val - p.val < 0 && root.val - q.val < 0;
  const searchLeft = root.val - p.val > 0 && root.val - q.val > 0;

  if (searchRight) {
    return lowestCommonAncestor(root.right, p, q);
  } else if (searchLeft) {
    return lowestCommonAncestor(root.left, p, q);
  }

  return root;
}

// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

// root: TreeNode | null. 2 <= number of nodes <= 10^5. -10^9 <= Node.val <= 10^9. All values are unique.
// p: TreeNode | null. Node exists in the BST.
// q: TreeNode | null. Node exists in the BST.
// Retrn the lower common ancestor of p and q.
// - The ancestor can be p or q itself.
