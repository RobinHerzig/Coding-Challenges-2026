// Count good nodes. (Binary tree)

function goodNodes(root: TreeNode | null): number {
  function dfs(node: TreeNode | null, max): number {
    if (!node) {
      return 0;
    }

    const isGood = node.val >= max;
    max = Math.max(max, node.val);

    const left = dfs(node.left, max);
    const right = dfs(node.right, max);

    return left + right + Number(isGood);
  }

  return dfs(root, root.val);
}

// https://leetcode.com/problems/count-good-nodes-in-binary-tree/

// root: TreeNode | null. 1 <= number of nodes <= 10^5. -10^4 <= Node.val <= 10^4.
// Return the number of good nodes in the tree.
// - A good node is one where there are no greater values along the path from the root.
