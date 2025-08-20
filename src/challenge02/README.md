# 🧟 Zombie horde

In an **epic battle between the undead 🧟 and humans 👮‍♂️**, both sides have a list of fighters with specific attack powers.

The battle unfolds in rounds, and each round pits one fighter from each side against each other.

The side with the greater attack power wins the round, and their remaining power is carried over to their next fighter.

**In case of a tie**, both fighters fall and do not affect the next round.

Given two strings, **zombies** and **humans**, where each digit (from 1 to 9) represents the attack power of a fighter, determine who remains at the end and with how much attack power.

**Important:** Both strings will always have the same length.

The output is a string that represents the final result of the battle:

* If a zombie remains, return its power followed by `"z"`, e.g., `"3z"`.
* If a human remains, return its power followed by `"h"`, e.g., `"2h"`.
* If there is a tie and no one remains with power at the end, return `"x"`.

Here’s an example:

```javascript
const zombies = '242';
const humans = '334';

const result = battleHorde(zombies, humans);  // -> "2h"

// first round: zombie 2 vs human 3 -> human wins (+1)
// second round: zombie 4 vs human 3+1 -> tie
// third round: zombie 2 vs human 4 -> human wins (+2)
// result: "2h"
```

Another example with a tie:

```javascript
const zombies = '444';
const humans = '282';

const result = battleHorde(zombies, humans);  // -> "x"

// first round: zombie 4 vs human 2 -> zombie wins (+2)
// second round: zombie 4+2 vs human 8 -> human wins (+2)
// third round: zombie 4 vs human 2+2 -> tie
// result: "x"
```
