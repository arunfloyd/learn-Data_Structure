class Node{
    constructor(value){
        this.value= value
        this.next = null
        this.prev = null
    }
}
class DoubleLinkedList{
    constructor(){
        this.head = null
    }
    prepend(value){
    const node = new Node(value)
    node.next = this.head
    if(this.head){
        this.head.prev = node
    }
  this.head= node
    }
    append(value){
        const node = new Node(value)
    }
    print(){
        if(!this.head){
            return -1
        }
        let curr = this.head
        let list = ""
        while(curr){
            list +=`${curr.value} `
            curr= curr.next
        }
        console.log(list)
    }
}
const link = new DoubleLinkedList()
link.prepend(1)
link.prepend(3)

link.print()