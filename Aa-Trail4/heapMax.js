class maxHeap {
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
      // Corrected method name
      return i * 2 + 2;
    }
    swap(i1, i2) {
      const temp = this.data[i1];
      this.data[i1] = this.data[i2];
      this.data[i2] = temp;
    }
    push(key) {
      this.data.push(key);
      this.heapifyUp();
    }
    poll() {
      // Renamed from pop to poll for clarity
      if (this.data.length === 0) {
        return null; // Handle empty heap case
      }
      const maxValue = this.data[0];
      this.data[0] = this.data[this.data.length - 1];
      this.data.pop();
      this.heapifyDown();
      return maxValue; // Return the removed maximum value
    }
    heapifyUp() {
      let currentIndex = this.data.length - 1;
      while (
        currentIndex > 0 &&
        this.data[currentIndex] > this.data[this.getParentIndex(currentIndex)]
      ) {
        this.swap(currentIndex, this.getParentIndex(currentIndex));
        currentIndex = this.getParentIndex(currentIndex);
      }
    }
    heapifyDown() {
      let currentIndex = 0;
      while (this.getLeftChildIndex(currentIndex) < this.data.length) {
        let largestChildIndex = this.getLeftChildIndex(currentIndex);
  
        if (
          this.getRightChildIndex(currentIndex) < this.data.length && // Corrected method call
          this.data[this.getRightChildIndex(currentIndex)] >
            this.data[largestChildIndex]
        ) {
          largestChildIndex = this.getRightChildIndex(currentIndex);
        }
        if (this.data[currentIndex] < this.data[largestChildIndex]) {
          this.swap(currentIndex, largestChildIndex);
          currentIndex = largestChildIndex;
        } else {
          return;
        }
      }
    }
     heapSort(arr) {
      const heap = new maxHeap();
      for (let i = 0; i < arr.length; i++) {
        heap.push(arr[i]); // Use push instead of insert
      }
      const sorted = [];
      while (heap.data.length > 0) {
        // Use heap.data.length to check if the heap is empty
        sorted.push(heap.poll()); // Use poll to remove and return the maximum element
      }
      return sorted;
    }
  }
  
  const maxHeapInstance = new maxHeap();
  
   maxHeapInstance.push(1);
   maxHeapInstance.push(11);
  
   maxHeapInstance.push(12);
   maxHeapInstance.poll();
   console.log(maxHeapInstance.data.join(','));
  
  
  
  let arr = [1, 6, 2, 3, 7, 3, 4, 6, 9];
  arr = maxHeapInstance.heapSort(arr);
  console.log(arr);
  