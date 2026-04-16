// Koko Eating Bananas. (Binary search)

function minEatingSpeed(piles: number[], hours: number): number {
  let left = 1; // Lowest possible rate
  let right = Math.max(...piles); // Highest potential rate

  while (left <= right) {
    const rate = Math.floor((left + right) / 2);
    const actualHours = piles.reduce((a, c) => a + Math.ceil(c / rate), 0);

    if (actualHours > hours) {
      left = rate + 1;
    } else {
      right = rate - 1;
    }
  }

  return left;
}

console.log(minEatingSpeed([3, 6, 7, 11], 8), 4);
// [6, 7, 11], [2, 7, 11], [7, 11], [3, 11], [11], [7], [3], [];
console.log(minEatingSpeed([30, 11, 23, 4, 20], 5), 30);
console.log(minEatingSpeed([30, 11, 23, 4, 20], 6), 23);
console.log(minEatingSpeed([82, 37], 6), 21);
// https://leetcode.com/problems/koko-eating-bananas/

// piles: number[]. 1 <= piles.length <= 10^4. 1 <= piles[i] <= 10^9. piles[i] is number of bananas in each pile.
// hours: number. piles.length <= hours <= 10^9. Piles must be gone within this time.
// Return the minimum banana eating rate that finishes all before the guards return.
// - Koko can eat from only one pile an hour, in order.
