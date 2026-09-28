// Reverse sublist. (Linked list)

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
  const dummy = new ListNode(0, head);
  let cur = dummy;
  let subHead = null;
  let subTail = null;
  let i = 0;

  // Place pointers.
  while (i < left) {
    subHead = cur;
    subTail = cur.next;

    cur = cur.next;
    i++;
  }

  // Reverse list.
  let prev = null;

  while (i <= right) {
    const next = cur.next;

    cur.next = prev;
    prev = cur;
    cur = next;
    i++;
  }

  // Remap nodes.
  subHead.next = prev;
  subTail.next = cur;

  return dummy.next;
}

// https://leetcode.com/problems/reverse-linked-list-ii/

// head: _Node| null. 1 <= number of nodes <= 500. -500 <= Node.val <= 500.
// left: number. 1 <= left <= right. Node index.
// right: number. left <= right <= number of nodes. Node index.
// Return the head after reversing the sublist.
// - List is 1-indexed.
