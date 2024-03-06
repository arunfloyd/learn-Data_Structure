// class Heap {
//   constructor() {
//     this.data = [];
//   }
//   getParentIndex(i) {
//     return Math.floor((i - 1) / 2);
//   }
//   getLeftChildIndex(i) {
//     return i * 2 + 1;
//   }
//   getRightIndex(i) {
//     return i * 2 + 2;
//   }
//   swap(i1, i2) {
//     const temp = this.data[i1];
//     this.data[i1] = this.data[i2];
//     this.data[i2] = temp;
//   }
//   push(key) {
//     this.data.push(key)
//     this.heapifyUp();
//   }
//   pop() {
//     const maxValue = this.data[0];
//     this.data = this.data[this.data.length - 1];
//     this.data.pop();
//     this.heapifyDown();
//     return maxValue
//   }
//   heapifyDown() {
//     let currentIndex = 0;

//     while (this.data[this.getLeftChildIndex(currentIndex) !== undefined]) {
//       let biggestChildIndex = this.getLeftChildIndex(currentIndex);

//       if (
//         this.data[this.getRightIndex(currentIndex)] !== undefined &&
//         this.data[this.getRightIndex(currentIndex)] >
//           this.data[this.getLeftChildIndex(currentIndex)]
//       ) {
//         biggestChildIndex = this.getRightIndex(currentIndex);
//       }
//       if (this.data[currentIndex] < this.data[biggestChildIndex]) {
//         this.swap[(currentIndex, biggestChildIndex)];
//         currentIndex = biggestChildIndex;
//       } else {
//         return;
//       }
//     }
//   }
//   heapifyUp() {
//     let currentIndex = this.data.length - 1;
//     while (
//       this.data[currentIndex] > this.data[this.getParentIndex(currentIndex)]
//     ) {
//       this.swap(currentIndex, this.getParentIndex(currentIndex));
//     }
//   }
// }

// const heap = new Heap();
// heap.push(3);
// heap.push(23);
// heap.push(21);
// console.log(heap.data.join(","));
// heap.pop();
// console.log(heap.data.join(","));


class Heap {
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
       this.data.push(key); // Correctly add the key to the end of the array
       this.heapifyUp();
    }
    pop() {
       const maxValue = this.data[0];
       this.data[0] = this.data[this.data.length - 1]; // Correctly replace the root with the last element
       this.data.pop(); // Correctly remove the last element
       this.heapifyDown();
       return maxValue;
    }
    heapifyDown() {
       let currentIndex = 0;
   
       while (this.getLeftChildIndex(currentIndex) < this.data.length) { // Correct loop condition
         let biggestChildIndex = this.getLeftChildIndex(currentIndex);
   
         if (
           this.getRightIndex(currentIndex) < this.data.length &&
           this.data[this.getRightIndex(currentIndex)] > this.data[biggestChildIndex]
         ) {
           biggestChildIndex = this.getRightIndex(currentIndex);
         }
         if (this.data[currentIndex] < this.data[biggestChildIndex]) {
           this.swap(currentIndex, biggestChildIndex); // Correct swap function call
           currentIndex = biggestChildIndex;
         } else {
           return;
         }
       }
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
   }
   
   const heap = new Heap();
   heap.push(3);
   heap.push(23);
   heap.push(21);
   console.log(heap.data.join(","));
   heap.pop();
   console.log(heap.data.join(","));
   