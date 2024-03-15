// //Node // //Trie // //Insert // //Contain // //startswithprefix

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
          return words;
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
      if (!root) {
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
  
  let tries = new Trie();
  
  tries.insert("apple");
  tries.insert("appledata");
  tries.insert("applemon");
  // tries.delete('apple')
  console.log(tries.searchPrefix("apple"));
  
  // class Node {
  //   constructor() {
  //     this.children = {};
  //     this.isWordEnd = false;
  //   }
  // }
  
  // class Trie {
  //   constructor() {
  //     this.root = new Node();
  //   }
  //   insert(word) {
  //     let curr = this.root;
  //     for (let i = 0; i < word.length; i++) {
  //       let charToInsert = word[i];
  //       if (!(charToInsert in curr.children)) {
  //         curr.children[charToInsert] = new Node();
  //       }
  //       curr = curr.children[charToInsert];
  //     }
  //     curr.isWordEnd = true;
  //   }
  //   contains(word) {
  //     let curr = this.root;
  //     for (let i = 0; i < word.length; i++) {
  //       let charToFind = word[i];
  //       if (!(charToFind in curr.children)) {
  //         return false;
  //       }
  //       curr = curr.children[charToFind];
  //     }
  //     return curr.isWordEnd;
  //   }
  //   startsWithPrefix(prefix) {
  //     let curr = this.root;
  //     for (let i = 0; i < prefix.length; i++) {
  //       let charToFind = prefix[i];
  //       if (!(charToFind in curr.children)) {
  //         return false;
  //       }
  //       curr = curr.children[charToFind];
  //     }
  //     return true;
  //   }
  //   remove(word) {
  //     const removeHelper = (node, index) => {
  //       if (index === word.length) {
  //         node.isWordEnd = false;
  //       }
  
  //       if (index === word.length || Object.keys(node.children).length === 0) {
  //         if (!node.isWordEnd || Object.keys(node.children).length === 0) {
  //           return true;
  //         }
  //       } else {
  //         for (let char in node.children) {
  //           if (removeHelper(node.children[char], index + 1)) {
  //             delete node.children[char];
  //           }
  //         }
  //         if (Object.keys(node.children).length === 0 && !node.isWordEnd) {
  //           return true;
  //         }
  //       }
  
  //       return false;
  //     };
  //     removeHelper(this.root, 0);
  //   }
  // }
  // const trie = new Trie();
  // trie.insert("apple");
  // trie.insert("app");
  // trie.insert("banana");
  
  // // console.log(trie.contains("apple")); // true
  // // console.log(trie.contains("app"));   // true
  // // console.log(trie.contains("orange")); // false
  
  // trie.remove("apple");
  // console.log(trie.contains("apple")); // false
  // console.log(trie.contains("app")); // true
  