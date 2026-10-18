// Asteroid collisions. (Stack)

function asteroidCollision(asteroids: number[]): number[] {
  const stack: number[] = [];

  for (const asteroid of asteroids) {
    let isDestroyed = false;

    while (stack.length > 0 && stack.at(-1) > 0 && asteroid < 0 && !isDestroyed) {
      const a = stack.at(-1);
      const b = Math.abs(asteroid);

      if (a > b) {
        isDestroyed = true;
      } else if (b > a) {
        stack.pop();
      } else {
        isDestroyed = true;
        stack.pop();
      }
    }

    if (!isDestroyed) {
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
