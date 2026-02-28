// Meeting rooms.

function minMeetingRooms(intervals: number[]): number {
  const starts = intervals.filter((elem, index) => index % 2 === 0).sort((a, b) => a - b);
  const ends = intervals.filter((elem, index) => index % 2 === 1).sort((a, b) => a - b);

  let result = 0;
  let i = 0; // Starts pointer
  let j = 0; // Ends pointer

  while (i < starts.length) {
    const start = starts[i];
    const end = ends[j];

    start < end ? i++ : j++; // Increment whichever pointer falls on the lowest time.

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
