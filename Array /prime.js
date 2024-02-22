//Checks the Number is Prime Or Not
function isPrime(number){
    if(number<2){
        return false
    }
    for(let i=2 ;i<number;i++){
        if(number%i ===0){
            return false
        }
    }
    return true
}
console.log(isPrime(5))  //true