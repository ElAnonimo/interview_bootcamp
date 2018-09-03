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
}

module.exports = { Node, LinkedList };
