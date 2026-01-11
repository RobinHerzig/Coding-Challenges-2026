// Last stone weight. (Priority queue)

function lastStoneWeight(stones: number[]): number {
  const heap = new MaxPriorityQueue<number>();

  // Step 1: Populate heap.
  stones.forEach((stone) => heap.enqueue(stone));

  // Step 2: Pop the top two stones and push the difference.
  while (heap.size() > 1) {
    const a = heap.dequeue();
    const b = heap.dequeue();
    const difference = a - b;

    heap.enqueue(difference);
  }

  // Step 3: Add the remainder.
  return heap.dequeue();
}

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]), 1);
console.log(lastStoneWeight([1]), 1);
// https://leetcode.com/problems/last-stone-weight

// stones: number[]. 1 <= stones.length <= 30. 1 <= stones[i] <= 1000.
// Remove the two heaviest stones and add the difference back into the array.
// Repeat until, at most, one stone exists, and return that value.
// If no stones exist, return 0.
