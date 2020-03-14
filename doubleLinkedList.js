function Node(element) {
	this.element = element;
	this.next = null;
	this.previous = null;
}

function LList() {
	this.head = new Node('head');
	this.find = find;
	this.insert = insert;
	this.display = display;
	this.remove = remove;
	this.dislayReverse = dislayReverse;
	this.findLast = findLast;
}

function find(item) {
	var currNode = this.head;
	while(currNode.element != item) {
		currNode = currNode.next;
	}

	return currNode;
}

function insert(newElement, item) {
	var newNode = new Node(newElement);
	var current = this.find(item);

	newNode.next = current.next;
	newNode.previous = current;
	current.next = newNode;

	if(!(newNode.next == null)) {
		newNode.next.previous = newNode;
	}
}

function display() {
	var currNode = this.head;

	while(currNode.next != null) {
		console.log(currNode.next.element);
		currNode = currNode.next;
	}
}

function remove(item) {
	var currNode = this.find(item);

	if(!(currNode.next == null)) {
		currNode.previous.next = currNode.next;
		currNode.next.previous = currNode.previous;
		currNode.next = null;
		currNode.previous = null;
	} else {
		currNode.previous.next = null;
		currNode.previous = null;
	}
}

function dislayReverse() {
	var currNode = this.findLast();

	while(!(currNode.previous == null)) {
		console.log(currNode.element);
		currNode = currNode.previous;
	}
}

function findLast() {
	var currNode = this.head;

	while(!(currNode.next == null)) {
		currNode = currNode.next;
	}

	return currNode;
}

var cities = new LList();
cities.insert('aaaaa', 'head');
cities.insert('bbbbb', 'aaaaa');
cities.insert('ccccc', 'bbbbb');
cities.insert('ddddd', 'ccccc');

cities.display();

console.log('============');
cities.remove('ccccc');
cities.display();

console.log('============');
cities.dislayReverse();




