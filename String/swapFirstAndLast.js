//Swap the First and Last Value from a String

// Method 1

function swap(string) {
  const newStr = string.split("");
  for (let i = 0; i < newStr.length; i++) {
    if (i == 0) {
      let temp = newStr[i];
      newStr[i] = newStr[newStr.length - 1];
      newStr[newStr.length - 1] = temp;
    }
  }
  return newStr.join("");
}
const result = swap("APPLE");
console.log(result); // Output: EPPLA

//Method 2

function swap(string) {
  if (string.length < 2) {
    return string;
  }

  return string[string.length - 1] + string.slice(1, -1) + string[0];
}

const results = swap("APPLE");
console.log(results); // Output: EPPLA
