// Asteroid collision. (Stack)

function asteroidCollision(asteroids: number[]): number[] {
  const stack: number[] = [];

  for (const asteroid of asteroids) {
    let destroyed = false;

    while (asteroid < 0 && stack.at(-1) > 0) {
      const asteroidA = stack.at(-1);
      const asteroidB = Math.abs(asteroid);

      if (asteroidA > asteroidB) {
        // Rightward wins
        destroyed = true;
        break;
      } else if (asteroidA < asteroidB) {
        // Leftward wins
        stack.pop();
      } else {
        // Both lose
        stack.pop();
        destroyed = true;
        break;
      }
    }

    if (!destroyed) {
      stack.push(asteroid);
    }
  }

  return stack;
}

console.log(asteroidCollision([5, 10, -5]), [5, 10]);
console.log(asteroidCollision([8, -8]), []);
console.log(asteroidCollision([10, 2, -5]), [10]);
console.log(asteroidCollision([3, 5, -6, 2, -1, 4]), [-6, 2, 4]);
// https://leetcode.com/problems/asteroid-collision/

// asteroids: number[]. 2 <= asteroids.length <= 10^4. -1000 <= asteroids[i] <= 1000, not 0.
// Return the result after the positive astroids move right and negative move left. Same size destroy each other.
