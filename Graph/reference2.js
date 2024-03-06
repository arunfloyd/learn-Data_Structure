class Node {
    constructor(data) {
      this.data = data;
      this.children = [];
    }
  }
  
  class Graph {
    constructor(root) {
      this.root = root;
    }
  
    addNode(parentNode, newChildNode) {
      parentNode.children.push(newChildNode)
    }
    
    // View graph structure
    printGraph() {
      let discovered = [this.root]
      while(discovered.length) {
        let current = discovered.shift();
        for (let i = 0; i < current.children.length; i++) {
          console.log(`${current.data} -> ${current.children[i].data}`);
          discovered.push(current.children[i]);
        }
      }
    }
    
    // Traverse in a breath first search approach
    bfs(searchValue) {
      let queue = [this.root]
      while(queue.length) {
        let current = queue.shift();
        if (current.data === searchValue) {
          return true;
        } else {
          for (let i = 0; i < current.children.length; i++) {
            queue.push(current.children[i]);
          }
        }
      }
  
      return false;
    }
  }
  
  const A = new Node('A');
  const B = new Node('B');
  const C = new Node('C');
  const D = new Node('D');
  const E = new Node('E');
  
  const graph = new Graph(A);
  graph.addNode(A, B);
  graph.addNode(A, C);
  graph.addNode(B, D);
  graph.addNode(C, E);
  
  graph.printGraph();
  console.log(graph.bfs('A'));
  console.log(graph.bfs('G'));