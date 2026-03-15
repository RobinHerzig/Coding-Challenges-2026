// Validate binary search tree. (Binary tree)

function isValidBST(root: TreeNode | null): boolean {
  let result = true;

  (function dfs(node: TreeNode | null, min: number, max: number): boolean {
    if (!node || !result) {
      return true;
    }

    const isValid = node.val > min && node.val < max;
    const left = dfs(node.left, min, node.val);
    const right = dfs(node.right, node.val, max);

    result = result && isValid && left && right;

    return isValid;
  })(root, -Infinity, Infinity);

  return result;
}

// https://leetcode.com/problems/validate-binary-search-tree/

// root: TreeNode | null. 1 <= number of nodes <= 10^4. -2^31 <= Node.val <= 2^31 - 1.
// Return true if the BST is valid.
// - Left subtree contains nodes with strictly lower value.
// - Right subtree contains nodes with scrticly greater value.
// - Both left and right subtrees are also BST.
