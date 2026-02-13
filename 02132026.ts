// Count good nodes. (Binary tree)

function goodNodes(root: TreeNode | null, prevMax?: number | null): number {
  if (!root) {
    return 0;
  }

  // Edge case when prevMax is null or undefined (root node).
  if (prevMax == null) {
    prevMax = root.val;
  }

  // Step 1: Track max value.
  const currMax = Math.max(prevMax, root.val);

  // Step 2: Node is good when value is greater or less than current max.
  const isGood = root.val >= currMax;

  // Step 3: Check left and right branches for good nodes.
  const left = goodNodes(root.left, currMax);
  const right = goodNodes(root.right, currMax);

  return left + right + Number(isGood);
}

// https://leetcode.com/problems/count-good-nodes-in-binary-tree/

// root: TreeNode | null. 1 <= number of nodes <= 10^5. -10^4 <= Node.val <= 10^4.
// Return the number of good nodes in the tree.
// - A good node is one where there are no greater values along the path from the root.
