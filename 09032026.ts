// Reverse sublist. (Linked list)

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
  const dummy = new ListNode(0, head);
  let sublistHead = null;
  let sublistTail = null;
  let cur = dummy;
  let prev = null;
  let i = 0;

  // Set sublistHead and sublistTail.
  while (i < left) {
    if (i === left - 1) {
      sublistHead = cur;
      sublistTail = cur.next;

      break;
    }

    cur = cur.next;
    i++;
  }

  // Reverse list.
  while (i <= right) {
    const next = cur.next;

    cur.next = prev;
    prev = cur;
    cur = next;
    i++;
  }

  // Rejoin reversed sublist.
  sublistHead.next = prev;
  sublistTail.next = cur;

  return dummy.next;
}

// https://leetcode.com/problems/reverse-linked-list-ii/

// head: _Node| null. 1 <= number of nodes <= 500. -500 <= Node.val <= 500.
// left: number. 1 <= left <= right. Node index.
// right: number. left <= right <= number of nodes. Node index.
// Return the head after reversing the sublist. The list is 1-indexed.
