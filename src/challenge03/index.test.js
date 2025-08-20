import { findSafestPath } from './index.js'

describe('findSafestPath', () => {
  test.each([
    // [grid, expected]
    [[[1,3,1],[1,5,1],[4,2,1]], 7],
    [[[5,9],[4,2]], 11],
    [[[1,1,1],[1,1,1],[1,1,1]], 5],
    [[[1,2,3],[3,2,1],[4,4,4]], 10],
    [[[1,2],[3,4],[6,5],[7,8]], 20],
    [[[1,2,3],[4,5,6],[7,8,9]], 21]
  ])('grid=%j => %d', (grid, expected) => {
    expect(findSafestPath(grid)).toBe(expected)
  })
})