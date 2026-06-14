// Reorder list. (Linked list)

function reorderList(head: ListNode | null): void {
  if (!head.next) {
    return undefined;
  }

  const dummy = new ListNode(0, head);
  let slow = dummy;
  let fast = dummy;

  // Split linked list in half.
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Reverse second half.
  let cur = slow.next;
  let prev = null;

  slow.next = null; // Disconnect left and right halves.

  while (cur) {
    const next = cur.next;

    cur.next = prev;
    prev = cur;
    cur = next;
  }

  // Zip list back together.
  let a = head;
  let b = prev;

  while (b) {
    const nextA = a.next;
    const nextB = b.next;

    a.next = b;
    b.next = nextA;

    a = nextA;
    b = nextB;
  }

  return undefined;
}

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] => [1, 10, 2, 9, 3, 8, 4, 7, 5, 6]
// https://leetcode.com/problems/reorder-list/

// head: ListNode | null. 1 <= number of nodes <= 5*10^4. 1 <= Node.val <= 1000.
// Reorder the linked list like so: Node1, NodeN-1, Node2, NodeN-2...
// - Modify in-place. Do not return anything.
