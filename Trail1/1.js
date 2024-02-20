class Node {
  constructor(value) {
    this.value = value;
    this.next = null
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const node = new Node(value);
    node.next = this.head
    this.head = node
  }
  print() {
    let current = this.head;
    let link =""
    while (current) {
        link+=`${current.value} `
      current = current.next;
    }
    console.log(link)
  }
}

const list = new LinkedList()
list.append(3)
list.append(2)
list.print()
