class Queue {
    constructor(){
        this.items =[]
    }
    enqueue(element){
        this.items.push(element)
    }
    dequeue(){
        if(this.isEmpty()){
            return "Underflow ,Can't perform Dequeue"
        }
        return this.items.shift()
    }
    isEmpty(){
        return this.items.length === 0 
    }
    front(){
        if(this.isEmpty()){
            return "No elements on the queue"
        }
        return this.items[0]
    }
    size(){
        return this.items.length
    }
    printQ(){
        let queStr= ""
        for(let i=0;i<this.size();i++){
            queStr +=this.items[i]+ " "
        }
        console.log(queStr)
    }
}
const queue = new Queue()
queue.enqueue(1)
queue.enqueue(4)
queue.dequeue(9)
queue.printQ()