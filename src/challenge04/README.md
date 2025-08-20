# 🔪 Find the killer

A person has been **murdered on Halloween night 🔪**. Using a spell 🧙‍♀️, we managed to hear their final whisper, but it is very faint and doesn’t allow us to clearly identify who the killer was.

The information we have:

* **whisper**: a string representing what the victim tried to say before dying.
* **suspects**: an array of strings with the names of all the suspects.

### Rules for the `whisper`:

* Each `~` represents an **uncertain letter** in the whisper.
* Each position in the whisper corresponds to the same position in the killer’s name.
* The length of `whisper` does not always represent the full name, since the victim may have died before finishing it.
* But if the last character of the whisper is a `$`, then the killer’s name must end exactly there.

### Objective

You must figure out who the killer could be:

* If only **one name** matches the whisper pattern, return that name.
* If **multiple names** match, return all matching names separated by commas.
* If **no name** matches, return an empty string `""`.

> Letter case does not matter (uppercase/lowercase are equivalent).

---

### Examples

```javascript
const whisper = 'd~~~~~a';
const suspects = ['Dracula', 'Freddy Krueger', 'Jason Voorhees', 'Michael Myers'];

findTheKiller(whisper, suspects); // -> 'Dracula'
```

```javascript
const whisper2 = '~r~dd~';
const suspects2 = ['Freddy', 'Freddier', 'Fredderic'];

findTheKiller(whisper2, suspects2); // -> 'Freddy,Freddier,Fredderic'
```

```javascript
const whisper3 = '~r~dd$';
const suspects3 = ['Freddy', 'Freddier', 'Fredderic'];

findTheKiller(whisper3, suspects3); // -> ''
```

```javascript
const whisper4 = 'mi~~def';
const suspects4 = ['Midudev', 'Midu', 'Madeval'];

findTheKiller(whisper4, suspects4); // -> ''
```
