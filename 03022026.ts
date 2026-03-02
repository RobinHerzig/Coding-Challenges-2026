// Count good nodes. (Binary tree)

function goodNodes(root: TreeNode | null): number {
  let result = 0;

  (function dfs(node: TreeNode | null, prevMax: number): number {
    if (!node) {
      return 0;
    }

    const currMax = Math.max(prevMax, node.val);
    const isGood = currMax <= node.val;

    if (isGood) {
      result++;
    }

    const left = dfs(node.left, currMax);
    const right = dfs(node.right, currMax);

    return currMax;
  })(root, root.val);

  return result;
}

// https://leetcode.com/problems/count-good-nodes-in-binary-tree/

// root: TreeNode | null. 1 <= number of nodes <= 10^5. -10^4 <= Node.val <= 10^4.
// Return the number of good nodes in the tree.
// - A good node is one where there are no greater values along the path from the root.
