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
    let curr = this.word;
    for (let i = 0; i < word.length; i++) {
      let insertData = word[i];
      if (!(insertData in curr.children)) {
        curr.children[insertData] = new Node();
      }
      curr = curr.children[insertData];
    }
    curr.isWordEnd = true;
  }
  contains(word) {
    let curr = this.root;
    for (let i = 0; i < word.length; i++) {
      let insertData = word[i];
      if (!(insertData in curr.children)) {
        return false;
      }
      curr = curr.children[insertData];
    }
    return curr.isWordEnd;
  }
  searchPrefix(word) {
    let curr = this.root;
    let words = [];
    for (let i = 0; i < word.length; i++) {
      let searchData = word[i];
      if (!(searchData in curr.children)) {
        return word;
      }
      curr = curr.children[searchData];
    }
    this.collection(curr, word, words);
    return words;
  }
  collection(curr, word, words) {
    if (curr.isWordEnd) {
      words.push(word);
    }
    for (let child in curr.children) {
      this.collection(curr.children[child], word + child, words);
    }
  }
  delete(word) {
    this.deleteWord(this.root, word, 0);
  }
  deleteWord(root, word, index) {
    if (!root) return false;
    if (index === word.length) {
      return false;
    }
    if (index === word.length) {
      if (!root.isWordEnd) {
        return false;
      }
      root.isWordEnd = false;
      return Object.keys(root.children).length === 0;
    }
    let char = word[index];
    if (this.deleteWord(root.children[char], word, index + 1)) {
      delete root.children[char];
      return Object.keys(root.children).length === 0;
    }
  }
}
function heapSort(arr){
  var sorted = [];
  var heap1 = new Node();
  
  for(let i=0; i<arr.length; i++){
      heap1.insert(arr[i]);
  }
  
  for(let i=0; i<arr.length; i++){
      sorted.push(heap1.delete());
  }
  return sorted;
}

let arr = [1, 6, 2, 3, 7, 3, 4, 6, 9];
arr = heapSort(arr);

console.log(arr);