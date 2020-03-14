function Set() {
	this.dataStore = [];
	this.add = add;
	this.remove = remove;
	this.show = show;
	this.union = union;
	this.contains = contains;
	this.intersect = intersect;
	this.different = different;
	this.subSet = subSet;
	this.size = size;
}

function add(data) {
	if(this.dataStore.indexOf(data) < 0) {
		this.dataStore.push(data);
	} else {
		return false;
	}
}

function remove(data) {
	var pos = this.dataStore.indexOf(data);

	if(pos > -1) {
		this.dataStore.splice(pos, 1);
	} else {
		return false;
	}
}

function show() {
	return this.dataStore;
}

function union(set) {
	var tempSet = new Set();

	for(var i = 0; i < this.dataStore.length; i++) {
		tempSet.add(this.dataStore[i]);
	}

	for(var j = 0; j < set.dataStore.length; j++) {
		if(!(tempSet.contains(set.dataStore[i]))) {
			tempSet.add(set.dataStore[j]);
		}
	}

	return tempSet;
}

function contains(data) {
	return this.dataStore.indexOf(data) > -1 ? true : false;
}

function intersect(set) {
	var tempSet = new Set();

	for(var i = 0; i < this.dataStore.length; i++) {
		if(set.contains(this.dataStore[i])) {
			 tempSet.add(this.dataStore[i]);
		}
	}

	return tempSet;
}

function different(set) {
	var tempSet = new Set();

	for(var i = 0; i < this.dataStore.length; i++) {
		if(!set.contains(this.dataStore[i])) {
			 tempSet.add(this.dataStore[i]);
		}
	}

	return tempSet;
}

function size() {
	 return this.dataStore.length;
}

function subSet(set) {
	if(set.size() > this.size()) {
		return false;
	} else {
		for(var i = 0; i < set.dataStore.length; i++) {
		 	if(!(this.contains(set.dataStore[i]))) {
		 		return false;
		 	}
		}
		return true;
	}
}

var s = new Set();
s.add('aaaa');
s.add('bbbb');
s.add('cccc');
s.add('dddd');
s.add('eeee');
s.add('ffff');
s.add('gggg');
s.add('hhhh');

console.log('the before of remove: ');
s.remove('cccc');
console.log(s.show());

var k = new Set();
k.add('pppp');
k.add('bbbb');
k.add('eeee');
k.add('oooo');

console.log('=====intersect=====');
console.log(s.intersect(k));

console.log('====union======');
console.log(s.union(k));

console.log('====different======');
console.log(s.different(k));

console.log('====sut set======');
console.log(s.subSet(k))



