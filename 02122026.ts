// Reorder list. (Linked list)

function reorderList(head: ListNode | null): void {
  
}

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] => [1, 10, 2, 9, 3, 8, 4, 7, 5, 6]
// https://leetcode.com/problems/reorder-list/

// head: ListNode | null. 1 <= number of nodes <= 5*10^4. 1 <= Node.val <= 1000.
// Reorder the linked list like so: Node1, NodeN-1, Node2, NodeN-2...
// - Modify in-place. Do not return anything.