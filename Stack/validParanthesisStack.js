//Given a string S containting just the character '(',')','{','}','[',']'

//Open brackets must be closed by in the same type of brackets

function isValid(s) {
    const stack = [];
  
    for (let i =  0; i < s.length; i++) {
      const char = s[i];
  
      if (char === "(" || char === "{" || char === "[") {
        stack.push(char);
      } else if (char === ")" || char === "}" || char === "]") {
        if (isEmpty(stack)) {
          return false;
        } 
        const top = stack.pop();
        if (
          (char === ")" && top !== "(") ||
          (char === "}" && top !== "{") ||
          (char === "]" && top !== "[")
        ) {
          return false;
        }
      }
    }
    return isEmpty(stack);
  }
  
  function isEmpty(stack) {
    return stack.length ===  0;
  }
  
  console.log(isValid("(})")); // Should return true
  