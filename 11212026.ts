// Climbing stairs. (Dynamic programming)

function climbStairs(num: number): number {
    if (num <= 1) {
        return num;
    }

    let a = 0;
    let b = 1;

    while (num > 0) {
        const next = a + b;

        a = b;
        b = next;
        num--;
    }

    return b;
};

console.log(climbStairs(1), 1);
console.log(climbStairs(2), 2);
console.log(climbStairs(45), 1836311903);
// https://leetcode.com/problems/climbing-stairs/

// num: number. 1 <= num <= 45. Number of steps to reach the top of the staircase.
// Return the distinct ways that a person can reach the top, if they climb 1 or 2 steps per turn.
