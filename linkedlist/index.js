// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}

	insertFirst(data) {
		this.head = new Node(data, this.head);
	}

	size() {
		let counter = 0;
		let node = this.head;

		while (node) {
			counter++;
			node = node.next;
		}

		return counter;
	}

	getFirst() {
		return this.head;
	}

	getLast() {
		if (!this.head) {			// !!null === false
			return null;
		}

		let node = this.head;

		while (node) {
			if (!node.next) {
				return node;
			}
			node = node.next;
		}
	}

	clear() {
		this.head = null;
	}

	removeFirst() {
		if (!this.head) {
			return;
		}

		this.head = this.head.next;
	}

	removeLast() {
		if (!this.head) {
			return;
		}

		if (!this.head.next) {
			this.head = null;
			return;
		}

		let prevNode = this.head;
		let currNode = this.head.next;

		while (currNode.next) {
			prevNode = currNode;
			currNode = currNode.next;
		}
		prevNode.next = null;

		/* let node = this.head;

		while (node) {
			if (!node.next) {
				return;
			}

			if (!node.next.next) {
				node.next = null;
				return;
			}

			node = node.next;
		} */
	}

	insertLast(data) {
		if (!this.getLast()) {
			this.head = new Node(data);
		} else {
			this.getLast().next = new Node(data);
		}
	}

	getAt(n) {
		/* if (!this.head) {
			return null;
		} */

		let node = this.head;
		let counter = 0;

		while (node) {
			if (counter === n) {
				return node;
			}

			counter++;
			node = node.next;
		}

		/* if (n > counter) {
			return null;
		} */
		return null;
	}

	removeAt(n) {
		if (!this.head) {
			return;
		}

		if (n === 0) {
			this.head = this.head.next;
			return;
		}

		const prev = this.getAt(n - 1);

		if (!prev || !prev.next) {
			return;
		}

		prev.next = prev.next.next;
	}

	insertAt(data, n) {
		if (!this.head) {
			this.head = new Node(data);
			return;
		}

		if (n === 0) {
			this.head = new Node(data, this.head);
			return;

			/* const oldHead = this.head;
			this.head = newNode;
			newNode.next = oldHead;
			oldHead.next = this.getAt(2);
			return;
			*/
		}

		/* if (n > this.size()) {
			this.getLast().next = newNode;
			return;
		}

		this.getAt(n - 1).next = new Node(data, this.getAt(n)); */

		const prev = this.getAt(n - 1) || this.getLast();
		const newNode = new Node(data, prev.next);
		prev.next = newNode;
	}

	forEach(fn) {
		let node = this.head;
		let counter = 0;

		while (node) {
			fn(node, counter);
			node = node.next;
			counter++;
		}
	}

	*[Symbol.iterator]() {
		let node = this.head;

		while (node) {
			yield node;
			node = node.next;
		}
	}
}

module.exports = { Node, LinkedList };
