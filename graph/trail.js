class Graph {
  constructor() {
    this.adjecencyList = {};
  }
  insert(vertex) {
    if (!this.adjecencyList[vertex]) {
      this.adjecencyList[vertex] = new Set();
    }
  }
  addEdge(vertex1, vertex2) {
    if (this.adjecencyList[vertex1]) {
      this.insert(vertex1);
    }
    if (this.adjecencyList[vertex1]) {
      this.insert(vertex2);
    }

    this.adjecencyList[vertex1].add(vertex2);
    this.adjecencyList[vertex2].add(vertex1);
  }
  removeEdge(vertex1, vertex2) {
    if (!this.adjecencyList[vertex1]) {
      return;
    }
    if (!this.adjecencyList[vertex2]) {
      return;
    }
    this.adjecencyList[vertex1].delete(vertex2);
    this.adjecencyList[vertex2].delete(vertex1);
  }
  removeVertex(vertex1) {
    if (!this.adjecencyList[vertex1]) {
      return;
    }
    for (let vertex2 of this.adjecencyList[vertex1]) {
      this.removeEdge(vertex1, vertex2);
    }
    delete this.adjecencyList[vertex1];
  }
  dispaly() {
    for (const key in this.adjecencyList) {
      console.log(key, "-->", [...this.adjecencyList[key]]);
    }
  }
  hasCycle() {
    let visited = new Set();
    for (let vertex in this.adjecencyList) {
      if (!visited.has(vertex)) {
        if (this.hasCycleHelper(vertex, visited, null)) {
          return true;
        }
      }
    }
    return false;
  }
  hasCycleHelper(vertex, visited, parent) {
    visited.add(vertex);
    for (let child of this.adjecencyList[vertex]) {
      if (!visited.has(child)) {
        if (this.hasCycleHelper(child, visited, vertex)) {
          return true;
        }
      } else if (child !== parent) {
        return true;
      }
    }
    return false;
  }
}

const graph = new Graph();
graph.insert("A");
graph.insert("B");
graph.addEdge("A", "B");
graph.addEdge("B", "C");
// graph.addEdge("A", "C");
// graph.removeVertex('C')
console.log(graph.hasCycle());
graph.dispaly();
