// Determine whether the list has a cycle. (Linked list) (Floyd's algorithm)

function hasCycle(head: ListNode | null): boolean {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;

    if (fast === slow) {
      return true;
    }
  }

  return false;
}

// https://leetcode.com/problems/linked-list-cycle/

// head: ListNode | null. 1 <= number of nodes <= 10^4. -10^5 <= Node.val <= 10^5.
// Return whether or not the linked list has a loop/cycle.
