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
      return;
    }
    node.next = this.head;
    this.head = node;
  }
  removePrepend() {
    if (!this.head) {
      return -1;
    }
    this.head = this.head.next;
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
    node.next = null;
  }
  removeAppend() {
    if (!this.head) {
      return -1;
    }
    let curr = this.head;
    while (curr.next.next) {
      curr = curr.next;
    }
    curr.next = curr.next.next;
  }
  addIndexVal(value, index) {
    if (index < 0 || index > this.size) {
      return -1;
    }
    const node = new Node(value);
    let curr = this.head

    if (index === 0) {
      if (!this.head) {
        this.head = node;
        return;
      }
      node.next = curr.next
      curr.next = node
    }else{
        for(let i=0 ; i<index-1;i++){
            curr= curr.next
        }
        node.next = curr.next
        curr.next = node
    }
  }
  removeIndex(index){
    if(index<0|| index>this.size){
        return -1
    }
    if(index === 0){
        this.head= this.head.next
    }else{
        let curr = this.head
   
        for(let i=0 ;i<index-1;i++){
        curr = curr.next
        }
        curr.next=curr.next.next
    }
   
  }
  removeValue(value){
    if(!this.head){
        return -1
    }
    let curr = this.head
    while(curr && curr.next){
        if(curr.next.value === value){
            if(curr.next){
                curr.next = curr.next.next

            }
        }
        
        curr= curr.next
    }
    return -1
  }
  reverse(){
    if(!this.head){
        return -1
    }
    let curr= this.head
    let prev = null
    while(curr){
        const node = curr.next
        curr.next = prev
        prev = curr
        curr = node
    }
    this.head = prev
  }
  removeMiddle(){
    if(!this.head){
        return -1
    }
    let i = 1
    while(curr){
        curr = curr.next
    }
    let middle = Math

  }
  print() {
    if (!this.head) {
      return -1;
    }
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
link.prepend(6);
link.prepend(4);
link.print();
link.removePrepend();
link.append(5);
link.removeAppend();
link.print();
link.addIndexVal(12,0)
link.print();
link.removeIndex(0)
link.print();
link.removeValue(1)
link.reverse()
link.print()
link.removeMiddle()
