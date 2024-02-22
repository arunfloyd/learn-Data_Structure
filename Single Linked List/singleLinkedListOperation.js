class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null
  }
  appendTail(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  prepend(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }
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
    if (!this.head) {
      return;
    }
    let curr = this.head;
    while (curr.next.next) {
      curr = curr.next;
    }
    curr.next = curr.next.next;
  }
  addIndex(value, index) {
    if (index < 0 || index > this.size) {
      return -1;
    }
    const node = new Node(value);
    if (index === 0) {
      if (!this.node) {
        this.head = node;
        return;
      }
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
  removeIndex(index) {
    if (index < 0 || index > this.size) {
      return -1;
    }
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    curr.next = curr.next.next;
  }
  removeValue(value){
    if(!this.head){
        return -1
    }
    if(this.head.value === value){
        this.head = this.head.next
    }
    let curr = this.head
    while (curr&& curr.next){
        if(curr.next.value===value){
            curr.next = curr.next.next
        }
        curr=curr.next
    }
    return -1
  }
  search(value){
    if(!this.head){
        return -1
    }
    let curr= this.head
    let i =0
    while(curr){
        if(curr.value === value){
            console.log(i)
            return
        }
        i++
        curr=curr.next
    }
  }
  reverse(){
    if(!this.head){
        return
    }
    let prev= null
    let curr = this.head
    while(curr){
        let next = curr.next
        curr.next= prev
        prev = curr
        curr= next

    }
    this.head = prev
  }
  removeMiddle(){
    if(!this.head){
        return -1
    }
    let curr = this.head
    let i=1
    while(curr){
curr=curr.next
i++
    }
    let middle = Math.floor(i/2)
    let current = this.head
    for(let i=0 ;i<middle-1;i++){
        current=current.next
    }
    current.next=current.next.next

  }
  removeDuplicates(){
    if(!this.head){
        return
    }
    let curr = this.head
    let seen = new Set([curr.value])
    while(curr.next){
        if(seen.has(curr.next.value)){
            curr.next=curr.next.next
        }else{
            curr=curr.next
            seen.add(curr.value)
        }
    }
  }
  addAfter(target,value){
    const node = new Node(value)
    if(!this.head){
        this.head= node
        return
    }
    let curr = this.head
while(curr.next){
    if(curr.value === target){
        break
    }
    curr=curr.next
}
if(curr.next){
    node.next = curr.next
    curr.next= node
}else{
    return 
}

  }
  print() {
    if (!this.head) {
      return console.log("No Items");
    }
    let curr = this.head;
    let link = "";
    while (curr) {
      link += `${curr.value} `;
      curr = curr.next;
    }
    console.log(link);
  }
}

const list = new LinkedList();
list.append(7);
list.prepend(1);
list.prepend(2);
list.append(3);
list.print();
list.removePrepend();
list.removeAppend();
list.addIndex(12, 1);
list.print();
list.removeIndex(1);
list.removeValue(7)
list.print();
list.append(3);
list.prepend(1);
list.print();
list.search(1)
list.reverse();
list.removeMiddle()
list.print();
list.append(3);
list.append(3);
list.append(2);
list.append(2);
list.print();
list.removeDuplicates()
list.print();
list.addAfter(6,12)
list.print();
list.appendTail(19)
list.print();



