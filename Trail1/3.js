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
  prepend(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }
  append(value) {
    const node = new Node(value);
    if (!this.head) {
      return -1;
    }
    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }
    node.next = curr.next;
    curr.next = node;
  }
  removeFirst() {
    if (!this.head) {
      return -1;
    }
    this.head = this.head.next;
  }
  removeLast() {
    if (!this.head) {
      return -1;
    }
    let curr = this.head;
    while (curr.next.next) {
      curr = curr.next;
    }
    curr.next = null;
  }
  insertIndexValue(value, index) {
    if (index < 0 || index > this.size) {
      return -1;
    }
    if (index === 0) {
      prepend();
    } else {
      const node = new Node(value);
      let curr = this.head;
      for (let i = 0; i < index - 1; i++) {
        curr = curr.next;
      }
      node.next = curr.next;
      curr.next = node;
    }
  }
  deleteIndex(index) {
    if (index < 0 || index > this.size) {
      return -1;
    }
    if (index === 0) {
      this.head = this.head.next;
    } else {
      let curr = this.head;
      for (let i = 0; i < index - 1; i++) {
        curr = curr.next;
      }
      curr.next = cur.next.next;
    }
  }
  deleteByValue(value) {
    if (!this.head) {
      return -1;
    }
    let curr = this.head;
    while (curr.next.next) {
      if (curr.value === value) {
        curr.next = curr.next.next;
      }
      curr = curr.next;
    }
    return -1;
  }
  search(value) {
    if (!this.head) {
      return -1;
    }
    let curr = this.head;
    let i = 0;
    while (curr) {
      if (curr.value === value) {
        return i;
      }
      curr = curr.next;
      i++;
    }
    return -1;
  }
  reverse(){
    if(!this.head){
        return -1
    }
    let prev =null
    let curr= this.head
    while(curr){
        let next = curr.next
        curr.next = prev
        prev = curr
        curr= next
    }
    this.head=prev
  }
  print() {
    let curr = this.head;
    let list = "";
    while (curr) {
      list += `${curr.value} `;
      curr = curr.next;
    }
    console.log(list);
  }
}
const link = new LinkedList();
link.prepend(1);
link.prepend(2);
link.append(0);
link.removeFirst();
link.removeLast();
link.deleteIndex(0);
link.prepend(2);
link.prepend(8);
console.log(link.search(2));
link.reverse()
link.print();
