def letterCombinations(digits):
    """
    :type digits: str
    :rtype: List[str]
    """
    if not digits:
        return []
    
    # Create a mapping of digits to their corresponding letters
    mapping = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    }
    
    # Define the recursive function that generates all possible combinations of letters
    def generateCombinations(index, current):
        if index == len(digits):
            # Base case: we have generated a complete combination of letters
            result.append(current)
        else:
            # Recursive case: for each letter corresponding to the current digit, generate all possible combinations
            for letter in mapping[digits[index]]:
                generateCombinations(index+1, current+letter)
    
    # Call the recursive function to generate all possible combinations of letters
    result = []
    generateCombinations(0, '')
    return result
