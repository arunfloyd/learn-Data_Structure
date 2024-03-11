// Implement a min heap:

// -> insert, extract_min

// property:
// - elements are in ascending order
// - complete binary tree (node is smaller than it’s children)
// - root is the most minimum
// - insert takes O(logn) time
//     - insert to the bottom right
//     - bubble up until it meets requirements
// - extract_min takes O(logn) time
//     - replace min with bottom right
//     - bubble down until it meets requirements

class MinHeap {
  constructor() {
    this.data = [];
  }
  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }
  getLeftChildIndex(i) {
    return i * 2 + 1;
  }
  getRightIndex(i) {
    return i * 2 + 2;
  }
  swap(i1, i2) {
    const temp = this.data[i1];
    this.data[i1] = this.data[i2];
    this.data[i2] = temp;
  }
  push(key) {
    this.data.push(key); // Add the key to the end of the array
    this.heapifyUp();
  }
  pop() {
    const minValue = this.data[0];
    this.data[0] = this.data[this.data.length - 1]; // Replace the root with the last element
    this.data.pop(); // Remove the last element
    this.heapifyDown();
    return minValue;
  }
  heapifyDown() {
    let currentIndex = 0;

    while (this.getLeftChildIndex(currentIndex) < this.data.length) {
      let smallestChildIndex = this.getLeftChildIndex(currentIndex);

      if (
        this.getRightIndex(currentIndex) < this.data.length &&
        this.data[this.getRightIndex(currentIndex)] <
          this.data[smallestChildIndex]
      ) {
        smallestChildIndex = this.getRightIndex(currentIndex);
      }
      if (this.data[currentIndex] > this.data[smallestChildIndex]) {
        this.swap(currentIndex, smallestChildIndex);
        currentIndex = smallestChildIndex;
      } else {
        return;
      }
    }
  }
  heapifyUp() {
    let currentIndex = this.data.length - 1;
    while (
      currentIndex > 0 &&
      this.data[currentIndex] < this.data[this.getParentIndex(currentIndex)]
    ) {
      this.swap(currentIndex, this.getParentIndex(currentIndex));
      currentIndex = this.getParentIndex(currentIndex);
    }
  }
  poll() {
    const maxValue = this.data[0];
    this.data[0] = this.data[this.data.length - 1];
    this.data.length--;
    this.heapifyDown();
    return maxValue;
  }
}

const minHeap = new MinHeap();
minHeap.push(3);
minHeap.push(23);
minHeap.push(21);
minHeap.push(13);
minHeap.push(223);
minHeap.push(121);
console.log(minHeap.data.join(",")); // [3, 21, 23]
minHeap.pop();
console.log(minHeap.data.join(",")); // [21, 23]

console.log("............................................");
a = [];

a.push(minHeap.poll());
a.push(minHeap.poll());
a.push(minHeap.poll());
a.push(minHeap.poll());
a.push(minHeap.poll());

console.log("top 5 items", a);
