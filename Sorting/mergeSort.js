//Impement Merge Sort in JS

//In Asending order

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  //O(log n )
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let sortedArr = [];
  // O(n)
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }
  return [...sortedArr, ...left, ...right];
}

console.log(mergeSort([1, 5, 6, 3, 3, 6, 7, 2]));

//Time  Complexity = O(n log n)
//Space  Complexity = O(n )
