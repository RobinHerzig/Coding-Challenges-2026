// Lowest common ancestor of binary search tree. (Binary tree)

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode, q: TreeNode): TreeNode | null {
  const curVal = root.val;
  const pVal = p.val;
  const qVal = q.val;

  if (pVal < curVal && qVal < curVal) {
    return lowestCommonAncestor(root.left, p, q);
  } else if (pVal > curVal && qVal > curVal) {
    return lowestCommonAncestor(root.right, p, q);
  }

  return root;
}

// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

// root: TreeNode | null. 2 <= number of nodes <= 10^5. -10^9 <= Node.val <= 10^9. All values are unique.
// p: TreeNode. Node exists in the BST.
// q: TreeNode. Node exists in the BST.
// Return the lower common ancestor of p and q.
// - The ancestor can be p or q itself.
