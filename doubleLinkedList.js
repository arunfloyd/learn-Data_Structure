class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null; 
    }
}
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null; 
        this.size = 0;
    }
    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }
    prepend(value){
        const node = new Node(value)
        if(!this.head){
            this.head=node
            this.tail=node
        }else{
            node.next = this.head
            this.head.prev=node
            this.head = node
        }
        this.size++
    }
    insertAfter(near,value){
        if(!near){
            return
        }
        const node = new Node(value);
        node.next=near.next
        if(near.next){
            near.next.prev =node
        }
        near.next =node
        node.prev=near
        if(!this.tail || this.tail===node){
            this.tail =node
        }
        this.size++
    }

    print() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.append(1);
doublyLinkedList.append(2);
doublyLinkedList.append(3);
doublyLinkedList.prepend(5);
doublyLinkedList.print();
