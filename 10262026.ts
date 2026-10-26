// Lowest common ancestor of binary search tree. (Binary tree)

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  const cur = root.val;
  const moveLeft = p.val < cur && q.val < cur;
  const moveRight = p.val > cur && q.val > cur;

  if (moveLeft) {
    return lowestCommonAncestor(root.left, p, q);
  } else if (moveRight) {
    return lowestCommonAncestor(root.right, p, q);
  } else {
    return root;
  }
}

// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

// root: TreeNode | null. 2 <= number of nodes <= 10^5. -10^9 <= Node.val <= 10^9. All values are unique.
// p: TreeNode. Node exists in the BST.
// q: TreeNode. Node exists in the BST.
// Return the lower common ancestor of p and q.
// - The ancestor can be p or q itself.
