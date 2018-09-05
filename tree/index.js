// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
	constructor(data) {
		this.data = data;
		this.children = [];
	}

	add(data) {
		const node = new Node(data);
		this.children.push(node);
	}

	remove(data) {
		/* for (let child of this.children) {
			if (child.data === data) {
				this.children.splice(this.children[child], 1);
			}
		} */

		this.children = this.children.filter(child => child.data !== data);
	}
}

class Tree {
	constructor() {
		this.root = null;
	}

	traverseBF(fn) {		// BF for breadth first
		const arr = [this.root];

		while (arr.length) {
			const node = arr.shift();

			arr.push(...node.children);			// to the end of arr

			fn(node);
		}
	}

	traverseDF(fn) {		// DF for depth first
		const arr = [this.root];

		while (arr.length) {
			const node = arr.shift();

			arr.unshift(...node.children);	// to the start of arr

			fn(node);
		}
	}
}

module.exports = { Tree, Node };
