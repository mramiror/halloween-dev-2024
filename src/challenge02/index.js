/**
 * Compares two equal-length strings of digit strengths: zombies vs humans.
 * Each position i represents a duel: (zombies[i] - humans[i]).
 * The total signed sum determines the winner side and magnitude.
 *
 * Rules:
 *  - If inputs are not strings or lengths differ => 'x' (invalid / tie).
 *  - Sum all (z_i - h_i). Let this be advantage.
 *  - advantage > 0 => zombies win: return `${advantage}z`.
 *  - advantage < 0 => humans win: return `${abs(advantage)}h`.
 *  - advantage === 0 => 'x' (perfect tie).
 *
 * Complexity:
 *  - Time: O(n) single pass over characters.
 *  - Space: O(1) additional.
 *
 * @param {string} zombies String of digits representing zombie strengths.
 * @param {string} humans  String of digits representing human strengths.
 * @returns {string} Result token: 'x' | '<magnitude>z' | '<magnitude>h'.
 */
export function battleHorde(zombies, humans) {
  // Basic input validation
  if (typeof zombies !== 'string' || typeof humans !== 'string') return 'x';
  if (zombies.length !== humans.length) return 'x';

  let advantage = 0; // Running total: >0 zombies lead, <0 humans lead

  // Accumulate positional differences.
  let idx = 0;
  for (const zombie of zombies) {
    advantage += zombie - humans[idx++];
  }

  if (advantage === 0) return 'x'; // Perfect tie

  // Build result token: absolute numeric advantage + side letter.
  // Example: advantage=5  -> '5z'; advantage=-3 -> '3h'
  return `${Math.abs(advantage)}${advantage > 0 ? 'z' : 'h'}`;
}
