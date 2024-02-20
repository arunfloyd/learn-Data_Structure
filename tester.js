class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class linkedList {
  constructor() {
    this.head = null;
    this.size = null;
  }
  isEmpty() {
    return this.size === 0;
  }

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  print() {
    if (this.isEmpty()) {
      return null;
    }
    let prev = this.head;
    let listed = "";
    while (prev) {
      listed += `${prev.value}`;
      prev = prev.next;
    }
    console.log(listed);
  }
  insert(index, value) {
    if (index < 0 || index > this.size) {
      return null;
    }
    if (index === 0) {
      this.prepend(value);
    } else {
      let prev = this.head;
      const node = new Node(value);
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next
      prev.next = node
      this.size++
    }
  }
  removeIndex(index){
    if(index<0||index>this.size){
        return null
    }
    let removedNode
    if(index===0){
        removedNode = this.head
        removedNode.next = this.head.next
    }else{
        let prev = this.head
        for(let i=0;i<index-1;i++){
            prev=prev.next
        }
        removedNode =prev.next
        prev.next = removedNode.next
    }
    this.size -- ;
  }
  removeValue(value){
    if(this.isEmpty()){
        return null
    }
    if(this.head.value===value){
        this.head = this.head.next
        this.size--
    }else{
        let prev = this.head
        while(prev.next && prev.next.value!==value){
            prev = prev.next
        }
        if(prev.next){
            const removedNode = prev.next
            prev.next = removedNode.next
            this.size--
        }
    }
  }
  reverse(){
    let prev = null
    let curr = this.head
    while(curr){
        let next = curr.next
        curr.next = prev
        prev=curr
        curr=next
    }
    this.head = prev
  }
}
const list = new linkedList();
list.append(1);
list.prepend(2);
list.print();
