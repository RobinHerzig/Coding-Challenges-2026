// Add two numbers. (Linked list)

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const head = new ListNode(null);
  let l3 = head;
  let carryOver = false;

  while (l1 || l2 || carryOver) {
    // Step 1: Calculate sum of l1.val + l2.val.
    const l1Val = l1?.val || 0;
    const l2Val = l2?.val || 0;
    const sum = l1Val + l2Val + Number(carryOver); // Carry over 1 if necessary.
    carryOver = sum >= 10;

    const l3Val = sum % 10;

    // Step 2: Create new node with this value and link to l3.
    const node = new ListNode(l3Val);
    l3.next = node;

    // Step 3: Increment all lists.
    l1 = l1?.next;
    l2 = l2?.next;
    l3 = l3.next;
  }

  return head.next;
}
// console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]), [7, 0, 8]); // 342 + 465 = 807
// console.log(addTwoNumbers([0], [0]), [0]);
// console.log(addTwoNumbers([[9, 9, 9, 9, 9, 9, 9]], [9, 9, 9, 9]), [8, 9, 9, 9, 0, 0, 0, 1]);
// https://leetcode.com/problems/add-two-numbers/

// l1: ListNode | null. 1 <= number of nodes <= 100. 0 <= Node.val <= 9. No leading zeros.
// l2: ListNode | null. 1 <= number of nodes <= 100. 0 <= Node.val <= 9. No leading zeros.
// Concatenate both linked lists and return the sum of the two values.
