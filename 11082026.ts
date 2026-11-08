// Value swapping in nodes. (Linked list)

function swapNodes(head: ListNode | null, k: number): ListNode | null {
  const dummy = new ListNode(0, head);
  let cur = dummy;
  let a = dummy;
  let b = dummy;

  // Place left pointer
  for (let i = 0; i < k; i++) {
    cur = cur.next;
    a = a.next;
  }

  // Place right pointer
  while (cur) {
    cur = cur.next;
    b = b.next;
  }

  // Swap values
  const aVal = a.val;
  const bVal = b.val;

  [a.val, b.val] = [bVal, aVal];

  return dummy.next;
}

// [1, 2, 3, 4, 5], 2 => [1, 4, 3, 2, 5];
// [7, 9, 6, 6, 7, 8, 3, 0, 9, 5], 5 => [7, 9, 6, 6, 8, 7, 3, 0, 9, 5];
// [7, 9, 6, 6, 7, 8, 3, 0, 9, 5], 9 => [5, 9, 6, 6, 7, 8, 3, 0, 9, 7];
// https://leetcode.com/problems/swapping-nodes-in-a-linked-list/

// head: ListNode | null. k <= number of nodes <= 10^5. 0 <= Node.val <= 100.
// k: number. 1 <= k <= number of nodes.
// Return the head after swapping the kth-from-the-end value with kth-from-the-beginning value. 1-index.
// - Don't swap the nodes themselves.
