// Meeting rooms II.

function minMeetingRooms(intervals: number[]): number {
  // Step 1: Seperate start and end times and sort.
  const starts = intervals.filter((elem, index) => index % 2 === 0).sort((a, b) => a - b);
  const ends = intervals.filter((elem, index) => index % 2 === 1).sort((a, b) => a - b);

  // Step 2: Calculate difference between i and j count meeting rooms.
  let i = 0; // Starts pointer
  let j = 0; // Ends pointer
  let result = 0;

  while (i < starts.length) {
    const start = starts[i];
    const end = ends[j];

    start < end ? i++ : j++;
    result = Math.max(result, i - j);
  }

  return result;
}

console.log(minMeetingRooms([0, 40, 5, 10, 15, 20]), 2); // 0-40, 5-20
console.log(minMeetingRooms([4, 9]), 1);
// https://neetcode.io/problems/meeting-schedule-ii/

// intervals: number[]. 0 <= intervals.length <= 500. 0 <= intervals[i] <= 1,000,000. [start, end, ...]
// Return the minimum number of meet rooms required to schedule all meetings without conflicts.
// - Meetings can start and end at the same time without conflict.
