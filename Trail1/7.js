// function linearSearch(arr,value){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]===value){
//             return i+1
//         }
//     }
//     return -1
// }
// console.log(linearSearch([1,2,4,6],6))

// function binarySearch(arr,value){
//     let start = 0
//     let end = arr.length - 1

//     while(start <= end){
//         let middle = Math.floor((start+end)/2)
//         if(arr[middle]===value){
//             return middle
//         }
//         if(arr[middle]>value){
//             end = middle-1
//         }else{
//             start = middle+1
//         }
//     }
//     return -1
// }

// console.log(binarySearch([1,3,5,6,7],3))

// function factorail(value){

//     if(value<1){
//         return 1
//     }
//     return value*factorail(value-1)
// }
// console.log(factorail(5))

// function febnacciSeries(value){
//     if(value<2){
//         return value
//     }
//     return febnacciSeries(value-1) + febnacciSeries(value-2)
// }
// console.log(febnacciSeries(4))
