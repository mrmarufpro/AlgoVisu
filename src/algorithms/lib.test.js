import { randomNum } from './lib';

test('randomNum returns values within range and includes max', () => {
  const min = 1;
  const max = 2;
  let sawMax = false;
  for (let i = 0; i < 1000; i++) {
    const value = randomNum(min, max);
    expect(value).toBeGreaterThanOrEqual(min);
    expect(value).toBeLessThanOrEqual(max);
    if (value === max) {
      sawMax = true;
    }
  }
  expect(sawMax).toBe(true);
});
