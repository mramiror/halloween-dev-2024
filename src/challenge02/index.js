/**
 * Compares two equal-length digit strings: zombies vs humans.
 * Sums the total zombie strength and the total human strength
 * separately, then uses their difference to decide the winner.
 *
 * Complexity:
 *  - Time: O(n), single pass to compute both totals.
 *  - Space: O(1).
 *
 * @param {string} zombies Digit string representing zombie strengths.
 * @param {string} humans  Digit string representing human strengths.
 * @returns {string} Token: 'x' | '<magnitude>z' | '<magnitude>h'.
 */
export function battleHorde(zombies, humans) {
  // Accumulate totals independently for clarity
  let zombieTotal = 0;
  let humanTotal = 0;

  for (let i = 0; i < zombies.length; i++) {
    zombieTotal += zombies[i] - '0';
    humanTotal  += humans[i] - '0';
  }

  const diff = zombieTotal - humanTotal; // signed difference
  if (diff === 0) return 'x';

  // Build result: absolute magnitude + winner letter ('z' or 'h')
  // Examples: diff=7 => '7z'; diff=-4 => '4h'
  return `${Math.abs(diff)}${diff > 0 ? 'z' : 'h'}`;
}
