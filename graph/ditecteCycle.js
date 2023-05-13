 class Graph{
    constructor(vertexs){
        this.graph = new Array(vertexs)
        this.size = vertexs;
        for(let i=0;i<vertexs;i++){
            this.graph[i] = new Array()
        }
    }

    addVertex(v,w){
        this.graph[v].push(w);
        this.graph[w].push(v)
    }
    isCycleUtill(v,visted,parent){
       visted[v] = true;
       for(let i=0;i<this.graph[v].length;i++){
           if(visted[this.graph[v][i]]== false){
            if(this.isCycleUtill(this.graph[v][i],visted,v)== true){
                return true
            }
           }else if( parent != this.graph[v][i]){
            return true
           }
       }
       return false;
    }
    isCycle(){
        let visted =new Array(this.size).fill(false)
        for (let i = 0; i <  this.size; i++) {
            if(visted[i]== false){
               if( this.isCycleUtill(i,visted,-1)  == true ) {
                return true
               }
            }
        }
        return false
    }
 }

 let graph = new Graph(5)
 graph.addVertex('4','1')
 graph.addVertex('1','2')
 graph.addVertex('2','4')
 console.log(graph.isCycle())