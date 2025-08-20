/**
 * Filters suspect names that match a minimal "whisper" pattern.
 *
 * Supported pattern tokens:
 *  - '~' : matches exactly one arbitrary character.
 *  - Trailing '$' : if present, forces the match to end there (exact length match).
 *  - All other characters are treated literally (no other metacharacters expected in this kata scope).
 *
 * @param {string} whisper Pattern with optional '~' and optional trailing '$'.
 * @param {string[]} suspects Candidate names to test.
 * @returns {string} Comma-separated matching names ('' if none).
 */
export function findTheKiller(whisper, suspects) {
  const mustEnd = whisper.endsWith('$');
  if (mustEnd) whisper = whisper.slice(0, -1);

  // Transform all '~' into '.' (single-character wildcard in regex)
  const body = whisper.replace(/~/g, '.');
  const pattern = `^${body}${mustEnd ? '$' : ''}`;
  const re = new RegExp(pattern, 'i'); // case-insensitive

  return suspects
    .filter(s => re.test(String(s)))
    .join(',');
}