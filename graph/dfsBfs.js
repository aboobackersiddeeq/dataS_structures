const breadthFirstPrint = (graph, source) => {
  const queue = [source];
  while (queue.length > 0) {
    const curr = queue.shift();
    console.log(curr);
    for (let neighbor of graph[curr]) {
      queue.push(neighbor);
    }
  }
};

//iteartive implementation
function depthFirstPrint(graph, source) {
  const stack = [source];
  while (stack.length > 0) {
    const curr = stack.pop();
    console.log(curr);
    for (let neighbor of graph[curr]) {
      stack.push(neighbor);
    }
  }
}
function bredth(graph, source){
    let queue = [source]
    while(queue.length > 0){
        let curr = queue.shift()
        console.log(curr)
        for(let x of graph[curr]){
            queue.push(x)
        }
    }
}

let graph2 = {
  a: ["c", "b"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};



const graph = {
    a: ["b", "c"],
    b: ["d"],
    c: ["e"],
    d: ["f"],
    e: [],
    f: [],
};
depthFirstPrint(graph, "a");
// breadthFirstPrint(graph, "a");
