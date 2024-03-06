class Stack {
    constructor(){
        this.stack =[]
    }
    push(element){
        this.stack.push(element)
    }
    pop(){
        if(this.stack.length===0) return "UnderFlow"

        this.stack.pop()
    }
    print(){
        let list =''
        for(let i=0;i<this.stack.length;i++){
            list += this.stack[i] + " "
        }
        console.log(list)
    }
}

const stack = new Stack()
stack.push(1)
stack.print()
stack.pop()
stack.print()