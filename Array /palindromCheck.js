
//Palindrom Like MALAYALAM 

function isPalindrome(arr) {
    if (arr.length <= 1) {
        return true;     }
    if (arr[0] !== arr[arr.length - 1]) {
        return false; 
    }
    return isPalindrome(arr.slice(1, -1));
}
console.log(isPalindrome([1,2,1,1])); //Output :- false