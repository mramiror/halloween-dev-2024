import { createMagicPotion } from './index.js'

describe('Challenge #01 - 🧙‍♀️ Create the perfect potion', () => {
  test('Test #01 - Returns an array', () => {
    const result = createMagicPotion([4, 5, 6, 2], 8)
    expect(Array.isArray(result)).toBe(true)
  })

  test('Test #02 - createMagicPotion([4, 5, 6, 2], 8)', () => {
    const result = createMagicPotion([4, 5, 6, 2], 8)
    expect(result).toEqual([2, 3])
  })

  test('Test #03 - createMagicPotion([1, 2, 3, 4], 9)', () => {
    const result = createMagicPotion([1, 2, 3, 4], 9)
    expect(result).toBeUndefined()
  })

  test('Test #04 - createMagicPotion([13, 5, 6, 2], 8)', () => {
    const result = createMagicPotion([13, 5, 6, 2], 8)
    expect(result).toEqual([2, 3])
  })

  test('Test #05 - createMagicPotion([11, 3, 7, 5], 10)', () => {
    const result = createMagicPotion([11, 3, 7, 5], 10)
    expect(result).toEqual([1, 2])
  })

  test('Test #06 - createMagicPotion([4, 3, 2, 3, 4], 6)', () => {
    const result = createMagicPotion([4, 3, 2, 3, 4], 6)
    expect(result).toEqual([0, 2])
  })

  test('Test #07 - createMagicPotion([0, 0, -2, 3], 2)', () => {
    const result = createMagicPotion([0, 0, -2, 3], 2)
    expect(result).toBeUndefined()
  })

  test('Test #08 - createMagicPotion([10, 5, 2, 3, 7, 5], 10)', () => {
    const result = createMagicPotion([10, 5, 2, 3, 7, 5], 10)
    expect(result).toEqual([3, 4])
  })

  test('Test #09 - createMagicPotion([1, 2, 3, 4, 5], 8)', () => {
    const result = createMagicPotion([1, 2, 3, 4, 5], 8)
    expect(result).toEqual([2, 4])
  })

  test('Test #10 - createMagicPotion([5, 1, 4, 6, 2], 9)', () => {
    const result = createMagicPotion([5, 1, 4, 6, 2], 9)
    expect(result).toEqual([0, 2])
  })

  test('Test #11 - createMagicPotion([1, -2, 3, -4, 5], -1)', () => {
    const result = createMagicPotion([1, -2, 3, -4, 5], -1)
    expect(result).toEqual([0, 1])
  })

  test('Test #12 - createMagicPotion([10, 20, 30, 40], 50)', () => {
    const result = createMagicPotion([10, 20, 30, 40], 50)
    expect(result).toEqual([1, 2])
  })

  test('Test #13 - createMagicPotion([], 10)', () => {
    const result = createMagicPotion([], 10)
    expect(result).toBeUndefined()
  })
})
