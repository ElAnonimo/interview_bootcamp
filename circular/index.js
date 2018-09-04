// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
	let slow = this.getFirst();
	let fast = this.getFirst();

	while (slow !== fast || fast.next !== null) {
		slow = slow.next;
		fast = fast.next.next;
	}

	return slow === fast;
}

module.exports = circular;
