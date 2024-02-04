function letterCombinations(digits) {
  const digitMap = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
  };

  const result = [];

  // Helper function for backtracking
  function backtrack(index, currentCombination) {
    // If the current combination has reached the length of digits, add it to the result
    if (index === digits.length) {
      result.push(currentCombination);
      return;
    }

    // Get the letters corresponding to the current digit
    const letters = digitMap[digits[index]];

    // Iterate over each letter and recursively call the backtrack function
    for (let i = 0; i < letters.length; i++) {
      backtrack(index + 1, currentCombination + letters[i]);
    }
  }

  // Start the backtracking process
  if (digits.length > 0) {
    backtrack(0, '');
  }

  // Return the lexicographically sorted result
  return result.sort();
}