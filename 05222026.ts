// Days until next higher temperature. (Monotonic stack)

function dailyTemperatures(temperatures: number[]): number[] {
  const result: number[] = Array(temperatures.length).fill(0);
  const stack: number[] = [];

  // Monotonic stack algorithm
  for (let i = 0; i < temperatures.length; i++) {
    const curr = temperatures[i];

    while (curr > temperatures[stack.at(-1)!]) {
      const j = stack.pop()!;
      const numberOfDays = i - j;
      result[j] = numberOfDays;
    }

    stack.push(i);
  }

  return result;
}

console.log(dailyTemperatures([30, 60, 90]), [1, 1, 0]);
console.log(dailyTemperatures([30, 40, 50, 60]), [1, 1, 1, 0]);
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]), [1, 1, 4, 2, 1, 1, 0, 0]);
// https://leetcode.com/problems/daily-temperatures/

// temperatures: number[]. 1 <= temperatures.length <= 10^5. 30 <= temperatures[i] <= 100.
// Return an array containing the number of days until a higher tempature is reached.
// If there is no future day with a higher temperature, use 0.
