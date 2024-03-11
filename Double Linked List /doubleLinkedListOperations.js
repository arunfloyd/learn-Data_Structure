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
  prepend(value) {
    const node = new Node(value);
    node.next = this.head;
    if (this.head) {
      this.head.prev = node;
    }
    this.head = node;
  }
  removePrepend() {
    if (!this.head) {
      return -1;
    }
    this.head = this.head.next;
    this.head.prev = null;
  }
  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }
    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }
    curr.next = node;
    node.prev = curr;
  }
  removeAppend() {
    if (!this.head) {
      return -1;
    }
    let curr = this.head;
    while (curr.next.next) {
      curr = curr.next;
    }
    curr.next = null;
  }
  size() {
    return this.size;
  }
  addIndexVal(value, index) {
    const node = new Node(value);
    if (index < 0 || index >= this.size) {
      return console.log("Invalid Function");
    }
    if (index === 0) {
      node.next = this.head;
      if (this.head) {
        this.head.prev = node;
      }
      this.head = node;
    } else {
      let curr = this.head;
      for (let i = 0; i < index - 1; i++) {
        curr = curr.next;
      }
      node.next = curr.next;
      if (curr.next) {
        curr.next.prev = node;
      }
      node.prev = curr;
      curr.next = node;
    }
  }
  removeIndex(index) {
    if (index < 0 || index > this.size) {
      return -1;
    }
    if (index === 0) {
      this.head = this.head.next;
      if (this.head) {
        this.head.prev = null;
        return;
      }
    }
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    if (curr.next) {
      curr.next = curr.next.next;
      if (curr.next) {
        curr.next.prev = curr;
      }
    }
  }
  print() {
    if (!this.head) {
      return -1;
    }
    let curr = this.head;
    let list = "";
    while (curr) {
      list += `${curr.value} `;
      curr = curr.next;
    }
    console.log(list);
  }
}
const doub = new DoubleLinkedList();
doub.prepend(1);
doub.prepend(2);
doub.append(5);
doub.removePrepend();
doub.removeAppend();
doub.print();
doub.append(5);
doub.print();
doub.removeAppend();
doub.addIndexVal(12, 1);
doub.removeIndex(1);
doub.print();
