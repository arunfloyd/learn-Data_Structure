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

    while (queue.length > 0) {
      const currentVertex = queue.shift();
      if (!visited.has(currentVertex)) {
        visited.add(currentVertex);
        console.log(currentVertex);

        for (let neighbor of this.adjacencyList[currentVertex]) {
          if (!visited.has(neighbor)) {   
            queue.push(neighbor);
          }
        }
      }
    }
  }
  dfs(startVertex) {
    const visited = new Set();

    const dfsTraversal = (vertex) => {
      if (!visited.has(vertex)) {
        visited.add(vertex);
        console.log(vertex);
        for (let neighbor of this.adjacencyList[vertex]) {
          dfsTraversal(neighbor);
        }
      }
    };

    dfsTraversal(startVertex);
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.display();
console.log(graph.hasEdge("A", "C"));
// graph.removeEdge("A", "B");
graph.removeVertex("B");
graph.display();
console.log(graph.bfs("A"));
console.log(graph.dfs("e"));

//Constant Time Complexity O(1)

//But on the removal of vetex takes the number of adjacent vertixes
