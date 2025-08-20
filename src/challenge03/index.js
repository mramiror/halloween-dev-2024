/**
 * Compute the minimal accumulated danger to travel from the top‑left (0,0)
 * to the bottom‑right (R-1,C-1) of a rectangular grid of danger values,
 * moving only RIGHT or DOWN.
 *
 * Dynamic Programming relation:
 *   dp[i][j] = min(dp[i-1][j], dp[i][j-1]) + grid[i][j]
 *
 * Space optimization:
 *   The 2D table is compressed into a single row array (dp[col]) because each
 *   state depends only on the current row (left) and the previous row (top).
 *   During iteration dp[col] still holds the previous-row value (top), while
 *   dp[col - 1] already represents the current-row value (left).
 *
 * Example:
 *   Grid:
 *     1 3 1
 *     1 5 1
 *     4 2 1
 *   Minimal path (1→3→1→1→1) sum = 7.
 *
 * Complexity:
 *   Time:  O(rows * cols)
 *   Space: O(cols)
 *
 * @param {number[][]} dream Rectangular matrix of numeric danger values.
 * @returns {number} Minimal path danger sum.
 */
export function findSafestPath(dream) {

  const totalRows = dream.length;
  const totalCols = dream[0].length;
  if (totalCols === 0) return 0;

  // dp[col] = minimal danger to reach current row at column 'col'.
  const dp = new Array(totalCols);

  // Seed top-left.
  dp[0] = dream[0][0];

  // Pre-compute first row (can only come from the left).
  for (let col = 1; col < totalCols; col++) {
    dp[col] = dp[col - 1] + dream[0][col];
  }

  // Process each subsequent row.
  for (let row = 1; row < totalRows; row++) {
    // First column: only path is from above
    dp[0] += dream[row][0];
    for (let col = 1; col < totalCols; col++) {
      // dp[col] (top) still has previous row's cost; 
      // dp[col - 1] (left) now is current row updated cost.
      const costFromTop = dp[col];
      const costFromLeft = dp[col - 1];
      dp[col] = Math.min(costFromTop, costFromLeft) + dream[row][col];
    }
  }

  // Bottom-right minimal path cost.
  return dp[totalCols - 1];
}