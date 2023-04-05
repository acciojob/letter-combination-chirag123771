function letterCombinations(digits) {
  // Mapping of digit to letters
  const map = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
  };
  // Base case: empty input string
  if (digits.length === 0) {
    return [];
  }
  // Recursive case: process the first digit and combine with the rest
  const firstDigit = digits.charAt(0);
  const restDigits = digits.slice(1);
  const restCombinations = letterCombinations(restDigits);
  const firstLetters = map[firstDigit].split('');
  // Combine the first letters with the rest combinations
  const combinations = [];
  for (const letter of firstLetters) {
    for (const restCombination of restCombinations) {
      combinations.push(letter + restCombination);
    }
  }
  // Sort the combinations lexicographically
  return combinations.sort();
}
