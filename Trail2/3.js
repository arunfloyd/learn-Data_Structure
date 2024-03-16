class Graph {
  constructor(){
    this.adjList ={}
  }
  addVErtex(vertex){
    if(!this.adjList[vertex]){
      this.adjList[vertex]= new Set()
    }
  }
  addEdge(vertex1,vertex2){
    if(!this.adjList[vertex1]){
      this.addVErtex(vertex1)
    }
    if(!this.adjList[vertex2]){
      this.adjList(vertex2)
    }
    this.adjList[vertex1].add(vertex2)
    this.adjlIst[vertex2].add(vertex1)
  }
  removeEdge(vertex1,vertex2){
    this.adjList[vertex1].delete(vertex2)
    this.adjList[vertex2].delete(vertex1)
  }
  removeVertex(vertex){
    if(!this.adjList[vertex]){
      return
    }
    for(let adj of this.adjList[vertex]){
      this.removeEdge(vertex,adj)
    }
    delete this.adjList[vertex]
  }
}