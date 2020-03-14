function Node(element) {
	this.element = element;
	this.next = null;
}

function LList() {
	this.head = new Node('head');
	this.find = find;
	this.insert = insert;
	this.display = display;
	this.findPrevious = findPrevious;
	this.remove = remove;
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
	var currNode = this.find(item);

	newNode.next = currNode.next;
	currNode.next = newNode;
}

function display() {
	var currNode = this.head;
	while(currNode.next != null) {
		console.log(currNode.next.element);
		currNode = currNode.next;
	}
}

function findPrevious(item) {
	var currNode = this.head;
	while(currNode.next != null && currNode.next.element != item) {
		currNode = currNode.next; 
	}

	return currNode;
}
 
function remove(item) {
	var preNode = this.findPrevious(item);
	var currNode = this.find(item);

	if(preNode != null) {
		preNode.next = currNode.next;
		currNode.next = null;
	}
}

var cities = new LList();
cities.insert('aaaaa', 'head');
cities.insert('bbbbb', 'aaaaa');
cities.insert('ccccc', 'bbbbb');
cities.insert('ddddd', 'ccccc');

cities.display();

console.log('===============');
cities.remove('ccccc');
cities.display();



