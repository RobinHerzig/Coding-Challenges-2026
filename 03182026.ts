// Car fleets. (Monotonic stack)

function carFleet(target: number, positions: number[], speeds: number[]): number {
  // Step 1: Combine positions and speeds into single array.
  const vehicles = positions.map((position, index) => [position, speeds[index]]).sort((a, b) => a[0] - b[0]);
  const stack = [];
  console.log(vehicles);

  // Step 2: Monotonic stack algorithm.
  for (const [position, speed] of vehicles) {
    const distance = position - target;
    const time = distance / speed;

    while (time > stack.at(-1)) {
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

// target: number. Ending mile. 0 < target <= 10^5.
// position: number[]. 1 <= position.length <= 10^5. 0 <= position[i] <= target. Starting mile of car.
// speed: number[]. speed.length = position.length. 0 < speed[i] <= 10^6. Speed of car.

// Return the number of fleets that arrive at target.
// - Cars cannot pass. Speed of car fleet is the minimum of all cars in the fleet.
// - Cars are in the fleet if they catch up before or at target.