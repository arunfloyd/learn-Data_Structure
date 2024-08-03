class Node {
  constructor() {
    this.adjList = [];
  }
  addVertex(vertex) {
    if (!this.adjList[vertex]) {
      this.adjList[vertex] = new Set();
    }
  }
  addEdge(vertex1, vertex2) {
    if (!this.adjList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjList[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adjList[vertex1].add(vertex2);
    this.adjList[vertex2].add(vertex1);
  }
  removeEdge(vertex1, vertex2) {
    this.adjList[vertex1].delete(vertex2);
    this.adjList[vertex2].delete(vertex1);
  }
  removeVertex(vertex) {
    if (!this.adjList[vertex]) {
      return;
    }
    for (let adjvert of this.adjList[vertex]) {
      this.removeEdge(vertex, adjvert);
    }
    delete this.adjList[vertex];
  }
  hasEdge(vertex1, vertex2) {
    return (
      this.adjList[vertex1].has(vertex2) && this.adjList[vertex2].has(vertex1)
    );
  }
  display() {
    for (let vertex in this.adjList) {
      console.log(vertex + " -> " + [...this.adjList[vertex]]);
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
        for (let neighbor of this.adjList[currentVertex]) {
          if (!visited.has(neighbor)) {
            queue.push(neighbor);
          }
        }
      }
    }
  }
}

const graph = new Node();
graph.addVertex(3);
graph.addVertex(5);
graph.addEdge(3, 5);
graph.display();
graph.bfs()