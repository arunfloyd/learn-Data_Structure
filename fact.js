// function fact (num){
//     if(num<=1){
//         return 1
//     }
//     let sum=1
//     for(i=2;i<=num;i++){
// sum=sum*i
//     }
//     return sum
// }

// console.log(fact(5))

// function fat(num){
//     if(num===0) return 1
//     return num * fat(num-1)
// }
// console.log(fat(4))

// function range(start,end){
//     let list =" "
//     for(i=start;i<=end;i++){
//         list += i
//     }
//     return list
// }
// console.log(range(1,8))

// function range(start,end){
//     if(end<start){
//         return []
//     }else{
//         const numer = range(start,end -1)
//          numer.push(end)   
//          return numer 
//     }

// }
// console.log(range(1,8))

// function isPalindrome(arr) {
//     if (arr.length <= 1) {
//         return true;     }
//     if (arr[0] !== arr[arr.length - 1]) {
//         return false; 
//     }
//     return isPalindrome(arr.slice(1, -1));
// }
// console.log(isPalindrome([1,2,1])); 


// function feb (num){
//     if(num<2){
//         return 1
//     }else{
//         return feb(num-1) + feb(num-2)
//     }
    
// }
// console.log(1)

function reverse(str) {
    if (str === "") {
        return "";
    } else {
        return reverse(str.substr(1)) + str.charAt(0);
    }
}

console.log(reverse("Hello")); // Output: olleH
