class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  isEmpty() {
    return !this.size;
  }

  enqueue(item) {
    const newNode = new Node(item);

    if (this.isEmpty()) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.size++;
    return this;
  }

  dequeue() {
    if (this.isEmpty()) return null;

    const itemToBeRemoved = this.first;

    if (this.first === this.last) {
      this.last = null;
    }

    this.first = this.first.next;
    this.size--;
    return itemToBeRemoved;
  }

  peek() {
    return this.first;
  }
  print() {
    let list = "";
    let current = this.first;
    while (current) {
      list += `${current.value} `;
      current = current.next;
    }
    console.log(list);
  }
}

const queue = new Queue();
queue.enqueue(2);
queue.enqueue(1);

queue.print();
