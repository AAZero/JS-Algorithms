function Dictionary() {
	this.dataStroe = [];
	this.add = add;
	this.find = find;
	this.remove = remove;
	this.showAll = showAll;
	this.count = count;
	this.clear = clear;
}

function add(key, value) {
	this.dataStroe[key] = value;
}

function find(key) {
	return this.dataStroe[key];
}

function remove(key) {
	delete this.dataStroe[key];
}

function showAll() {
	var datakeys = Object.keys(this.dataStroe);
	for(var key in datakeys) {
		console.log(datakeys[key] + '--->' + this.dataStroe[datakeys[key]]);
	}
}

function count() {
	return Object.keys(this.dataStroe).length;
}

function clear() {
	var datakeys = Object.keys(this.dataStroe);
	for(var key in datakeys) {
		delete this.dataStroe[datakeys[key]];
	}
}

var dic = new Dictionary();
dic.add('aaaa', 10);
dic.add('bbbb', 20);
dic.add('cccc', 30);
dic.add('dddd', 40);

console.log('cccc: ' + dic.find('cccc'));
console.log(dic.showAll()); 

console.log('=======remove=========');
dic.remove('aaaa');
console.log(dic.showAll()); 

console.log('=======count=========');
console.log(dic.count()); 


console.log('=======clear=========');
console.log(dic.clear()); 



