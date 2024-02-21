class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }
  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }
    let curr= this.head
    while(curr.next){
        curr=curr.next
    }
   curr.next= node
  }
  print() {
    if (!this.head) {
      return;
    }
    let curr = this.head;
    let arr = "";
    while (curr) {
        arr+=`${curr.value} `
      curr = curr.next;
    }
    console.log(arr)
  }
}

const list = new LinkedList();
const array = [1, 2, 3, 4, 5, 6];
for (const val of array) {
  list.append(val);
}
list.print()