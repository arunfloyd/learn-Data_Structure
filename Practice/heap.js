class minHeap {
  constructor() {
    this.data = [];
  }
  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }
  getLeftChildIndex(i) {
    return i * 2 + 1;
  }
  getRightChildIndex(i) {
    return i * 2 + 2;
  }
  swap(il, i2) {
    const temp = this.data[i1];
    this.data[i1] = this.data[i2];
    this.data[i2] = temp;
  }
  push(key) {
    this.data.push(key);
    this.heapifyUp;
  }
  pop() {
    this.data[0] = this.data[this.data.length - 1];
    this.data.pop();
    this.heapifDown();
  }
  heapifDown() {
    let currentIndex = 0;
    while (this.getLeftChildIndex(currentIndex) < this.data.length) {
      let smallestChildIndex = this.getLeftChildIndex(currentIndex);
      if (
        this.getRightChildIndex(currentIndex) < this.data.length &&
        this.data[this.getRightChildIndex(currentIndex)] <
          this.data[smallestChildIndex]
      ) {
        smallestChildIndex = this.getRightChildIndex(currentIndex);
      }
      if (this.data[currentIndex > this.data[smallestChildIndex]]) {
        this.swap(currentIndex, smallestChildIndex);
        currentIndex = smallestChildIndex;
      } else {
        return;
      }
    }
  }
  heapifyUp(){
    let currentIndex = this.data.length-1
    while(currentIndex>0&& this.data[this.ger])
  }
}
