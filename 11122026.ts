// Fibonacci sequence.

function fib(num: number): number {
  if (num === 0 || num === 1) {
    return num;
  }

  const cache: number[] = [0, 1];

  for (let i = 1; i < num; i++) {
    cache.push(cache.at(-1)! + cache.at(-2)!);
  }

  return cache.at(-1)!;
}

console.log(fib(0), 0);
console.log(fib(1), 1);
console.log(fib(3), 2);
console.log(fib(20), 6765);
// https://leetcode.com/problems/fibonacci-number/

// num: number. 0 <= num <= 30.
// Return the fibonacci value at num.
