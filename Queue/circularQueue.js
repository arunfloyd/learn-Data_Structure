class MyCircularQueue {
  constructor(k) {
    this.queue = [];
    this.size = k;
  }

  enQueue(value) {
    if (this.size === this.queue.length) return false;
    this.queue.push(value);
    return true;
  }

  deQueue() {
    if (this.queue.length === 0) return false;
    this.queue.shift();
    return true;
  }

  Front() {
    if (this.queue.length === 0) return -1;
    return this.queue[0];
  }

  Rear() {
    if (this.queue.length === 0) return -1;
    return this.queue[this.queue.length - 1];
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  isFull() {
    return this.size === this.queue.length;
  }
  print() {
    let list = "";
    for (let i = 0; i < this.queue.length; i++) {
      list += `${this.queue[i]} `;
    }
    console.log(list);
  }
}

const circleQ = new MyCircularQueue();
circleQ.enQueue(1);
circleQ.enQueue(7);
circleQ.enQueue(0);

circleQ.print();
circleQ.deQueue();
circleQ.print();

//   console.log(circleQ.Front(), circleQ.Rear());
