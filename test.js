class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class linkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev=this.head
      while(prev.next){
        prev=prev.next
      }
      prev.next=node
    }
    this.size++;
  }
  prepend(value){
    const node = new Node(value)
    if(this.isEmpty()){
        this.head=node
    }else{
      node.next=this.head
      this.head=node
    }
    this.size++
  }
  insert(value,index){
    if(index<0||index>this.size){
        return console.log("Error")
    }
    if(this.isEmpty()){
        this.prepend(value)
    }else{
        const node = new Node(value)
        let prev = this.head
        for(let i=0;i<index-1;i++){
            prev=prev.next
        }
        node.next=prev.next
        prev.next=node
        this.size++
    }
  }
  removeValue(value){
    if(this.isEmpty()){
        return console.log("Its Empty")
    }
    if(this.head.value ===value){
        this.head = this.head.next
        this.size--;
    }else{
        let prev= this.head
        while(prev.next && prev.next.value!==value){
            prev=prev.next
        }
        if(prev.next){
            const removedNode = prev.next
            prev.next = removedNode.next
            this.size--
        }
    }
  }
  removeIndex(index){
    if(index<0||index>this.size){
        return null
    }
    let removedNode
    if(index===0){
        removedNode = this.head
        this.head=this.head.next   
    }else{
        let prev=this.head
        for(let i=0; i<index-1;i++){
            prev=prev.next
        }
        removedNode =prev.next
        prev.next=removedNode.next
    }
    this.size--;
  }
  updateValue(oldVal,newVal){
    let curr = this.head
    while(curr){
        if(curr.value === oldVal){
            curr.value = newVal
            return;
        }
        curr= curr.next
    }
  }
  search(value){
    if(this.isEmpty()){
        return -1
    }
    let i=0
    let curr = this.head
    while(curr){
        if(curr.value===value){
            return i
        }
        curr=curr.next
        i++
    }
  return -1
  }
  reverse(){
    let prev = null
    let curr = this.head
    while(curr){
        let next = curr.next
        curr.next= prev
        prev= curr
        curr=next
    }
    this.head=prev
  }
  print(){
    if(this.isEmpty()){
        console.log("This is a Empty")
    }else{
        let linked =''
        let curr = this.head
        while(curr){
            linked+=`${curr.value} `
            curr=curr.next
        }
        console.log(linked)
    }
  }
}
const list = new linkedList()
list.append(34)
list.append(20)
list.prepend(40)
list.append(70)
list.print()
list.insert(14,3)
list.print()
list.removeIndex(3)
list.print()
list.removeValue(34)
list.print()
console.log(list.search(70))
list.reverse()
list.updateValue(20,21)
list.print()




