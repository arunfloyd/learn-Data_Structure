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
    this.tail = null;
  }
  prepend(value) {
    const node = new Node(value);
    node.next = this.head;
    if (this.head) {
      node.next.prev = node;
    } else {
      this.tail = node;
    }
    this.head = node;
  }
  removePrepend() {
    this.head = this.head.next;
    this.head.prev = null;
  }
}
