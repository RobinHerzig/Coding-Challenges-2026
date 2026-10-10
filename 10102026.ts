// Count good nodes. (Binary tree)

function goodNodes(root: TreeNode | null): number {
  let count = 0;

  function dfs(node: TreeNode | null, max: number): TreeNode | null {
    if (!node) {
      return;
    }

    const isGood = max <= node.val;

    if (isGood) {
      count++;
    }

    max = Math.max(max, node.val);

    const left = dfs(node.left, max);
    const right = dfs(node.right, max);

    return node;
  }

  dfs(root, root.val);
  return count;
}
// https://leetcode.com/problems/count-good-nodes-in-binary-tree/

// root: TreeNode | null. 1 <= number of nodes <= 10^5. -10^4 <= Node.val <= 10^4.
// Return the number of good nodes in the tree.
// - A good node is one where there are no greater values along the path from the root.
