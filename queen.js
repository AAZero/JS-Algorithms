function Queen() {
	this.dataStroe= [];
	this.enqueen = enqueen;
	this.dequeen = dequeen;
	this.front = front;
	this.back = back;
	this.empty = empty;
	this.toString = toString;
}

function enqueen(element) {
	this.dataStroe.push(element);
}

function dequeen() {
	this.dataStroe.shift();
}

function front() {
	return this.dataStroe[0];
}

function back() {
	return this.dataStroe[this.dataStroe.length - 1];
}

function empty() {
	return this.dataStroe.length > 0 ? true : false;
}

function toString() {
	var str = '';

	for (var i = 0; i < this.dataStroe.length; i++) {
		str += this.dataStroe[i] + '\n';
	}

	return str;
}

var q = new Queen();
q.enqueen('aaaaaa');
q.enqueen('bbbbbb');
q.enqueen('cccccc');

console.log(q.toString());
q.dequeen();

console.log(q.toString());

