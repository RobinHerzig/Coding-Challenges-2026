// Meeting rooms.

function minMeetingRooms(intervals: number[]): number {
  const starts = intervals.filter((e, i) => i % 2 === 0).sort((a, b) => a - b);
  const ends = intervals.filter((e, i) => i % 2 === 1).sort((a, b) => a - b);

  let rooms = 0;
  let i = 0;
  let j = 0;

  while (i < starts.length) {
    const start = starts[i];
    const end = ends[j];

    if (start < end) {
      i++
    } else {
      j++
    }

    rooms = Math.max(rooms, i - j);
  }

  return rooms;
}

console.log(minMeetingRooms([0, 40, 5, 10, 15, 20]), 2); // 0-40, 5-20
console.log(minMeetingRooms([4, 9]), 1);
console.log(minMeetingRooms([1, 5, 5, 10, 10, 15, 15, 20]), 1);
// https://neetcode.io/problems/meeting-schedule-ii/

// intervals: number[]. 0 <= intervals.length <= 500. 0 <= intervals[i] <= 1,000,000. [start, end, ...]. Times of meetings.
// Return the minimum number of meet rooms required to schedule all meetings without conflicts.
// - Meetings can start and end at the same time without conflict.