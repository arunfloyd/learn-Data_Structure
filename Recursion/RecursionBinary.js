function binarySearchRecursive(
  array,
  target,
  leftIndex = 0,
  rightIndex = array.length - 1
) {
  if (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (target === array[middleIndex]) {
      return middleIndex;
    }

    if (target < array[middleIndex]) {
      return binarySearchRecursive(array, target, leftIndex, middleIndex - 1);
    } else {
      return binarySearchRecursive(array, target, middleIndex + 1, rightIndex);
    }
  }

  return -1;
}
console.log(binarySearchRecursive([1, 2, 3, 4, 5], 1));
