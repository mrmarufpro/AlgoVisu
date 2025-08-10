// Get a random integer between minimum and maximum numbers (inclusive)
export function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
