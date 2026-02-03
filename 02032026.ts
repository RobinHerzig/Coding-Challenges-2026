// Validate binary search tree. (Binary tree)

function isValidBST(root: TreeNode | null): boolean {
  function dfs(root: TreeNode | null, left: number, right: number): boolean {
    if (!root) {
      return true;
    }

    if (root.val <= left || root.val >= right) {
      return false;
    }

    return dfs(root.left, left, root.val) && dfs(root.right, root.val, right);
  }

  return dfs(root, -Infinity, Infinity);
}

// https://leetcode.com/problems/validate-binary-search-tree/

// root: TreeNode | null. 1 <= number of nodes <= 10^4. -2^31 <= Node.val <= 2^31 - 1.
// Return true if the BST is valid.
// - Left subtree contains nodes with strictly lower value.
// - Right subtree contains nodes with scrticly greater value.
// - Both left and right subtrees are also BST.
