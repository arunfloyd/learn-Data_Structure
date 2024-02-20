function sum(n) {
  //O(1)
  sum = 0; //O(1)
  for (i = 0; i <= n; i++) {
    //O(n)
    sum += i; //O(1)
  }
  return sum; //O(1)
}
// console.log(sum(10))
//So Total Time Complexity is O(n) -- Linear Time Complexity

function sums(n) {
  //O(1)
  sum = (n * (n + 1)) / 2; // O(1)
  return sum; //O(1)
}
// console.log(sums(10))
// The space Complexity is O(1) -- Constant Time Complexity
//So Total Time Complexity is O(1) -- Constant Time Complexity

//Array Method
//Method 1
function findPair(arr, target) {
  for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
  return [0, 0];
}
// console.log(findPair([1,3,6,7],10))
// Time Complexity is O(n2) T
// Space Complexity is O(1) S

function findPair2(arr, target) {
  let set = [];
  for (i = 0; i < arr.length; i++) {
    set.push(i);
    if (set.includes(target - arr[i])) {
      return [target - arr[i], arr[i]];
    }
  }
}

// console.log(findPair2([1,3,6,7],10))
// here the Time Complexity is O(n)
//Space Complexity is 0(n)
function findPair3(arr, target) {
  let set = new Set();

  for (let num of arr) {
    if (set.has(target - num)) {
      return [target - num, num];
    }
    set.add(num);
  }
}
// console.log(findPair2([1,3,6,7],8))
// here the Time Complexity is O(n)
//Space Complexity is 0(n)

function targetToLast(arr, target) {
  for (let i = 0, j = arr.length - 1; i < j; ) {
    if (arr[j] === target) {
      j--;
    } else if (arr[i] === target) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      j--;
    } else {
      i++;
    }
  }
  return arr;
}

// console.log(targetToLast([1, 3, 1, 3, 1, 6, 7], 7));
//space complexity is O(1)
// Time is O(n)

function targetToLast(arr, target) {
  const occurrences = arr.filter((num) => num === target);
  const nonOccurrences = arr.filter((num) => num !== target);
  return nonOccurrences.concat(occurrences);
}

// Time is O(n)
//space complexity is O(n  )

//Fibonacci Sequece

function fibonacci(number) {
  let array = [0, 1];
  for (i = 2; i < number; i++) {
    array[i] = array[i - 1] + array[i - 2];
  }
  return array;
}

// console.log(fibonacci(10))

//Time complexity is linear O(n)
// Space Complexity is linear O(n)

//Factorial of Number

function factorail(number) {
  let result = 1;
  for (i = 2; i <= number; i++) {
    result = result * i;
  }
  return result;
}
// console.log(factorail(5))

//Time complexity is linear O(n)
// Space Complexity is cosntant O(1)

//Prime Number

function primeNumber(number) {
  if (number < 2) {
    return false;
  }
  for (i = 2; i < number; i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
}
// console.log(primeNumber(6))
//Time complexity is linear O(n)
// Space Complexity is cosntant O(1)

//Prime Number -2

function primeNumber(number) {
  if (number < 2) {
    return false;
  }
  for (i = 2; i < Math.sqrt(number); i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
}
// console.log(primeNumber(6))
//Time complexity is linear O(sqrt(n))
// Space Complexity is cosntant O(1)

//Recursive Of Fabinacci
function recFeb(n) {
  if (n < 2) {
    return n;
  }
  return recFeb(n - 1) + recFeb(n - 2);
}
// console.log(recFeb(8))
//The time complexity is O(2^N)

//Recursion for factorail of Number
function recfact(n) {
  if (n < 1) {
    return 1;
  }
  return n * recfact(n - 1);
}

// console.log(recfact(4))
//Time complexity is O(N )

//Linear Search

function linearSearch(n, t) {
  for (i = 0; i < n.length; i++) {
    if (n[i] === t) {
      return i + 1;
    }
  }
  return -1;
}
// console.log(linearSearch([1,2,3,5,5],5))
//Time Complexity O(N)

//Binary Search

function binarySearch(array, target) {
  let leftIndex = 0;
  let rightIndex = array.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (target === array[middleIndex]) {
      return middleIndex;
    }

    if (target < array[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }

  return -1;
}
// console.log(binarySearch([1, 2, 3, 4, 5], 1));
//The time complexity of this is O(log n)
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
// console.log(binarySearchRecursive([1, 2, 3, 4, 5], 1));
//The time complexity of this is O(log n)

//Data Struture
//Object

const obj = { name: "Arun Vinod k", Age: 23 };
// console.log(obj)
// console.log(Object.entries(obj))
// console.log(Object.values(obj))
// console.log(Object.keys(obj))

//Linked List

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class linkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  // O(1) T
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }
  //O(N) T

  insert(value, index) {
    if (index < 0 || index > this.size) {
      return;
    }
    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }
  removeIndex(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }
    let removedNode;
    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removedNode = prev.next;
      prev.next = removedNode.next;
    }
    this.size--;
    return removedNode.value;
  }
  removeValue(value) {
    if (this.isEmpty()) {
      return null;
    }

    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return value;
    } else {
      let prev = this.head;

      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
      }

      if (prev.next) {
        const removedNode = prev.next;
        prev.next = removedNode.next;
        this.size--;
        return value;
      }

      return value;
    }
  }
  search(value) {
    if (this.isEmpty()) {
      return -1;
    }
    let i = 0;
    let curr = this.head;
    while (curr) {
      if (curr.value === value) {
        return i;
      }
      curr = curr.next;
      i++;
    }
    return -1;
  }
  reverse() {
    let prev = null;
    let curr = this.head;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }
  print() {
    if (this.isEmpty()) {
      console.log("List is Empty");
    } else {
      let curr = this.head;
      let listValues = "";
      while (curr) {
        listValues += `${curr.value} `;
        curr = curr.next;
      }
      console.log(listValues);
    }
  }
}

const list = new linkedList();
console.log("List is Empty", list.isEmpty());
console.log("List Size", list.getSize());
list.print();
list.prepend(10);
list.print();
list.prepend(20);
list.prepend(30);
list.append(12);
list.print();
list.insert(34, 3);
list.print();
list.removeIndex(1);
console.log("............");
list.print();
list.removeValue(12);
console.log("............");
list.print();
console.log(list.search(11));
list.reverse()
list.print()
//Array inertion

let arr = [18, 30, 15, 70, 12];
let x = 50; // element to be inserted
let pos = 4;
let n = arr.length;

// console.log("Array elements before insertion");
// console.log(arr.join(' '));

arr.splice(pos - 1, 0, x); // insert x at position pos
n++;

// console.log("Array elements after insertion");
// console.log(arr.join(' '));

//Array insertion in different method

let arr2 = [12, 23, 43, 12, 4];
pos = 3;
newVal = 54;
// console.log("Before",arr2)
for (i = arr2.length; i >= pos - 1; i--) {
  arr2[i] = arr2[i - 1];
}
arr2[pos - 1] = newVal;

// console.log("After",arr2)

//deletion using the splice

const arr3 = [1, 2, 3, 4, 4, 5];
posDel = 4;
// console.log("Before",arr3)

arr3.splice(posDel - 1, 1);
// console.log("After",arr3)

//Deletion Using For loop

let arr4 = [32, 54, 454, 5, 54];
posDele = 3;
// console.log("Before",arr4)
for (i = posDele - 1; i < arr4.length; i++) {
  arr4[i] = arr4[i + 1];
}
arr4.length--;
// console.log("After",arr4)

//Search an element
const array = [1, 2, 3, 54, 64, 32];
const search = 23;
for (i = 0; i < array.length; i++) {
  if (array[i] == search) {
    // console.log(`The searched element ${search} is on the posistion ${i+1}`)
    return;
  }
}
// console.log("Sorry")

//Search an element method 2

const arrays = [1, 2, 3, 54, 64, 32];
const searchs = 3;
const index = arrays.indexOf(searchs);
if (index !== -1) {
  // console.log("True")
} else {
  // console.log("Sorry")
}

//upadate an element

const arra = [1, 2, 3, 54, 64, 32];
const updatePos = 4;
const val = 69;

// console.log("Before",arra)
arra[updatePos - 1] = val;
// console.log("After",arra)

// Two Dimensional Array

const arrayTwo = [
  [1, 5, 9],
  [9, 4, 7],
  [2, 6, 5],
];

for (i = 0; i < arrayTwo.length; i++) {
  for (j = 0; j < arrayTwo[i].length; j++) {
    // process.stdout.write(arrayTwo[i][j] + " ")
  }
  // console.log()
}

// arrayTwo.forEach(x => console.log(x.join(' ')));
arrayTwo[0].splice(1, 1);
for (let row of arrayTwo) {
  const rows = row.join(" ");
  // console.log(rows)
}
