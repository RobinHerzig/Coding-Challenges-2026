// Subtree of another tree. (Binary tree)

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  let result = false;

  // Step 1: Iterate each node of root.
  (function dfs(node: TreeNode | null): void {
    if (!node || result) {
      return undefined;
    }

    // Step 2: If node.val and subRoot.val match, test if subtree.
    const curr = testSubtree(node, subRoot);

    if (curr === true) {
      result = true;
      return undefined;
    }

    // Step 3: If no match, recursively call left and right children.
    dfs(node.left);
    dfs(node.right);

    return undefined;
  })(root);

  function testSubtree(nodeA: TreeNode | null, nodeB: TreeNode | null): boolean {
    if (!nodeA && !nodeB) {
      return true;
    }

    if (!nodeA || !nodeB) {
      return false;
    }

    if (nodeA.val !== nodeB.val) {
      return false;
    }

    const left = testSubtree(nodeA.left, nodeB.left);
    const right = testSubtree(nodeA.right, nodeB.right);

    return left && right;
  }

  return result;
}

// https://leetcode.com/problems/subtree-of-another-tree/

// root: TreeNode | null. 1 <= Number of nodes <= 2000. -10^4 <= Node.val <= 10^4.
// subRoot: TreeNode | null. 1 <= Number of nodes <= 1000. -10^4 <= Node.val <= 10^4.
// Return true if subRoot is a subtree of root.
// - A subtree has the same structure and node values of another tree.
