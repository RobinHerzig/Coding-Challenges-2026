// Count good nodes. (Binary tree)

function goodNodes(root: TreeNode | null, max?: number): number {
  if (!root) {
    return 0;
  }

  max = Math.max(max ?? root.val, root.val);

  const isGood = max === root.val;
  const left = goodNodes(root.left, max);
  const right = goodNodes(root.right, max);

  return left + right + Number(isGood);
}

// https://leetcode.com/problems/count-good-nodes-in-binary-tree/

// root: TreeNode | null. 1 <= number of nodes <= 10^5. -10^4 <= Node.val <= 10^4.
// Return the number of good nodes in the tree.
// - A good node is one where there are no greater values along the path from the root.
