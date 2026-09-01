// Remove Nth node from end of list. (Linked list)

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const dummy = new ListNode(0, head);
  let a = dummy;
  let b = dummy;

  // Step 1: Increment a forward n nodes.
  while (n) {
    a = a.next;
    n--;
  }

  // Step 2: Increment a and b until a reaches end of list.
  while (a && a.next) {
    a = a.next;
    b = b.next;
  }

  // Step 3: Remove nth node.
  b.next = b && b.next ? b.next.next : null;

  return dummy.next;
}

// console.log(removeNthFromEnd([1, 2, 3, 4, 5], 2), [1, 2, 3, 5]); // Remove the fourth node, as it's 2nd from the end.
// console.log(removeNthFromEnd([1], 1), []);
// console.log(removeNthFromEnd([1, 2], 1), [1]);
// https://leetcode.com/problems/remove-nth-node-from-end-of-list/

// head: ListNode | null. 1 <= number of nodes <= 30. 0 <= Node.val <= 100.
// n: number. 1 <= n <= number of nodes.
// Return the head after removing the nth node from the end of the list.
// - Achieve this in one pass.
