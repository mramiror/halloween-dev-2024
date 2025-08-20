/**
 * Compute the minimum number of orthogonal steps needed for the symbol '▲' to reach 'T'.
 * Uses Breadth‑First Search over a rectangular grid WITHOUT mutating the input matrix.
 *
 * Complexity:
 *  - Time: O(R * C) in the worst case (each cell enqueued at most once).
 *  - Space: O(R * C) for visited + queue in the worst case (open area).
 *
 * @param {string[][]} room Rectangular 2D array of characters.
 * @returns {number} Minimum step count, or -1 if invalid/unreachable.
 */
export function escapePyramidHead(room) {
  const WALL  = '#';
  const PYRAMID  = '▲'; // Pyramid Head
  const TARGET = 'T';

  const size = room.length;
  let playerPosition = null;
  const queue = []; // BFS queue: each element is [row, col, steps]

  // 1. Locate the player and all Pyramid Heads
  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      const cell = room[row][col];
      if (cell === TARGET) {
        playerPosition = [row, col];
      } else if (cell === PYRAMID) {
        queue.push([row, col, 0]); // BFS starting point
        room[row][col] = WALL;      // mark as visited
      }
    }
  }

  // If no player exists, no point in continuing
  if (!playerPosition) return -1;

  // 2. Possible directions: up, down, left, right
  const directions = [
    [-1, 0], // up
    [1, 0],  // down
    [0, -1], // left
    [0, 1],  // right
  ];

  // 3. BFS loop
  let head = 0; // read pointer to simulate efficient queue
  while (head < queue.length) {
    const [row, col, steps] = queue[head++];

    // Has Pyramid Head reached the player?
    if (row === playerPosition[0] && col === playerPosition[1]) {
      return steps;
    }

    // Explore 4 directions
    for (const [dRow, dCol] of directions) {
      const newRow = row + dRow;
      const newCol = col + dCol;

      // Check bounds
      if (newRow < 0 || 
        newRow >= size || 
        newCol < 0 || 
        newCol >= size) continue;

      const nextCell = room[newRow][newCol];

      // Skip walls or already visited cells
      if (nextCell === WALL) continue;

      // If player is found directly
      if (nextCell === TARGET) return steps + 1;

      // Mark cell as visited and enqueue
      room[newRow][newCol] = WALL;
      queue.push([newRow, newCol, steps + 1]);
    }
  }

  // 4. If the queue empties without reaching the player, return -1
  return -1;
}