//Node
//Trie
//Insert
//Contain
//startswithprefix

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
      let charToInsert = word[i];
      if (!(charToInsert in curr.children)) {
        curr.children[charToInsert] = new Node();
      }
      curr = curr.children[charToInsert];
    }
    curr.isWordEnd = true;
  }
  contains(word) {
    let curr = this.root;
    for (let i = 0; i < word.length; i++) {
      let charToFind = word[i];
      if (!(charToFind in curr.children)) {
        return false;
      }
      curr = curr.children[charToFind];
    }
    return curr.isWordEnd;
  }
  startsWithPrefix(prefix) {
    let curr = this.root;
    for (let i = 0; i < prefix.length; i++) {
      let charToFind = prefix[i];
      if (!(charToFind in curr.children)) {
        return false;
      }
      curr = curr.children[charToFind];
    }
    return true;
  }
  remove(word) {
    const removeHelper = (node, index) => {
      if (index === word.length) {
        node.isWordEnd = false;
      }

      if (index === word.length || Object.keys(node.children).length === 0) {
        if (!node.isWordEnd || Object.keys(node.children).length === 0) {
          return true;
        }
      } else {
        for (let char in node.children) {
          if (removeHelper(node.children[char], index + 1)) {
            delete node.children[char]; 
          }
        }
        if (Object.keys(node.children).length === 0 && !node.isWordEnd) {
          return true;
        }
      }

      return false;
    };
    removeHelper(this.root, 0);
  }
}
const trie = new Trie();
trie.insert("apple");
trie.insert("app");
trie.insert("banana");

// console.log(trie.contains("apple")); // true
// console.log(trie.contains("app"));   // true
// console.log(trie.contains("orange")); // false

trie.remove("apple");
console.log(trie.contains("apple")); // false
console.log(trie.contains("app")); // true
