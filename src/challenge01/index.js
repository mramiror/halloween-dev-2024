export function createMagicPotion(potions, target) {
  const firstIndex = new Map();

  for (let j = 0; j < potions.length; j++) {
    const val = potions[j];
    const need = target - val;

    if (firstIndex.has(need)) {
      return [firstIndex.get(need), j];
    }

    if (!firstIndex.has(val)) firstIndex.set(val, j);
  }

  return undefined;
}
