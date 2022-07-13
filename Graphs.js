class Graph {
    constructor() {
        this.adjecencyList = {};
    }

    addVertex(vertex) {
       if(!this.adjecencyList[vertex]) this.adjecencyList[vertex] = []
    }

    addEdge(v1,v2) {
        if(this.adjecencyList[v1]) this.adjecencyList[v1].push(v2)
        if(this.adjecencyList[v2]) this.adjecencyList[v2].push(v1)
    }
    
    removeEdge(v1,v2) {
        this.adjecencyList[v1] = this.adjecencyList[v1].filter(v => v !== v2)
        this.adjecencyList[v2] = this.adjecencyList[v2].filter(v => v !== v1)

    }
    
    removeVertex(vertex) {
        while(this.adjecencyList[vertex].length) {
           const adjecencyVertex = this.adjecencyList[vertex].pop();
            this.removeEdge(vertex, adjecencyVertex)
        }
        delete this.adjecencyList[vertex];
    }
}

/**a set of nodes with connections
 * uses: social networks, location/mapping
 * 
 * Graph terms- vertex -> node
 * edge is the connetione
 * 
 * when an edge has a value it becomes a weighted graph
 * when the edge has no value is unweighted
 * undirected graph there is no drection- for the edges
 * 
 * adjacency list -> faster to iterate, less space, slower lookup of edge
 * adjency matrix -> slowere to iterate, more space, faster too look edge
 */
