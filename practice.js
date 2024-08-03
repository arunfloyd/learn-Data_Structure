class Node {
  constructor() {
    this.children = {};
    this.isWordEnd = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }
  insert(word) {
    let curr = this.root;
    for (let i = 0; i < word.length; i++) {
      let insertData = word[i];
      if (!insertData in curr.children) {
        curr.children[insertData] = new Node();
      }
      curr = curr.children[insertData];
    }
    curr.isWordEnd = true;
  }
  contains(word) {
    let curr = this.root;
    for (let i = 0; i < word.length; i++) {
      let insert = word[i];
      if (!insert in curr.children) {
        return false;
      }
      curr = curr.children[insert];
    }
    return curr.isWordEnd;
  }
  searchPrefix(word) {
    let curr = this.root;
    let words = [];

    for (let i = 0; i < word.length; i++) {
      let searchData = word[i];

      if (!searchData in curr.children) {
        return words;
      }
      curr = curr.children[searchData];
    }
    this.collection(curr,word,words){
      return words
    }
  }
  collection(curr,word,words){
    if(curr.isWordEnd){
      words.push(word)
    }

    for(let child in curr.children){
      this.collection(curr.children[child],word+child,words)
    }
  }
  delete(word){
    this.deleteWord(this.root,word,0)
  }
  deleteWord(root,word,index){
    if(!root){
      return false
    }
    if(index===word.length){
      if(!root.isWordEnd){
        return false
      }
      root.isWordEnd= false

      return Object.keys(root.children).length===0
    }
    let char = word[index]

    if(this.deleteWord(root.children[char],word,index+1)){
      delete root.children[char]
      return Object.keys(root.children).length===0f
    }
  }
}
