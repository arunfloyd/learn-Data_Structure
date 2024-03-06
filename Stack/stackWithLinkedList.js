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
  push(value) {
    const node = new Node(value);
    node.next = this.top;
    this.top = node;
    this.size++;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }

    const node = this.top;
    this.top = this.top.next;
    this.size--;
    return node.value;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.top.value;
  }

  isEmpty() {
    return this.size === 0;
  }

  print() {
    let stack = "";
    let current = this.top;
    while (current) {
      stack += `${current.value} `;
      current = current.next;
    }
    console.log(stack);
  }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

// console.log(stack.peek()); // 3
// console.log(stack.pop()); // 3
// console.log(stack.peek()); // 2
// console.log(stack.pop()); // 2
// console.log(stack.peek()); // 1
// console.log(stack.pop()); // 1
// console.log(stack.peek()); // null

stack.print(); // []
