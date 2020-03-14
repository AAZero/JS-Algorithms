function Stack() {
	this.dataStore = [];
	this.top = 0;
	this.push = push;
	this.pop = pop;
	this.peek = peek;
	this.clear = clear;
	this.length = length;
}

function push(element) {
	this.dataStore[this.top++] = element;
}

function pop() {
	return this.dataStore[--this.top];
}

function peek() {
	return this.dataStore[this.top - 1];
}

function length() {
	return this.top;
}

function clear() {
	this.top = 0;
}

var s = new Stack;
s.push('aaaaa');
s.push('bbbbb');
s.push('ccccc');
s.push('ddddd');

console.log('length: ' + s.length());
console.log('first value:' + s.peek());