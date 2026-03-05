// Copy list with random pointer. (Linked list)

function copyRandomList(head: _Node | null): _Node | null {
  const map = new Map<_Node, _Node>(); // <old node, new node>
  let old = head;

  // Step 1: Create node and map to old node.
  while (old) {
    const node = new _Node(val);
    map.set(old, node);
    old = old.next;
  }

  old = head; // Reset old to beginning of list.

  // Step 2: Assign val, next, and random pointers to nodes.
  while (old) {
    const node = map.get(old);
    const val = old.val;
    const next = map.get(old.next) || null;
    const random = map.get(old.random) || null;

    node.val = val;
    node.next = next;
    node.random = random;

    old = old.next;
  }

  return map.get(head);
}

// https://leetcode.com/problems/copy-list-with-random-pointer/

// head: _Node| null. 0 <= number of nodes <= 1000. -10^4 <= Node.val <= 10^4.
// Return the head of the deep copy of the list.
// - All nodes contain a random_index attribute, pointing to another node.
// - All returned nodes must be new with identical val, next, and random values.
// - The random pointer must point to the new nodes as well.
