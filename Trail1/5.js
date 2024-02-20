class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}
class LinkedList{
    constructor(){
        this.head= null
    }
    prepend(value){
        const node = new Node(value)
        if(!this.head){
            this.head= node
            return
        }
        node.next = this.head
        this.head = node
    }
    append(value){
        const node = new Node(value)
        if(!this.head){
            this.head = node
        }
        let curr = this.head
        while (curr.next){
            curr= curr.next
        }
        node.next = curr.next
        curr.next = node
    }
    removePrepend(){
        if(!this.head){
            return
        }
        this.head = this.head.next 
    }
    removeAppend(){
        if(!this.head){
            return
        }
        let curr = this.head
        while(curr.next.next){
            curr = curr.next
        }
        curr.next = curr.next.next
    }
    addIndexVal(value,index){
        const node = new Node(value)
        if(index <0 || index>this.size){
            return -1
        }
        if(index === 0 ){
            if(!this.head){
                this.head= node
                return
            }
            node.next = this.head
            this.head = node
        }else{
            let curr = this.head
            while(curr.next){
                curr= curr.next
            }
            node.next = curr.next
            curr.next = node
        }
    }
    removeIndex(index){
        if(index<0||index>this.size){
            return
        }
        let curr= this.head
        for(let i =0 ;i<index-1;i++){
            curr=curr.next
        }
        curr.next= curr.next.next
    }
    removeValue(value){
        if(!this.head){
            return
        }
        let curr = this.head
        while(curr.next){
            if(curr.value===value){
                curr.next = curr.next.next
            }
            curr=curr.next
            return
        }
        return -1
    }
    print(){
        if(!this.head){
            return -1
        }
        let curr = this.head
        let link = ""
        while(curr){
            link+=`${curr.value} ` 
            curr=curr.next
        }
        console.log(link)
    }
} 
const list = new LinkedList()
list.prepend(3)
list.prepend(5)
list.append(1)
list.append(6)
list.removePrepend()
list.removeAppend()
list.addIndexVal(32,2)
list.removeIndex(2)
list.removeValue(1)
list.print()
