// Copy list with random pointer. (Linked list)

function copyRandomList(head: _Node | null): _Node | null {
  const map = new Map<_Node, _Node>();
  const result = new _Node();
  let curr = result;

  // Deep copy of old nodes to create new nodes.
  while (head) {
    const node = new _Node();
    map.set(head, node); // Map <old node, new node>

    curr.next = node;
    curr = curr.next;
    head = head.next;
  }

  // Assign val and random properties to new nodes.
  for (const [old_node, new_node] of map) {
    new_node.val = old_node.val;
    new_node.random = map.get(old_node.random);
  }

  return result.next;
}

// https://leetcode.com/problems/copy-list-with-random-pointer/

// head: _Node| null. 0 <= number of nodes <= 1000. -10^4 <= Node.val <= 10^4.
// Return the head of the deep copy of the list.
// - All nodes contain a random_index attribute, pointing to another node.
// - All returned nodes must be new with identical val, next, and random values.
// - The random pointer must point to the new nodes as well.
