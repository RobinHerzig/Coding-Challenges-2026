// Copy list with random pointer. (Linked list)

function copyRandomList(head: _Node | null): _Node | null {
  const map = new Map<_Node, _Node>(); // <oldNode, newNode>
  let cur = head;

  // Build the cache with new nodes.
  while (cur) {
    const newNode = new _Node();
    map.set(cur, newNode);
    cur = cur.next;
  }

  // Assign values to new nodes.
  for (const [oldNode, newNode] of map) {
    newNode.val = oldNode.val;
    newNode.next = map.get(oldNode.next) || null;
    newNode.random = map.get(oldNode.random) || null;
  }

  return map.get(head);
}

// https://leetcode.com/problems/copy-list-with-random-pointer/

// head: _Node| null. 0 <= number of nodes <= 1000. -10^4 <= Node.val <= 10^4.
// Return the head of the deep copy of the list.
// - All nodes contain a random_index attribute, pointing to another node.
// - All returned nodes must be new with identical val, next, and random values.
// - The random pointer must point to the new nodes as well.
