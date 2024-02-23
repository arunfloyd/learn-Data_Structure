// Implement Queue using Stacks

//implement a FIFO queue using only two stacks

// Implement queue should have all functions of queue(enqueue ,front ,denque and empty)

var MyQueue = function () {
  this.stack1 = [];
  this.stack2 = [];
};
MyQueue.prototype.enqueue = function (x) {
  this.stack1.push(x);
};
MyQueue.prototype.dequeue = function () {
  if (this.stack2.length === 0) {
    while (this.stack1.length > 0) {
      this.stack2.push(this.stack1.pop());
    }
  }

  return this.stack2.pop();
};
MyQueue.prototype.front = function () {
    if (this.stack2.length === 0) {
        while (this.stack1.length > 0) {
          this.stack2.push(this.stack1.pop());
        }
      }
    
      return this.stack2[this.stack2.length -1];

};
MyQueue.prototype.empty = function () {
    return this.stack1.length === 0 && this.stack2.length === 0 
};

const queue = new MyQueue()

queue.enqueue(3)
queue.enqueue(6)
console.log(queue.front())