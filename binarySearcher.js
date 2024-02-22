// function binarySearch (arr,value){
//  let start = 0
//  let end = arr.length -1

//  while(start <=end){
//     let middle = Math.floor((start+end)/2)

//     if(arr[middle] === value){
//         return middle
//     }
//     if(value> arr[middle]){
//         start = middle +1 
//     }
//     else {
//         end = middle-1
//     }
//  }
//  return -1

// }

// console.log(binarySearch([1,2,3,4,5],2))

// “Apple”
// 2
// Pleap

// function rotate(string,n){
//     const newStr = string.split("")
//     const arr =[]
//     const arr2 =[]

//     for(let i=n ;i<newStr.length;i++){
// arr.push(newStr[i])
//     }
//     // console.log("Firt",arr)
//     for(let i=0;i<n;i++){
//         arr2.push(newStr[i])
//     }
//     // console.log("Sec",arr2)

//     const arr3=[]= arr.concat(arr2)
//     return arr3.join("")

// }
// console.log(rotate("APPLE",2))

// function swap(string){
//     const newStr = string.split("");
//     for(let i=0;i<newStr.length;i++){
//         if(i==0){
//             let temp = newStr[i]
//             newStr[i]= newStr[newStr.length-1]
//             newStr[newStr.length-1]= temp
//     }
//     return newStr.join("");
// }
// }