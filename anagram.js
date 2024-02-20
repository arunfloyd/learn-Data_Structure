function second(arr){
    let largest = -10000
    let secLar = -1000
    for(i=0;i<arr.length;i++){
        if(arr[i]>largest){
            secLar = largest
            largest=arr[i]
        }else if(arr[i]!=largest && arr[i]>secLar){
            secLar = arr[i]
        }
    }
    return secLar
}

// console.log(second([1,5,3,5,3,6,73,32]))

function rotateArray(nums,k){
    
}