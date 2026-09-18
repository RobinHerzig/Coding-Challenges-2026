// Car fleets. (Monotonic stack)

function carFleet(target: number, positions: number[], speeds: number[]): number {
  const stack: number[] = [];
  const vehs = positions.map((pos, i) => [pos, speeds[i]]).sort((a, b) => a[0] - b[0]);

  for (const [pos, speed] of vehs) {
    const time = (target - pos) / speed;

    while (time >= stack.at(-1)) {
      stack.pop();
    }

    stack.push(time);
  }

  return stack.length;
}

console.log(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]), 3);
console.log(carFleet(10, [3], [3]), 1);
console.log(carFleet(100, [0, 2, 4], [4, 2, 1]), 1);
// https://leetcode.com/problems/car-fleet/

// target: number. 0 < target <= 10^5. Ending mile.
// positions: number[]. 1 <= positions.length <= 10^5. 0 <= positions[i] <= target. Starting mile of car.
// speeds: number[]. speeds.length = positions.length. 0 < speeds[i] <= 10^6. Speed of car.

// Return the number of fleets that arrive at target.
// - Cars cannot pass. Speed of car fleet is the minimum of all cars in the fleet.
// - Cars are in the fleet if they catch up before or at target.
