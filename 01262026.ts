// Maximum depth of binary tree. (Binary tree) (Breadth-first search)

function maxDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  const queue = [root];
  let result = 0;

  while (queue.length) {
    const length = queue.length;
    result++;

    for (let i = 0; i < length; i++) {
      const node = queue.shift();
      const left = node.left;
      const right = node.right;

      if (left) {
        queue.push(left);
      }

      if (right) {
        queue.push(right);
      }
    }
  }

  return result;
}

// https://leetcode.com/problems/maximum-depth-of-binary-tree/

// root: TreeNode | null. 0 <= number of nodes <= 10^4. -100 <= Node.val <= 100.
// Return the tree's maximum depth using a breadth-first search algorithm.
