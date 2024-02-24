//Implementation Insertion sort in JS

//Ascending Order

function insertionSort(arr) {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    const key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}

console.log(insertionSort([2, 5, 3, 1, 5]));

//Time Best = O(n) Worst = O(n^2) Average = O(n^2)

//Space = O(n)
