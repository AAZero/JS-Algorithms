function HashTable() {
	this.table = new Array(137);
	this.simpleHash = simpleHash;
	this.betterHash = betterHash;
	this.put = put;
	this.get = get;
	this.showDistor = showDistor;
	this.buildChins = buildChins; 
}

function buildChins() {
	for (var i = 0; i < this.table.length; i++) {
		this.table[i] = new Array();
	}
}

function simpleHash(data) {
	var total = 0;

	for (var i = 0; i < data.length; i++) {
		total += data.charCodeAt(i);
	}
	return total % this.table.length;
}

function betterHash(data) {
	var H = 31;
	var total = 0;

	for (var i = 0; i < data.length; i++) {
		total += H * total + data.charCodeAt(i);
	}

	if(total < 0) {
		total += this.table.length - 1;
	}

	return this.table.length;
}

function put(data) {
	// expmple 1
	// var pos = this.simpleHash(data);  
	// this.table[pos] = data;

	// expmple 2
	// var pos = this.betterHash(data);
	// this.table[pos] = data;

	// expmple 3
	// var pos = this.simpleHash(data);  
	// var index = 0;

	// if(this.table[pos][index] == undefined) {
	// 	this.table[pos][index] = data;
	// 	index++;
	// } else {
	// 	if(this.table[pos][index] != undefined) {
	// 		++index;
	// 	}
	// 	this.table[pos][index] = data;
	// }


	// example 4 线性探索法
	var pos = this.simpleHash(data);  
	if(this.table[pos] == undefined) {
		this.table[pos] = data;
	} else {
		while(this.table[pos] != undefined) {
			pos++;
		}
		this.table[pos] = data;  
	}
}

function get(key) {
	// example 1 & 2 & 3
	// return this.table[this.simpleHash(key)];

	// example 4
	var hash = this.simpleHash(key);
	console.log(hash);
	for(var i = hash; i < this.table.length; i++) {
		if(this.table[i] == key) {
			return i;
		}
	}
	return undefined;
}

function showDistor() {
	// expmple 1 & 2
	// var n = 0;
	// for (var i = 0; i < this.table.length; i++) {
	// 	if(this.table[i] != undefined) {
	// 		console.log('key: ' + i + ' value: ' + this.table[i]);
	// 	}
	// }

	// expmple 3
	var n = 0;
	for (var i = 0; i < this.table.length; i++) {
		if(this.table[i][0] != undefined) {
			console.log('key: ' + i + ' value: ' + this.table[i]);
		}
	}
}

// example 1 & 2
// var hTable = new HashTable();
// hTable.put('china');
// hTable.put('Japan');
// hTable.put('America');
// hTable.put('aaaa');
// hTable.put('bbbb');
// hTable.put('cccc');
// hTable.put('dddd');
// hTable.put('nicha');
// hTable.showDistor();


// example 3
var hTable = new HashTable();
hTable.buildChins();
hTable.put('china');
hTable.put('Japan');
hTable.put('America');
hTable.put('aaaa');
hTable.put('bbbb');
hTable.put('cccc');
hTable.put('dddd');
hTable.put('nicha');

console.log('The position of nicha: ' + hTable.get('nicha'));
hTable.showDistor();


