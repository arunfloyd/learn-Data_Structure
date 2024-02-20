// function binarySearch(array, target) {
//     let leftIndex = 0;
//     let rightIndex = array.length - 1;
//     1;
  
//     while (leftIndex <= rightIndex) {
//       let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  
//       if (target === array[middleIndex]) {
//         return middleIndex;
//       }
  
//       if (target < array[middleIndex]) {
//         rightIndex = middleIndex - 1;
//       } else {
//         leftIndex = middleIndex + 1;
//       }
//     }
  
//     return -1;
//   }

// console.log(binarySearch([1, 2, 3, 4, 5], 1));





function binarySearch(arr,target){
  let left =0 
  let right = arr.length-1
  while(left<=right){
    let middle = Math.floor((left+right)/2)
    if(target ===middle){
      return middle
    }
    if(target <arr[middle]){
      right = middle -1
    }else{
      left = middle +1
    }
  }
  return -1
}