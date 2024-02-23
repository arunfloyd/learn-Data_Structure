// Circular Queue implementation

//The last position is connected back to the first position to make a circle

var MyCircularQueue = function (k) {
  this.queue = [];
  this.size = k;
};
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.size === this.queue.length) return false;
  this.queue.push(value);
  return true;
};

MyCircularQueue.prototype.deQueue = function () {
  if (this.queue.length === 0) return false;
  this.queue.shift();
  return true;
};
MyCircularQueue.prototype.Front = function () {
  if (this.queue.length === 0) return -1;
  return this.queue[0];
};
MyCircularQueue.prototype.Rear = function () {
  if (this.queue.length === 0) return -1;
  return this.queue[this.queue.length - 1];
};

MyCircularQueue.prototype.isEmpty = function () {
  return this.queue.length === 0;
};

MyCircularQueue.prototype.isFull = function () {
  return this.size === this.queue.length;
};

var circleQ = new MyCircularQueue()
circleQ.enQueue(1)
circleQ.enQueue(7)
circleQ.deQueue()


console.log(circleQ.Front(),circleQ.Rear())
