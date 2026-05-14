// Add two numbers. (Linked list)

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const l3 = new ListNode();

  let l1Curr = l1;
  let l2Curr = l2;
  let l3Curr = l3;
  let carryOver = false;

  while (l1Curr || l2Curr || carryOver) {
    const l1Val = l1Curr?.val || 0;
    const l2Val = l2Curr?.val || 0;
    const sum: number = l1Val + l2Val + Number(carryOver);

    carryOver = sum >= 10;
    const l3Val = sum % 10;

    const l3Node = new ListNode(l3Val);
    l3Curr.next = l3Node;

    l1Curr = l1Curr?.next;
    l2Curr = l2Curr?.next;
    l3Curr = l3Curr?.next;
  }

  return l3.next;
}

// console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]), [7, 0, 8]); // 342 + 465 = 807
// console.log(addTwoNumbers([0], [0]), [0]);
// console.log(addTwoNumbers([[9, 9, 9, 9, 9, 9, 9]], [9, 9, 9, 9]), [8, 9, 9, 9, 0, 0, 0, 1]);
// https://leetcode.com/problems/add-two-numbers/

// l1: ListNode | null. 1 <= number of nodes <= 100. 0 <= Node.val <= 9. No leading zeros.
// l2: ListNode | null. 1 <= number of nodes <= 100. 0 <= Node.val <= 9. No leading zeros.
// Concatenate both linked lists and return the sum of the two values.
