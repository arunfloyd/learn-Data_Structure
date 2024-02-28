//Implementing Bubble Sort in JS

//Write a function to sort given array nums in asending order

const bubbleSort = (arr) => {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};
console.log(bubbleSort([1, 3, 2, 6, 4]));

//Best - Array is aleady sorted  = Time Complexity O(n)  --Space O(1)

//Worst - Time = O(n^2)

//Average - Time = O((n/2)*n) = O(n^2)
