//The Given String is hello world 
//Converting the first index of the word should be capital
//hello world  >>> Hello World

let str="hello world"

str=str.split(" ")

let capital=str.map((word)=>{
  return word.charAt(0).toUpperCase()+word.slice(1)
})

console.log(capital.join(" "));



