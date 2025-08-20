# ▲ Terror on Pyramid Head

You are trapped in **Silent Hill**, inside a square room of size `n x n`, and the dreaded **Pyramid Head (▲)** is somewhere in the room, moving toward you (**T**).

You cannot move, and **Pyramid Head** moves one cell per turn, in any of the four **cardinal directions** (up, down, left, right), but he always chooses the shortest path to your position.
Your goal is to determine if **Pyramid Head** can reach you.

---

### Room representation (`n x n`):

* `T`: your position (where you are trapped).
* `▲`: Pyramid Head's starting position.
* `.`: empty spaces where Pyramid Head can move.
* `#`: walls that Pyramid Head cannot pass through.

---

### Instructions

Write a function that determines whether **Pyramid Head** can reach you.

* If he can reach you, return the number of steps it takes.
* If he cannot reach you, return `-1`.

---

### Examples

```javascript
const room = [
  ['.', '.', '#', '.', '▲'],
  ['#', '.', '#', '.', '#'],
  ['.', '.', '.', '.', '.'],
  ['#', '#', '#', '.', '#'],
  ['T', '.', '.', '.', '.'],
]

escapePyramidHead(room) // -> 8
```

```javascript
const room2 = [
  ['T', '.', '#', '.'],
  ['.', '.', '.', '.'],
  ['▲', '.', '.', '#'],
  ['.', '#', '#', '#'],
]

escapePyramidHead(room2) // -> 2
```

```javascript
const room3 = [
  ['#', '#', '#'],
  ['▲', '.', '#'],
  ['.', '#', 'T'],
]

escapePyramidHead(room3) // -> -1
```
