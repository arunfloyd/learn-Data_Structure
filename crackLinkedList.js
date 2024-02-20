class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }
  onFirst(data) {
    const node = new Node(data);
    node.next = this.head;
    this.head = node;
  }
  onLast(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      return;
    }
    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }
    curr.next = node;
  }
  onIndex(data, index) {
    if (index < 0 || index > this.size) {
      return console.error("Error");
    }
    const node = new Node(data);
    if (index === 0) {
      node.next = this.head;
      this.head = node;
    }
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    node.next = curr.next;
    curr.next = node;
  }
  removeFirst() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
  }
  removeLast() {
    if (!this.head) {
      return;
    }
    let curr = this.head;
    while (curr.next.next) {
      curr = curr.next;
    }
    curr.next = null;
  }
  removeIndex(index) {
    if (index < 0 || index > this.size) {
      return console.log("Invalid Index");
    }
    if (index === 0) {
      this.head = this.head.next;
    }
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    if (curr.next) {
      curr.next = curr.next.next;
    }
  }
//   print() {
//     let curr = this.head;
//     let listed = "";
//     while (curr) {
//       listed += `${curr.data}`;
//       curr = curr.next;
//     }
//   }
  print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}
const list = new LinkedList()
list.onFirst(3)
list.onFirst(7)
list.onFirst(5)
list.onLast(19)
list.removeFirst()
list.onIndex(44,2)
list.print()