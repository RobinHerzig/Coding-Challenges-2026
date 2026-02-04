// Car fleets. (Monotonic stack)

function carFleet(target: number, positions: number[], speeds: number[]): number {
  const fleet: number[][] = []; // [position, speed]

  // Step 1: Group vehicles by position and speed.
  for (let i = 0; i < positions.length; i++) {
    const position = positions[i];
    const speed = speeds[i];

    fleet.push([position, speed]);
  }

  // Step 2: Sort vehicles by ascending position.
  fleet.sort((a, b) => a[0] - b[0]);

  // Step 3: Monotonic stack algorithm.
  const stack: number[] = [];

  for (const [position, speed] of fleet) {
    const distance = target - position;
    const time = distance / speed;

    while (stack.at(-1)! <= time) {
      stack.pop(); // Vehicle is grouped with slower vehicle in front.
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
