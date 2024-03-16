class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set();
    }
  }
  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adjacencyList[vertex1].add(vertex2);
    this.adjacencyList[vertex2].add(vertex1);
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].delete(vertex2);
    this.adjacencyList[vertex2].delete(vertex1);
  }
  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      return;
    }
    for (let adjacentVertex of this.adjacencyList[vertex]) {
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
  hasEdge(vertex1, vertex2) {
    return (
      this.adjacencyList[vertex1].has(vertex2) &&
      this.adjacencyList[vertex2].has(vertex1)
    );
  }
  display() {
    for (let vertex in this.adjacencyList) {
      console.log(vertex + "->" + [...this.adjacencyList[vertex]]);
    }
  }
  bfs(startVertex) {
    const visited = new Set();
    const queue = [startVertex];
    const result = [];

    while (queue.length > 0) {
      const currentVertex = queue.shift();
      if (!visited.has(currentVertex)) {
        visited.add(currentVertex);
        result.push(currentVertex); // Add current vertex to result
        for (let neighbor of this.adjacencyList[currentVertex]) {
          if (!visited.has(neighbor)) {   
            queue.push(neighbor);
          }
        }
      }
    }
    return result; // Return the result array
  }
  dfs(startVertex) {
    const visited = new Set();
    const result = [];

    const dfsTraversal = (vertex) => {
      if (!visited.has(vertex)) {
        visited.add(vertex);
        result.push(vertex); // Add current vertex to result
        for (let neighbor of this.adjacencyList[vertex]) {
          dfsTraversal(neighbor);
        }
      }
    };

    dfsTraversal(startVertex);
    return result; // Return the result array
  }
  bfsShortestPath(startVertex, endVertex) {
    const visited = new Set();
    const queue = [[startVertex]];
    const paths = new Map();
   
    while (queue.length > 0) {
       const currentPath = queue.shift();
       const currentVertex = currentPath[currentPath.length - 1];
   
       if (currentVertex === endVertex) {
         return currentPath; // Return the path to the end vertex
       }
   
       if (!visited.has(currentVertex)) {
         visited.add(currentVertex);
   
         for (let neighbor of this.adjacencyList[currentVertex]) {
           if (!visited.has(neighbor)) {
             const newPath = [...currentPath, neighbor];
             queue.push(newPath);
             paths.set(neighbor, newPath); // Store the path leading to this neighbor
           }
         }
       }
    }
   
    return null; // Return null if no path is found
   }
   findEulerianPath() {
    if (!this.isEulerian()) {
       return null; // Graph is not Eulerian
    }
   
    let path = [];
    let stack = [Object.keys(this.adjacencyList)[0]]; // Start with any vertex
   
    while (stack.length > 0) {
       let currentVertex = stack[stack.length - 1];
       if (this.adjacencyList[currentVertex].size > 0) {
         let nextVertex = this.adjacencyList[currentVertex].values().next().value;
         this.adjacencyList[currentVertex].delete(nextVertex);
         stack.push(nextVertex);
       } else {
         path.push(stack.pop());
       }
    }
   
    return path.reverse(); // Reverse the path to get the correct order
   }
   
   isEulerian() {
    for (let vertex in this.adjacencyList) {
       if (this.adjacencyList[vertex].size % 2 !== 0) {
         return false;
       }
    }
    return true;
   }
   
}

// const graph = new Graph();
// graph.addVertex("A");
// graph.addVertex("B"); 
// graph.addVertex("C");

// graph.addEdge("A", "B");
// graph.addEdge("B", "C");
// graph.display();
// console.log(graph.hasEdge("A", "C"));
// graph.removeEdge("A", "B");
// graph.removeVertex("B");
// graph.display();
// console.log(graph.bfs("A"));
// console.log(graph.dfs("C")); // Changed the vertex from "e" to "A"
// const graph = new Graph();
// graph.addVertex("A");
// graph.addVertex("B"); 
// graph.addVertex("C");
// graph.addEdge("A", "B");
// graph.addEdge("B", "C");
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B"); 
graph.addVertex("C");
graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("C", "A");


const shortestPath = graph.bfsShortestPath("A", "B");
if (shortestPath) {
 console.log("Shortest path:", shortestPath.join(" -> "));
} else {
 console.log("No path found.");
}
const eulerianPath = graph.findEulerianPath();
if (eulerianPath) {
 console.log("Eulerian path:", eulerianPath.join(" -> "));
} else {
 console.log("The graph does not have an Eulerian path.");
}