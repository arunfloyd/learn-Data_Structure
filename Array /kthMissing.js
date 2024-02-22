//Given a sorted array of positive integers, find the k-th missing positive integer.
function findKthMissing(array,k){
    let count =0
    for(let i=0 ;i<array.length;i++){
        if(array[i]<=k+count){
            count++
        }
    }
    return k+count
}

console.log(findKthMissing([1,2,3,5,6,7],3)) //Output :  9
