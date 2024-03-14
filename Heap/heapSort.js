class Heap {
    constructor() {
       this.heap = [];
    }
   
    insert(value) {
       this.heap.push(value);
       this.heapifyUp();
    }
   
    delete() {
       const max = this.heap[0];
       this.heap[0] = this.heap[this.heap.length - 1];
       this.heap.pop();
       this.heapifyDown();
       return max;
    }
   
    heapifyUp() {
       let index = this.heap.length - 1;
       while (index > 0) {
         let parentIndex = Math.floor((index - 1) / 2);
         if (this.heap[parentIndex] < this.heap[index]) {
           [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
           index = parentIndex;
         } else {
           break;
         }
       }
    }
   
    heapifyDown() {
       let index = 0;
       while (true) {
         let leftChildIndex = 2 * index + 1;
         let rightChildIndex = 2 * index + 2;
         let largest = index;
         if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] > this.heap[largest]) {
           largest = leftChildIndex;
         }
         if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[largest]) {
           largest = rightChildIndex;
         }
         if (largest !== index) {
           [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
           index = largest;
         } else {
           break;
         }
       }
    }
}   
   
   function heapSort(arr) {
    const heap = new Heap();
    for (let i = 0; i < arr.length; i++) {
       heap.insert(arr[i]);
    }
    const sorted = [];
    while (heap.heap.length > 0) {
       sorted.push(heap.delete());
    }
    return sorted;
   }
   
   let arr = [1, 6, 2, 3, 7, 3, 4, 6, 9];
   arr = heapSort(arr);
   console.log(arr);
   

// Summary  :
// Time Complexity: O(n log n)
// Space Complexity: O(1)