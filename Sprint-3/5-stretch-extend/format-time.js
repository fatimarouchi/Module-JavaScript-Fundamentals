// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const [hoursString, minutesString = "00"] = time.split(":");
  const hours = Number(hoursString);
  const minutes = minutesString.padStart(2, "0");

  let suffix = "am";
  if (hours >= 12) {
    suffix = "pm";
  }

  let formattedHours = hours % 12;
  if (formattedHours === 0) {
    formattedHours = 12;
  }

  return `${formattedHours}:${minutes} ${suffix}`;
}

const currentOutput2 = formatAs12HourClock("23:00");
const targetOutput2 = "11:00 pm";
console.assert(
  currentOutput2 === targetOutput2,
  `current output: ${currentOutput2}, target output: ${targetOutput2}`,
);

const noonOutput = formatAs12HourClock("12:00");
const noonTarget = "12:00 pm";
console.assert(
  noonOutput === noonTarget,
  `current output: ${noonOutput}, target output: ${noonTarget}`,
);

const midnightOutput = formatAs12HourClock("00:00");
const midnightTarget = "12:00 am";
console.assert(
  midnightOutput === midnightTarget,
  `current output: ${midnightOutput}, target output: ${midnightTarget}`,
);

const singleDigitMinuteOutput = formatAs12HourClock("9:5");
const singleDigitMinuteTarget = "9:05 am";
console.assert(
  singleDigitMinuteOutput === singleDigitMinuteTarget,
  `current output: ${singleDigitMinuteOutput}, target output: ${singleDigitMinuteTarget}`,
);

console.log("All formatAs12HourClock tests passed.");
