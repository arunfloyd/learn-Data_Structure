class Node{
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null

    }
}

class DoubleLinked{
    constructor(){
        this.head= null
    }
    prepend(value){
        const node = new Node(value)
        node.next = this.head
        if(this.head){
            this.head.prev=node
        }
        this.head = node
    }
    append(value){
        const node = new Node(value)
        if(!this.head){
            this.head = node
            return
        }
        let curr = this.head
        while(curr.next){
            curr=curr.next
        }
        node.prev = curr
        curr.next = node 
    }
    removePrepend(){
        if(!this.head){
            return -1
        }
        this.head = this.head.next
        this.head.prev= null
    }
    removeAppend(){
        if(!this.value){
            return
        }
        let curr = this.head
        while(curr.next){
            curr= curr.next
        }   
      curr.next = null 
    }
    addIndexValue(value,index){
        if(index<0|| index>this.size){
            return
        }
        const node = new Node(value)
        if(index===0){
            node.next = this.head
            if(this.head){
                this.head.prev= node
            }
            this.head= node
        }else{
            let curr = this.head
           for(let i=0;i<index-1;i++){
            curr=curr.next
           }
           node.next = curr
           node.prev=curr.prev
           curr.prev.next=node
           curr.prev =node
           
        }
    }
    removeIndex(index){
        if(index<0||index >this.size){
            return -1
        }
        if(index==0){
            this.head=this.head.next
            if(this.head){
                this.head.prev=null
                return
            }
        }
        let curr = this.head
        for(let i =0 ;i<index-1;i++){
            curr= curr.next
        }
       if(curr.next){
        curr.next= curr.next.next
        if(curr.next){
            curr.next.prev = curr
        }
       }
    }
    print(){
        let link =""
        let current = this.head
        while(current){
            link+=current.value +String.fromCharCode(32);
            current= current.next
        }
        console.log(link)
      }
}
const list = new DoubleLinked()
list.append(1)
list.prepend(2)

list.print()
