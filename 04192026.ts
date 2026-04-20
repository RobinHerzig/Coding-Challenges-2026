// Count good nodes. (Binary tree)

function goodNodes(root: TreeNode | null, maxVal?: number): number {
  if (!root) {
    return 0;
  }

  maxVal = Math.max(maxVal ?? root.val, root.val);
  const isGood = root.val >= maxVal;

  const left = goodNodes(root.left, maxVal);
  const right = goodNodes(root.right, maxVal);

  return Number(isGood) + left + right;
}

// https://leetcode.com/problems/count-good-nodes-in-binary-tree/

// root: TreeNode | null. 1 <= number of nodes <= 10^5. -10^4 <= Node.val <= 10^4.
// Return the number of good nodes in the tree.
// - A good node is one where there are no greater values along the path from the root.
