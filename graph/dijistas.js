class Dijkstra {
    constructor(graph, start) {
      this.graph = graph;
      this.start = start;
      this.dist = Array(graph.length).fill(Infinity);
      this.visited = Array(graph.length).fill(false);
      this.dist[start] = 0;
    }
  
    findShortestPath() {
      for (let i = 0; i < this.graph.length - 1; i++) {
        let u = this.minDistance();
        console.log(u);
        this.visited[u] = true;
        for (let v = 0; v < this.graph.length; v++) {
          let distUV = this.graph[u][v];
          if (distUV && !this.visited[v] && this.dist[u] + distUV < this.dist[v]) {
            this.dist[v] = this.dist[u] + distUV;
          }
        }
      }
      this.printSolution();
    }
  
    minDistance() {
      let min = Infinity;
      let minIndex = -1;
      for (let i = 0; i < this.graph.length; i++) {
        if (!this. visited[i] && this.dist[i] <= min) {
          min = this.dist[i];
          minIndex = i;
          console.log(min,minIndex,'min,minINdex')
        }
      }
      return minIndex;
    }
  
    printSolution() {
      console.log("Vertex \t Distance from Source");
      for (let i = 0; i < this.graph.length; i++) {
        console.log(i + "\t" + this.dist[i]);
      }
    }
  }
  
  const graph = [
    [0, 4, 0, 0, 0, 0, 0, 8, 0],
    [4, 0, 8, 0, 0, 0, 0, 8, 0],
    [0, 8, 0, 7, 0, 4, 0, 0, 2],
    [0, 0, 7, 0, 9, 14, 0, 0, 0],
    [0, 0, 0, 9, 0, 10, 0, 0, 0],
    [0, 0, 4, 14, 10, 0, 2, 0, 0],
    [0, 0, 0, 0, 0, 2, 0, 1, 6],
    [8, 11, 0, 0, 0, 0, 1, 0, 7],
    [0, 0, 2, 0, 0, 0, 6, 7, 0],
  ];
  
  const dijkstra = new Dijkstra(graph, 0);
  dijkstra.findShortestPath();