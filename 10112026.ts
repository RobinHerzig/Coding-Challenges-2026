// Reverse sublist. (Linked list)

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
  const dummy = new ListNode(0, head);

  // Step 1: Place pointers.
  head = dummy;
  let a = dummy;
  let b = dummy;

  for (let i = 0; i < left; i++) {
    a = head;
    head = head.next;
    b = head;
  }

  // Step 2: Reverse sublist.
  let cur = head;
  let prev = null;

  for (let i = 0; i < right - left + 1; i++) {
    const next = cur.next;

    cur.next = prev;
    prev = cur;
    cur = next;
  }

  // Step 3: Reconnect nodes.
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
