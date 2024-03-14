class Node {
  constructor() {
    this.children = {};
    this.isWordEnd = false;
  }
}
class Trie {
  constructor() {
    this.root = null;
  }
  insert(word){
    let curr = this.root
    for (let i=0;i<word.length;i++){
        let insertData = word[i]
        if(!(insertData in children)){
            curr.children[insertData] = new Node()
        }
        curr = curr.children[insertData]
    }
    curr.isWordEnd = true
  }
  delete(word){
    this.deleteWord(this.root,word,0)
  }
  deleteWord(root,word,index){
    if(!root){
        return
    }
    if(index === word.length){
        if(!root.isWordEnd){
            return 
        }
        root.isWordEnd = false
        return Object.keys(root.children).length ===0
    }
    let char = word[index]

    if(this.deleteWord(root.children[char],word,index+1)){
        delete root.children[char]
    }
  }
}
