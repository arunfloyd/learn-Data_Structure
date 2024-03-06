class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  isEmpty() {
    return this.root === null;
  }
  insert(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }
  insertNode(root, node) {
    if (node.value < root.value) {
      if (root.left === null) {
        root.left = node;
      } else {
        this.insertNode(root.left, node);
      }
    } else {
      if (root.right === null) {
        root.right = node;
      } else {
        this.insertNode(root.right, node);
      }
    }
  }
  search(root, value) {
    if (!root) {
      return false;
    } else {
      if (root.value === value) {
        return true;
      } else if (value < root.value) {
        return this.search(root.left, value);
      } else {
        return this.search(root.right, value);
      }
    }
  }
  // >>> Binary Search Trees Depth First Search <<<
  //Preorder Travesal
  // 1 .Read the data of the node
  // 2. Visit the left subtree
  // 3. Visit the right subtree

  preOrder(root) {f
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }
  // Inorder Traversal
  // 1. Visit the left subtree
  // 2. Read the data of the node
  // 3. Visit the right subtree

  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }
  //PostOrder Travesal
  // 1. Visit the left subtree
  // 2. Visit the right subtree
  // 3. Read the data of the node
  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }
  //Breadth First Search Traversal Approach

  // 1. Create a Queue
  // 2. Enqueue the root node
  // 3. As long as a node exists in the Queue
  //    a. Dequeue the node from the FormDataEvent
  //    b. Read the node's value
  //    c.Enqueue the node's left child if it exists
  //    d.Enqueue the node's right child if it exists
  levelOrder() {
    const queue = [];
    queue.push(this.root);
    while (queue.length) {
      let curr = queue.shift();
      console.log(curr.value);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }
}
const bst = new BinarySearchTree();
bst.insert(1);
bst.insert(13);
bst.insert(9);
// bst.preOrder(bst.root)
// bst.inOrder(bst.root);
// bst.postOrder(bst.root);

bst.levelOrder();
console.log(bst.search(bst.root, 1));

// console.log(bst.isEmpty());
