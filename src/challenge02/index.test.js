import { battleHorde } from './index.js'

describe('battleHorde', () => {
  test.each([
    // [zombies,         humans,          expected]
    ['242',             '334',            '2h'],
    ['444',             '282',            'x'],
    ['555',             '666',            '3h'],
    ['321',             '123',            'x'],
    ['4598',            '7682',           '3z'],
    ['8989898999',      '7779998811',     '20z'],
    ['57685849323',     '98765438965',    '10h'],
    ['1',               '1',              'x'],      // minimal tie
    ['12',              '21',             'x'],      // multi-digit tie
    ['19',              '10',             '9z'],     // difference: (1-1)+(9-0)=9
    ['007',             '106',            'x'],      // leading zeros, sums to tie
    ['9',               '0',              '9z'],     // max single-digit advantage
  ])('zombies=%s humans=%s => %s', (zombies, humans, expected) => {
    expect(battleHorde(zombies, humans)).toBe(expected)
  })

  test.each([
    // Invalid inputs or different lengths return 'x'
    [123, '1234'],
    ['1234', 1234],
    ['123', '12'],
    [null, '111'],
  ['111', undefined],
  ['12a', '123'],      // non-digit in zombies
  ['123', '1b3'],      // non-digit in humans
  ['1 3', '123'],      // space
  ['+12', '012']       // plus sign
  ])('invalid inputs zombies=%j humans=%j => x', (zombies, humans) => {
    expect(battleHorde(zombies, humans)).toBe('x')
  })
})