class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }
  push(val) {
    const node = new Node(val);
    node.next = this.top;
    this.top = node;
    this.size++;
  }
  pop() {
    if (this.size === 0) {
      console.log("UnderFlow");
      return;
    }
    this.top = this.top.next;
    this.size--;
  }
  peek() {
    if (this.size === 0) {
      console.log("UnderFlow");
      return;
    }
    console.log(this.top);
  }
  print() {
    let str = "";
    let curr = this.top;
    while (curr) {
      str += curr.value;
      curr = curr.next;
    }
  }
}
