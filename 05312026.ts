// Reverse linked list. (Linked list)

function reverseList(head: ListNode | null): ListNode | null {
  let curr = head;
  let prev = null;

  while (curr) {
    const next = curr.next;

    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}

// https://leetcode.com/problems/reverse-linked-list/

// head: ListNode | null. 0 <= number of nodes <= 5000. -5000 <= Node.val <= 5000.
// Reverse and return the provided linked list.
