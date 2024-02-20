class Node {
    constructor(value){
        this.value=value
        this.next = null
    }
}
class linkedList{
    constructor(){
        this.head = null
        this.size = 0
    }
    isEmpty(){
        return this.size===0
    }
    getSize(){
        return this.size
    }
    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head= node
        }else{
            node.next=this.head
            this.head=node
        }
        this.size++
    }
    append(value){
        const node = new Node (value)
        if(this.isEmpty()){
            this.head= node
        }else{
            let prev = this.prev
            while(prev){
                prev=prev.next
            }
            this.prev=node
        }
        this.size++ 
    }
    insert(value,index){
        if(index<0 || index>this.size){
            return console.log("Error ")
        }
        if(index === 0){
            this.prepend(value)
        }else{
            const node = new Node(value)
            let prev = this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            node.next = prev.next
            prev.next=node
            this.size++
        }
    }
    removeIndex(index){
        if(index<0||index>this.size){
            return console.log("Error")
        }
        let removedNode;
        if(index ===0){
            removedNode = this.head
            this.head= removedNode.next
        }else{
            let prev = this.head
            for(let  i=0;i<index-1;i++){
                prev=prev.next
            }
            removedNode = prev.next
            prev.next= removedNode.next
        }
        this.size--

    }
    search(value){
        if(this.isEmpty()){
            return console.log("Its Empty")
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
        return console.log("Not FOund")
    }
    removeValue(value){
        if(this.isEmpty()){
            return console.log("Empty Linked List")
        }
        if(this.head.value === value){
            this.head = this.head.next
            this.size --
        }else{
            let removedNode
            let prev=this.head
            while(prev.next && prev.next.value !==value){
                prev = prev.next
            }
            if(prev.next){
                removedNode=prev.next
                prev.next =removedNode.next
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
            prev= curr
            curr = next
        }
        this.head= prev
    }
    print(){
        if(this.isEmpty()){
            console.log("Empty Linked List")
        }else{
            let curr = this.head
            let listValue = ""
            while(curr){
                listValue += `${curr.value} `
                curr=curr.next
            }
            console.log(listValue)
        }
    }
}

const link = new linkedList()
console.log(link.isEmpty())
console.log(link.getSize())
link.prepend(10)
link.prepend(20)
link.insert(34,2)

console.log(link.getSize())
link.print()
link.insert(20,2)
link.print()
link.insert(22,1)
link.print()
link.removeIndex(1)
link.print()
link.insert(9,3)
link.print()
link.removeValue(9)
link.print()
console.log(link.search(10))
link.reverse()
link.print()
