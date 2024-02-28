//Reverse the Words Using Stack method

//"the sky is blue" ==> " blue is sky the"

const reverseWords = function (s) {
  const splitS = s.split(" ");
  const stack = [];

  for (let i of splitS) {
    stack.push(i);
  }

  let finalS = "";

  while (stack.length) {
    const current = stack.pop();
    if (current) {
      finalS += " " + current;
    }
  }
  return finalS.trim();
};

console.log(reverseWords("the sky is blue")); //Output : blue is sky the

console.log(reverseWords("the   is   blue")); //Output : blue is the 

//Time Complexity = O(n)
//Space Complexity = O(n) 
