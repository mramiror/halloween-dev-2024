/**
 * Returns the indices of the first two potions whose sum equals target.
 * Tie‑breaking rule: choose the pair whose SECOND index appears earliest.
 *
 * Strategy:
 *  - Single pass left→right.
 *  - Store the FIRST occurrence index of each value in seenPowers Map.
 *  - For current power at i, we look for (target - power) that appeared earlier.
 *  - Because we return immediately on the first match, we naturally satisfy
 *    the "earliest second index" requirement.
 *
 * Complexity:
 *  - Time: O(n)
 *  - Space: O(k) where k is distinct potion powers seen so far.
 *
 * @param {number[]} potions Array of potion power values.
 * @param {number} target Desired combined power.
 * @returns {[number, number] | undefined} Indices pair or undefined if none.
 */
export function createMagicPotion(potions, target) {
  const seenPowers = new Map(); // power value -> earliest index

  // Iterate through potions once, looking for complements that sum to target
  for (let i = 0; i < potions.length; i++) {
    const power = potions[i];
    const need = target - power; // The power needed to reach target

    // If complement was seen, we found the earliest possible second index i
    if (seenPowers.has(need)) {
      return [seenPowers.get(need), i];
    }

    // Only store if we haven't seen the power before
    if (!seenPowers.has(power)) {
      seenPowers.set(power, i);
    }
  }

  return undefined; // No pair found
}