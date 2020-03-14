function Node(data, left, right) {
	this.data = data;
	this.left = left;
	this.right = right;
	this.show = show;
}

function show() {
	return this.data;
}

function BST() {
	this.root = null;
	this.insert = insert;
	this.inOrder = inOrder;
	this.getSmallest = getSmallest;
	this.getMax = getMax;
	this.find = find;
	this.remove = remove; 
	this.frontOrder = frontOrder;
	this.afterOrder = afterOrder;
	this.middleOrder = middleOrder;
}

function insert(data) {
	var node = new Node(data, null, null);

	if(this.root == null) {
		this.root = node;
	} else {
		var current = this.root;
		var parent;

		while(1) {
			parent = current;

			if(data < current.data) {
				current = current.left;
				if(current == null) {
					parent.left = node;
					break;
				}
			} else {
				current = current.right;
				if(current == null) {
					parent.right = node;
					break;
				}
			}
		}
	}
}

function frontOrder(node) {
	if(!(node == null)) {
		console.log(node.data);
		if(node.left != null) {
			this.frontOrder(node.left);
		}

		if(node.right != null) {
			this.frontOrder(node.right);
		}
	}
}

function afterOrder(node) {
	if(!(node == null)) {

		if(node.left != null) {
			this.afterOrder(node.left);
		}


		if(node.right != null) {
			this.afterOrder(node.right);
		}

		console.log(node.data);
	}
}

function middleOrder(node) {
	if(!(node == null)) {
		if(node.left != null) {
			this.middleOrder(node.left);
		}

		console.log(node.data);

		if(node.right != null) {
			this.middleOrder(node.right);
		}
	}
}

function inOrder(node) {
	if(!(node == null)) {
		inOrder(node.left);
		console.log(node.data);
		inOrder(node.right);
	}
}

function getSmallest(root) {
	var current = this.root || root;
	while(!(current.left == null)) {
		current = current.left;
	}

	return current;
}

function getMax(root) {
	var current = this.root || root;
	while(!(current.right == null)) {
		current = current.right;
	}

	return current.data;
}

function find(data) {
	var current = this.root;

	while(!(current == null)) {
		if(current.data == data) {
			return data;
		} else if(data < current.data) {
			current = current.left;
		} else {
			current = current.right;
		}
	}

	return null;
}

function remove(data) {
	removeNode(this.root, data);
} 

function removeNode(node, data) {
	if(node == null) {
		return null;
	}

	if(node.data == data) {
		if(node.left == null & node.right == null) {
			return null;
		}

		if(node.left == null) {
			return node.right;
		}

		if(node.right == null) {
			return node.left;
		}

		var tempNode = getSmallest(node.right);
		node.data = tempNode.data;
		node.right = removeNode(node.right, tempNode.data);
		return node;
	} else if(node.data > data) {
		node.left = removeNode(node.left, data);
		return node;
	} else {
		node.right = removeNode(node.right, data);
		return node;
	}
}


var nums = new BST();
nums.insert(46);
nums.insert(40);
nums.insert(73);
nums.insert(12);
nums.insert(64);
nums.insert(76);
nums.insert(7);
nums.insert(28);
nums.insert(86);
nums.insert(82);
nums.insert(79);

console.log('========show tree=====');
nums.inOrder(nums.root);

console.log('=====smallest=====' + nums.getSmallest());
console.log('=====smallest=====' + nums.getMax());

// nums.remove(12);
// nums.inOrder(nums.root);

console.log('========front=====');
nums.frontOrder(nums.root);

console.log('========after=======');
nums.afterOrder(nums.root);

console.log('========middle======');
nums.middleOrder(nums.root);


