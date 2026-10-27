// Reverse sublist. (Linked list)

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
  const dummy = new ListNode(0, head);
  let a = dummy;
  let b = dummy;

  // Place pointers
  for (let i = 1; i < left; i++) {
    a = a.next;
    b = b.next;
  }

  b = b.next;

  // Reverse list
  let prev = null;
  let cur = b;

  for (let i = left - 1; i < right; i++) {
    const next = cur.next;

    cur.next = prev;
    prev = cur;
    cur = next;
  }

  // Remap pointers
  a.next = prev;
  b.next = cur;

  return dummy.next;
}

// https://leetcode.com/problems/reverse-linked-list-ii/

// head: _Node| null. 1 <= number of nodes <= 500. -500 <= Node.val <= 500.
// left: number. 1 <= left <= right. Node index.
// right: number. left <= right <= number of nodes. Node index.
// Return the head after reversing the sublist.
// - List is 1-indexed.
