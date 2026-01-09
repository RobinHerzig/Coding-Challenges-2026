// Value swapping in nodes. (Linked list)

function swapNodes(head: ListNode | null, k: number): ListNode | null {
  let left = head;
  let right = head;
  let fast = head;

  // Step 1: Position left pointer.
  for (let i = 1; i < k; i++) {
    left = left.next;
    fast = fast.next; // To be used when placing right pointer.
  }

  // Step 2: Position right pointer.
  while (fast && fast.next) {
    fast = fast.next;
    right = right.next;
  }

  // Step 3: Swap values.
  [left.val, right.val] = [right.val, left.val];

  return head;
}

// [1, 2, 3, 4, 5], 2 => [1, 4, 3, 2, 5];
// [7, 9, 6, 6, 7, 8, 3, 0, 9, 5], 5 => [7, 9, 6, 6, 8, 7, 3, 0, 9, 5];
// [7, 9, 6, 6, 7, 8, 3, 0, 9, 5], 9 => [5, 9, 6, 6, 7, 8, 3, 0, 9, 7];
// https://leetcode.com/problems/swapping-nodes-in-a-linked-list/

// head: ListNode | null. k <= number of nodes <= 10^5. 0 <= Node.val <= 100.
// k: number. 1 <= k <= number of nodes.
// Return the head after swapping the kth-from-the-end value with kth-from-the-beginning value. 1-index.
// - Don't swap the nodes themselves.
