# 🧙‍♀️ **Create the perfect potion**

On Halloween night 🎃, **a witch 🧙‍♀️ is preparing a magical brew**. She has a list of potions, each with an associated power, and she wants to combine two of them to achieve a specific total power.

Given a list of integers where **each number represents the power of a potion 🧪** and an integer representing the target power, you must find the indices of the first two potions that add up exactly to the target power.

For example:

```javascript
const potions = [4, 5, 6, 2]
const goal = 8

createMagicPotion(potions, goal) // [2, 3]
```

If no combination is found, return `undefined`.

```javascript
const potions = [1, 2, 3, 4]
const goal = 9

createMagicPotion(potions, goal) // undefined
```

If there is more than one possible combination, select the one whose **second potion appears first in the list**.

```javascript
const potions = [1, 2, 3, 4]
const goal = 5

createMagicPotion(potions, goal) // [1, 2]
// it could also be [0, 3] but there is an earlier combination
```
