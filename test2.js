class Node{
    constructor(value){
        this.value= value
        this.next=null
        this.prev =null
    }
}
class doublyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.size=0
    }
    isEmpty(){
        return this.size===0
    }
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            node.next = this.tail
            this.tail.next=node
            this.tail =node
        }
        this.size++;
    }
    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            node.next = this.head
            this.head.prev= node
            this.head = node
        }
        this.size++
    }
    insert(value,index){
        if(index<0||index>=this.size){
            return console.log("Error")
        }
        const node = new Node(value)
        if(index === 0){
            this.prepend(value)
        }else{
            let curr = this.head
            for(let i=0;i>index-1;i++){
                curr= curr.next
            }
            node.next = curr.next
            node.prev = curr
            curr.next = node
            if(curr.next){
                node.next.prev = node
            }else{
                this.tail = node
            }
        }
        this.size ++;
    }
    print() {
        let listed = "";
        let curr = this.head;
        while (curr) {
            listed += `${curr.value} `; 
            curr = curr.next;
        }
        console.log(listed); 
        }
    
}

const list = new doublyLinkedList()
console.log(list.isEmpty())
list.append(12)
list.prepend(18)
console.log(list.isEmpty())
list.print()
list.insert(14,1)
list.print()
console.log("Hello\0Waii");