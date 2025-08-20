import { findTheKiller } from './index.js'

describe('findTheKiller', () => {
  test('returns a string type', () => {
    expect(typeof findTheKiller('d~~~~~a', ['Dracula', 'Freddy Krueger', 'Jason Voorhees', 'Michael Myers'])).toBe('string')
  })

  test.each([
    // [whisper, suspects, expected]
    ['d~~~~~a', ['Dracula', 'Freddy Krueger', 'Jason Voorhees', 'Michael Myers'], 'Dracula'],
    ['~r~dd~', ['Freddy', 'Freddier', 'Fredderic'], 'Freddy,Freddier,Fredderic'],
    ['~r~dd$', ['Freddy', 'Freddier', 'Fredderic'], ''],
    ['mi~~def', ['Midudev', 'Midu', 'Madeval'], ''],
    ['~~~~~~', ['Pennywise', 'Leatherface', 'Agatha'], 'Pennywise,Leatherface,Agatha'],
    ['~~~~~~$', ['Pennywise', 'Leatherface', 'Agatha'], 'Agatha'],
    ['s~v~r~', ['Severus Snape', 'Sirius Black', 'Salazar Slytherin'], 'Severus Snape'],
    ['~~~~~y$', ['Chucky', 'Tiffany', 'Freddy', 'Mickey'], 'Chucky,Freddy,Mickey']
  ])('whisper=%s => %s', (whisper, suspects, expected) => {
    expect(findTheKiller(whisper, suspects)).toBe(expected)
  })
})