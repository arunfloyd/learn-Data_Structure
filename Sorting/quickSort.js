//QuicK Sort
//In Ascending order

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}
//Time Complexity

// Avg Case = O(n log n)
// Best  Case = O(n log n)
// Worst Case = O(n^2)

//Space Complexity

// Avg Case = O(log n)
// Worst Case = O(n)
console.log(quickSort([57, 345, 231, 332]));
