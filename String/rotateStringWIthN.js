//Rotate a string by a given number of positions to the right.

//Method 1 
function rotate(string, n) {
    const newStr = string.split("");
    const arr = [];
    const arr2 = [];

    for (let i = n; i < newStr.length; i++) {
        arr.push(newStr[i]);
    }

    for (let i =  0; i < n; i++) {
        arr2.push(newStr[i]);
    }

    return arr.concat(arr2).join("");
}

console.log(rotate("APPLE",  2)); // Output: "PLEAP"


// Method 2 

function rotate(string, n) {
    n = n % string.length;
    const firstPart = string.slice(n);
    const secondPart = string.slice(0, n);
    return firstPart + secondPart;
}

console.log(rotate("APPLE",  2)); // Output: "PLEAP"

