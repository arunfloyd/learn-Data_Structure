// const bubbleSort = (arr) => {
//   const n = arr.length;
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }
//   return arr;
// };

// console.log(bubbleSort([3, 6, 2, 7, 3, 8, 1]));

// const selectionSort = (arr) => {
//   const n = arr.length;
//   for (let i = 0; i < n; i++) {
//     let minIndex = i;
//     for (let j = i + 1; j < n; j++) {
//       if (arr[j] < arr[minIndex]) {
//         minIndex = j;
//       }
//     }
//     if (minIndex !== i) {
//       [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
//     }
//   }
//   return arr;
// };
// console.log(selectionSort([4, 3, 2, 1, 5, 3]));

// const insertionSort = (arr) => {
//   const n = arr.length;
//   for (let i = 1; i < n; i++) {
//     let key = arr[i];
//     let j = i - 1;
//     while (j >= 0 && arr[j] > key) {
//       arr[j + 1] = arr[j];
//       j--;
//     }
//     arr[j + 1] = key;
//   }
//   return arr
// };
// console.log(insertionSort([5,4,7,1,6]))

// function mergeSort(arr) {
//   if (arr.length <= 1) return arr;
//   let mid = Math.floor(arr.length / 2);

//   let left = mergeSort(arr.slice(0, mid));
//   let right = mergeSort(arr.slice(mid));

//   return merge(left, right);
// }
// function merge(left, right) {
//   let sortedArr = [];
//   while (left.length && right.length) {
//     if (left[0] < right[0]) {
//       sortedArr.push(left.shift());
//     } else {
//       sortedArr.push(right.shift());
//     }
//   }
//   return [...sortedArr, ...left, ...right];
// }

// console.log(mergeSort([1, 7, 3, 2, 5,1]));

// function quickSort(arr) {
//   if (arr.length <= 1) return arr;

//   const pivot = arr[0];
//   const left = [];
//   const right = [];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < pivot) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }
//   return [...quickSort(left), pivot, ...quickSort(right)];
// }

// console.log(quickSort([1, 4, 6, 3, 2]));

// class Stack{
//     constructor(value){
//         this.stack = []
//     }
//     push(element){
//         this.stack.push(element)
//     }
//     pop(){
//         if(this.isEmpty()){
//             return "Stack is Empty"
//         }
//         this.stack.pop()
//     }
//     peek(){
//         if(this.isEmpty()){
//             return "Stack is Empty"
//         }
//         return this.stack[this.size()-1]
//     }
//     size(){
//         return this.stack.length
//     }
//     isEmpty(){
//         return this.size === 0
//     }
//     printStack(){
//         let stack = ""
//         for(let i=0;i<this.size();i++){
//             stack+=`${this.stack[i]} `
//         }
//         console.log(stack)
//     }
// }
// const stack = new Stack()
// stack.push(2)
// stack.push(1)
// stack.printStack()
// stack.pop()
// stack.printStack()

// function reverseWords (s){
//     const split = s.split(" ")
//     const stack = []

//     for(let i of split){
//         stack.push(i)
//     }
//     let result =""
//     while(stack.length){
//         const curr = stack.pop()
//         if(curr){
// result +=" "+curr

//         }
//     }
//     return result.trim()
// }
// console.log(reverseWords("the sky is blue")); //Output : blue is sky the

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }
// class Stack {
//   constructor() {
//     this.top = null;
//     this.size = 0;
//   }
//   push(value) {
//     const node = new Node(value);
//     node.next = this.top;
//     this.top = node;
//     this.size++;
//   }
//   pop() {
//     if (this.isEmpty()) {
//       return null;
//     }
//     this.top = this.top.next;
//     this.size++;
//   }
//   peek(){
//     if(this.isEmpty()){
//         return null
//     }
//     return this.top.value
//   }
//   isEmpty(){
//     return this.size === 0
//   }
//   print(){
//     let stack = ""
//     let curr = this.top
//     while(curr){
//         stack+=`${curr.value} `
//         curr= curr.next
//     }
//     console.log(stack)
//   }
// }
// const stack = new Stack()

// stack.push(1)
// stack.print()
// stack.push(4)
// stack.print()
// stack.pop()
// stack.print()

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }
// class Queue {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.size = 0;
//   }
//   isEmpty() {
//     return !this.size;
//   }
//   enqueue(value) {
//     const node = new Node(value);
//     if (this.isEmpty()) {
//       this.head = node;
//       this.last = node;
//     } else {
//       this.last.next = node;
//       this.last = node;
//     }
//     this.size++;
//   }
//   dequeue(){
//     if(this.isEmpty()) return null

//     const removeItem = this.head
//     if(this.head === this.tail){
//         this.tail = null
//         return
//     }
//     this.head = this.head.next
//     this.size --
//   }

//   peek(){
//     return this.head
//   }
//   print(){
//     let list =""
//     let curr = this.head
//     while(curr){
//         list+=`${curr.value} `
//         curr=curr.next
//     }
//     console.log(list)
//   }
// }

// const queue = new Queue ()
// queue.enqueue(1)
// queue.enqueue(2)
// queue.dequeue()
// queue.peek()
// queue.print()

// function circularQueue(k) {
//   this.queue = [];
//   this.size = k;

//   this.enqueue = function (value) {
//     if (this.size === this.queue.length) return false;
//     this.queue.push(value);
//   };
//   this.dequeue = function () {
//     if (this.queue.length === 0) return false;
//     this.queue.shift();
//   };
//   this.front = function () {
//     if (this.queue.length === 0) return -1;
//     return this.queue[0];
//   };
//   this.Rear = function () {
//     if (this.queue.length === 0) return -1;
//     return this.queue[this.queue.length - 1];
//   };
//   this.isEmpty = function () {
//     return this.queue.length === 0;
//   };
//   this.isFull = function () {
//     return this.size === this.queue.length;
//   };
//   this.Print = function () {
//     let list ="";
//     for (let i = 0; i < this.queue.length; i++) {
//       list += " " +this.queue[i];
//     }
//     console.log(list);
//   };
// }
// const queue = new circularQueue(3);
// queue.enqueue(4);
// queue.enqueue(1);
// queue.enqueue(8);
// queue.Print();
// console.log(queue.isFull())
// console.log(queue.Rear())
// console.log(queue.front())

class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }
  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }
  set(key,value){
    const index = this.hash(key)
    const bucket = this.table[index]
    if(!bucket){
        this.table[index] =[[key,value]]
    }else{
        const sameKeyItem = bucket.find(item => item[0]===key)
        if(sameKeyItem){
            sameKeyItem[1]=value
        }else{
            bucket.push([key,value])
        }
    }
  }
  get(key){
    const index = this.hash(key)
    const bucket = this.table[index]
    if(bucket){
        const sameKeyItem = bucket.find(item=>item[0]===key)
        if(sameKeyItem){
            return sameKeyItem[1]
        }
    }
    return undefined
  }
  remove(key){
    const index = this.hash(key)
    const bucket = this.table[index]
    if(bucket){
        const sameKeyItem = bucket.find(item=>item[0]===key)
        if(sameKeyItem){
            bucket.splice(bucket.indexOf(sameKeyItem),1)
        }
    }
  }
  display(){
    for(let i=0;i<this.table.length;i++){
        if(this.table[i]){
            console.log(i,this.table[i])
        }
    }
  }

}
const table = new HashTable(50)

table.set('name','Bruce')
table.set('age',25)
table.display()

table.set("mane",'Clark')
table.display()