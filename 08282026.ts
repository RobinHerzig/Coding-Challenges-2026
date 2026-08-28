// Reverse sublist. (Linked list)

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
  const dummy = new ListNode(0, head);
  let cur = dummy;
  let i = 0;

  // Set head and tail pointers.
  let sublistHead = null;
  let sublistTail = null;

  while (i <= left) {
    if (i === left) {
      sublistTail = cur;
      break;
    }

    sublistHead = cur;
    cur = cur.next;
    i++;
  }

  // Reverse sublist.
  let prev = null;

  while (i <= right) {
    const next = cur.next;

    cur.next = prev;
    prev = cur;
    cur = next;
    i++;
  }

  // Remap pointers to reintegrate sublist.
  sublistHead.next = prev;
  sublistTail.next = cur;

  return dummy.next;
}

// https://leetcode.com/problems/reverse-linked-list-ii/

// head: _Node| null. 1 <= number of nodes <= 500. -500 <= Node.val <= 500.
// left: number. 1 <= left <= right. Node index.
// right: number. left <= right <= number of nodes. Node index.
// Return the head after reversing the sublist.
// - List is 1-indexed.
