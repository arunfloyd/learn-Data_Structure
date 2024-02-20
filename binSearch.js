function binarySearch(array, target) {
  if (array.length === 0) {
    return console.log("No Array Found");
  }
  let first = 0;
  let last = array.length - 1;
  while (first <=last) {
    let middle = Math.floor((first + last) / 2);
    if (array[middle] === target) {
      return middle;
    } else if (array[middle] < target) {
      first = middle + 1;
    } else {
      last = middle - 1;
    }
  }
  return "Target not found"
}
console.log(binarySearch([1, 4, 6, 7, 8], 2));
 