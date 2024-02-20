class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
  }
  addFirst(value) {
    const node = new Node(value);
    node.next = this.head;
    if (this.head) {
      this.head.prev = node;
    }
    this.head = node;
  }
  addLast(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    node.prev = current;
    current.next = node;
  }
  addAtIndex(value, index) {
    const node = new Node(value);
    if (index < 0 || index >= this.size) {
      return; // Exit if the index is out of bounds
    }
    if (index === 0) {
      node.next = this.head;
      if (this.head) {
        this.head.prev = node;
      }
      this.head = node;
    } else {
      let current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
      node.next = current;
      node.prev = current.prev;
      current.prev.next = node;
      current.prev = node;
    }
    this.size++; // Increment the size of the list
  }
  removeFirst() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
    if (this.head) {
      this.head.prev = null;
    }
  }
  removeLast() {
    if (!this.head) {
      return;
    }
    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    current.next = null;
  }
  removeIndex(index) {
    if (index < 0 || index > this.size) {
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
      if (this.head) {
        this.head.prev = null;
      }
    }
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    if(current.next){
        current.next = current.next.next
        if(current.next){
            current.next.prev= current
        }
    }    
  }
  print(){
    let link =""
    let current = this.head
    while(current){
        link+=current.value +String.fromCharCode(32);
        current= current.next
    }
    console.log(link)
  }
}

const list = new DoubleLinkedList()

list.addFirst(3)
list.addFirst(5)
list.addLast(10)
list.addAtIndex(9,2)
list.print()
list.removeFirst()
list.removeLast()
list.removeIndex(1)
list.print()
