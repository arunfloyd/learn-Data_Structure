class Stack{
    constructor(){
        this.stack =[]
    }
    push(element){
        this.stack.push(element)
    }
    pop (){
        if(this.isEmpty()){
            return "Stack is Empty ,Can't Perform Pop"
        }
        return this.stack.pop()
    }
    peek(){
        if(this.isEmpty()){
            return "Stack is Empty ,Can't Perform peek"
        }
        return this.stack[this.size()-1] 
    }
    size(){
        return this.stack.length
    }
    isEmpty(){
        return this.size === 0
    }
    printStack(){
        let stack=""
        for(let i=0;i<this.size();i++){
          stack+=`${this.stack[i]} `
        }
        console.log(stack)
    }
}


const stack = new Stack()

stack.push(10)
stack.push(40)
stack.push(31)
stack.printStack()
stack.pop()
stack.printStack()
console.log(stack.peek())