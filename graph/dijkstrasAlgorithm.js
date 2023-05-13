class dijikstrasAlgorithm{ 
    constructor(graph,source){ 
        this.grpah=graph; 
        this.source=source; 
        this.V=graph.length; 
    } 
 
    findShortestPath(){ 
        let dist=new Array(this.V).fill(Infinity); 
        let visited=new Array(this.V).fill(false); 
 
        dist[this.source]=0; 
 
        for(let i=0;i<this.V;i++){ 
            const u=this.minDistance(dist,visited); 
            visited[u]=true; 
 
            for(let v=0;v<this.V;v++){ 
                if(!visited[v]&&this.grpah[u][v]&&dist[u]+this.grpah[u][v]<dist[v]){ 
                    dist[v]=dist[u]+this.grpah[u][v] 
                } 
            } 
        } 
        this.printSolution(dist) 
    } 
 
    minDistance(dist,visited){ 
        let min=Infinity; 
        let minIndex=-1; 
 
        for(let i=0;i<this.V;i++){ 
            if(!visited[i]&&dist[i]<=min){ 
                min=dist[i]; 
                minIndex=i; 
            } 
        } 
        return minIndex 
    } 
 
    printSolution(dist){ 
        console.log("vertex \t distance from source") 
        for(let i=0;i<this.V;i++){ 
            console.log(i,+"\t"+dist[i]) 
        } 
    } 
 
 
 
} 
const graph=[ 
    [0,4,0,0,0,0,0,8,0], 
    [4,0,8,0,0,0,0,8,0], 
    [4,7,0,0,6,0,2,8,0], 
] 
 
const da=new dijikstrasAlgorithm(graph,0); 
 
da.findShortestPath()