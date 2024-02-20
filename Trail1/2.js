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
    node.next = this.head;
    this.head = node;
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
  }
  removePrepend() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
  }
  removeAppend() {
    let curr = this.head;
    while (curr.next.next) {
      curr = curr.next;
    }
    curr.next = null;
  }
  addOnIndex(value, index) {
    const node = new Node(value);
    if (index < 0 || index > this.size) {
      return;
    }
    if (index === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let curr = this.head;
      for (let i = 0; i < index - 1; i++) {
        curr = curr.next;
      }
      node.next = curr.next;
      curr.next = node;
    }
  }
  removeOnIndex(index) {
    if (index < 0 || index > this.size) {
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
    } else {
      let curr = this.head;
      for (let i = 0; i < index - 1; i++) {
        curr = curr.next;
      }
      if (curr.next) {
        curr.next = curr.next.next;
      }
    }
  }
  search(value) {
    if (!this.head) {
      return -1;
    }
    let curr = this.head;
    let count = 0;
    while (curr) {
      if (curr.value === value) {
        console.log(count);
        return;
      }
      count++;
      curr = curr.next;
    }

    console.log("Not Found");
    return -1;
  }
  reverse() {
    if (!this.head) return -1;
    let prev = null;
    let nextNode = null;
    let curr = this.head;
    while (curr) {
      // Store the next node before changing curr.next
      nextNode = curr.next;
      // Reverse the link
      curr.next = prev;
      // Move on to the next node
      prev = curr;
      curr = nextNode;
    }
    // Reset the head to the last node (which is now the first)
    this.head = prev;
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

const list = new LinkedList();
list.append(12);
list.append(10);
list.prepend(1);
list.removeAppend();
list.addOnIndex(32, 1);
list.removeOnIndex(1);
list.search(12);
list.reverse();
list.print();
