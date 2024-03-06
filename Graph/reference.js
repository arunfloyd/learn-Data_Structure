/*
Represent the following graph as an adjacency list.
write a dfs function that takes the adjacency list, a start node, and a target node. return true if it's in the graph, and false if it is not
               A
            /	  \
	        F       B
	       /       / \
	      G       D    C
     	/ | \     |
     J  I  H	  E
     
     
     
     
     
        A
       /  \
      B    C
     / \    \
    D   E    H 
       / \   
      F   G
*/

var nodeNotVisited = (list, item) => {
  if (list.indexOf(item) === -1) {
    return true;
  }
  return false;
};

const graph1 = {
  A: ["F", "B"],
  B: ["D", "C"],
  C: [],
  D: ["E"],
  E: [],
  F: ["G"],
  G: ["J", "I", "H"],
  H: [],
  I: [],
  J: [],
};

const graph2 = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: ["H"],
  D: [],
  E: ["F", "G"],
  F: [],
  G: [],
  H: ["G"],
};

var dfs = (graph, node, targetNode) => {
  let visited = [];
  let stack = [];
  stack.push(node);
  visited.push(node);
  while (stack.length > 0) {
    let node = stack.pop();
    let neighbors = graph[node];
    for (let node of neighbors) {
      if (nodeNotVisited(visited, node)) {
        if (node === targetNode) {
          return true;
        } else {
          visited.push(node);
          stack.push(node);
        }
      }
    }
  }
  console.log(visited);
  return false;
};
dfs(graph2, "A", "z");
