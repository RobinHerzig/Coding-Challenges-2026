// Add two numbers. (Linked list)

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const l3 = new ListNode(0);
  let n1 = l1;
  let n2 = l2;
  let n3 = l3;
  let carryover = false;

  while (n1 || n2 || carryover) {
    const v1 = n1?.val ?? 0;
    const v2 = n2?.val ?? 0;
    const sum = v1 + v2 + Number(carryover);
    const v3 = sum % 10;

    carryover = sum >= 10;
    n3.next = new ListNode(v3);

    n1 = n1?.next;
    n2 = n2?.next;
    n3 = n3.next;
  }

  return l3.next;
}

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]), [7, 0, 8]); // 342 + 465 = 807
console.log(addTwoNumbers([0], [0]), [0]);
console.log(addTwoNumbers([[9, 9, 9, 9, 9, 9, 9]], [9, 9, 9, 9]), [8, 9, 9, 9, 0, 0, 0, 1]);
// https://leetcode.com/problems/add-two-numbers/

// l1: ListNode | null. 1 <= number of nodes <= 100. 0 <= Node.val <= 9. No leading zeros.
// l2: ListNode | null. 1 <= number of nodes <= 100. 0 <= Node.val <= 9. No leading zeros.
// Concatenate both linked lists and return the sum of the two values.
