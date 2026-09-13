// Reverse sublist. (Linked list)

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
  const dummy = new ListNode(0, head);
  let cur = dummy;
  let i = 0;

  // Place pointers.
  let subHead = dummy;
  let subTail = dummy;

  while (cur) {
    if (i === left - 1) {
      subHead = cur;
    }

    if (i === left) {
      subTail = cur;
      break;
    }

    cur = cur.next;
    i++;
  }

  // Reverse list.
  let prev = null;

  while (cur) {
    if (i === right + 1) {
      break;
    }

    const next = cur.next;

    cur.next = prev;
    prev = cur;
    cur = next;
    i++;
  }

  // Remap next nodes.
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
