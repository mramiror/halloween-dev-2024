import { createMagicPotion } from './index.js'

describe('createMagicPotion', () => {
  test('returns undefined with empty array', () => {
    expect(createMagicPotion([], 10)).toBeUndefined()
  })

  test('returns undefined with single element array', () => {
    expect(createMagicPotion([5], 5)).toBeUndefined()
  })

  test.each([
    // [potions,                 target, expected]
    [[4, 5, 6, 2],                 8,    [2, 3]],
    [[1, 2, 3, 4],                 9,    undefined],
    [[13, 5, 6, 2],                8,    [2, 3]],
    [[11, 3, 7, 5],               10,    [1, 2]],
    [[4, 3, 2, 3, 4],              6,    [0, 2]],
    [[0, 0, -2, 3],                2,    undefined],
    [[10, 5, 2, 3, 7, 5],         10,    [3, 4]],
    [[1, 2, 3, 4, 5],              8,    [2, 4]],
    [[5, 1, 4, 6, 2],              9,    [0, 2]],
    [[1, -2, 3, -4, 5],           -1,    [0, 1]],
    [[10, 20, 30, 40],            50,    [1, 2]],
    [[1, 1],                       2,    [0, 1]],           // minimal length successful pair
    [[1, 1, 1, 2],                 2,    [0, 1]],           // duplicates ensure earliest second index
    [[-5, -3, -10, -8],          -13,    [1, 2]],           // multiple negative pair options
    [[1000000, -1, 1, 2],     999999,    [0, 1]],           // large number with negative complement
    [[-3, 1, 2, 3],                0,    [0, 3]]            // zero target distant indices
    ])
  ('potions=%j target=%d => %s', (potions, target, expected) => {
    const result = createMagicPotion(potions, target)
    if (expected === undefined) {
      expect(result).toBeUndefined()
    } else {
      expect(result).toStrictEqual(expected)
    }
  })
})
