// Top K frequent elements. (Priority queue)

function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map<number, number>();
  const heap = new MaxPriorityQueue<[number, number]>((node) => node[1]);
  const result: number[] = [];

  // Populate the map.
  nums.forEach((num) => map.set(num, (map.get(num) || 0) + 1));

  // Populate the heap.
  for (const [num, count] of map) {
    heap.enqueue([num, count]);
  }

  // Populate result.
  while (k) {
    const node = heap.dequeue();
    const num = node[0];
    result.push(num);
    k--;
  }

  return result;
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2), [1, 2]);
console.log(topKFrequent([1], 1), [1]);
// https://leetcode.com/problems/top-k-frequent-elements/

// nums: number[]. 1 <= nums.length <= 10^5. -10^4 <= nums[i] <= 10^4.
// k: number. 1 <= k <= number of unique elements in the array.
// Return the K most frequent elements. Each element in the return should be unique.
