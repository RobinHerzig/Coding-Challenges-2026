// Merge sorted lists. (Linked list)

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  const list3 = new ListNode(0);
  let p1 = list1;
  let p2 = list2;
  let p3 = list3;

  while (p1 && p2) {
    const val1 = p1.val;
    const val2 = p2.val;

    if (val1 < val2) {
      const next = p1.next;

      p1.next = null;
      p3.next = p1;
      p1 = next;
    } else {
      const next = p2.next;

      p2.next = null;
      p3.next = p2;
      p2 = next;
    }

    p3 = p3.next;
  }

  if (p1) {
    p3.next = p1;
  }

  if (p2) {
    p3.next = p2;
  }

  return list3.next;
}

// https://leetcode.com/problems/merge-two-sorted-lists/

// list1: ListNode | null. 0 <= number of nodes <= 50. -100 <= Node.val <= 100. Sorted in non-decreasing order.
// list2: ListNode | null. 0 <= number of nodes <= 50. -100 <= Node.val <= 100. Sorted in non-decreasing order.
// Merge the lists into a single sorted list, and return the head.
