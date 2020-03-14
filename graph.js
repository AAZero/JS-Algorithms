function Graph(v) {
	this.vertices = v;
	this.edges = 0;
	this.adj = [];

	this.marked = [];

	for(var i = 0; i < this.vertices; i++) {
		this.adj[i] = [];
		this.marked[i] = false; 
	}

	this.addEdge = addEdge;
	this.showGraph = showGraph;
	this.deepFirstSearch = deepFirstSearch; 
	this.borderFirstSearch = borderFirstSearch;

	this.edgeTo = [];
	this.hasPathTo = hasPathTo;
	this.pathTo = pathTo;
}

function addEdge(v, w) {
	this.adj[v].push(w);
	this.adj[w].push(v);
	this.edges++;
}

function showGraph() {
	for(var i = 0; i < this.vertices; i++) {
		var edges = '';
		for(var j = 0; j < this.vertices; j++) {
			if(this.adj[i][j]) {
				edges += this.adj[i][j] + ' ';
			}

		}
		console.log(i + ' -> ' + edges);
	}
}

function deepFirstSearch(v) {
	this.marked[v] = true;

	if(this.adj[v] != undefined) {
		console.log(v + ' [The vertices has been use]');
	}

	for(var w in this.adj[v]) {
		var current = this.adj[v][w];
		if(!this.marked[current]) {
			this.deepFirstSearch(current);
		}
	}
}

function borderFirstSearch(s) {
	var queue = [];
	this.marked[s] = true;
	queue.push(s);

	while(queue.length > 0) {
		var v = queue.shift();
		if(v != undefined) {
			console.log('borderFirstSearch: ' + v + ' [The vertices has been use]');
		}

		for(var w in this.adj[v]) {
			var current = this.adj[v][w];
			if(!this.marked[current]) {
				this.marked[current] = true;
				this.edgeTo[current] = v;
				queue.push(current);
			}
		}
	}
}

function hasPathTo(v) {
	return this.marked[v];
}

function pathTo(v) {
	var source = 0;
	if(!this.hasPathTo(v)) {
		return undefined;
	}

	var path = [];
	for(var i = v; i != source; i = this.edgeTo[i]) {
		path.push(i);
	}

	path.push(source); 
	return path;
}

var g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.showGraph();

// g.deepFirstSearch(0);
console.log('=============');
g.borderFirstSearch(0);

console.log('=============');
var paths = g.pathTo(4);
var str = '';

while(paths.length > 0) {
	if(paths.length > 1) {
		str += paths.pop() + '=>';
	} else {
		str += paths.pop();
	}
}
console.log(str);







