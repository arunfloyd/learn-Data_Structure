let str="hello world my name is arun"

str=str.split(" ")

let capital=str.map((word)=>{
  return word.charAt(0).toUpperCase()+word.slice(1)
})

console.log(capital.join(" "));