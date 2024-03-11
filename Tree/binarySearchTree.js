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

  preOrder(root) {
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
  min(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }

  max(root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.max(root.right);
    }
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(root, value) {
    if (root === null) {
      return root;
    }
    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      }

      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }

      root.value = this.min(root.right);

      root.right = this.deleteNode(root.right, root.value);
    }

    return root;
  }
  closestValue(target, root = this.root) {
    let closest = root.value;
    while (root !== null) {
      if (Math.abs(target - root.value) < Math.abs(target - closest)) {
        closest = root.value;
      }

      if (target < root.value) {
        root = root.left;
      } else if (target > root.value) {
        root = root.right;
      } else {
        break;
      }
    }

    return closest;
  }
  isValidBst() {
    return this.checkBst(
      this.root,
      Number.NEGATIVE_INFINITY,
      Number.POSITIVE_INFINITY
    );
  }

  checkBst(root, min, max) {
    if (root === null) {
      return true;
    }

    if (root.value <= min || root.value >= max) {
      return false;
    }

    return (
      this.checkBst(root.left, min, root.value) &&
      this.checkBst(root.right, root.value, max)
    );
  }
}
const bst = new BinarySearchTree();
bst.insert(1);
bst.insert(13);
bst.insert(9);
bst.delete(1);
// bst.preOrder(bst.root)
// bst.inOrder(bst.root);
// bst.postOrder(bst.root);

bst.levelOrder();
console.log(bst.search(bst.root, 1));

// console.log(bst.isEmpty());
