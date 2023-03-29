function letterCombinations(input_digit) {
  //Complete the functionconst letterCombinations = function(digits) {
  if (!input_digit) {
    return [];
  }
  
  const map = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz"
  };
  
  const result = [];
  
  const backtrack = function(current,digits) {
    if (digits.length === 0) {
      result.push(current);
      return;
    }
    
    const letters = map[digits[0]];
    
    for (let i = 0; i < letters.length; i++) {
      backtrack(current + letters[i], digits.slice(1));
    }
  }
  
  backtrack("", digits);
  
  return result;
}

}

module.exports = letterCombinations;
