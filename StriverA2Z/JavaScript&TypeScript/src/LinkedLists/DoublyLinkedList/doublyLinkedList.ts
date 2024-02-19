export class DoubleLinkNode {
	data: number;
	next: DoubleLinkNode | null;
	prev: DoubleLinkNode | null;

	constructor(data: number, next?: DoubleLinkNode, prev?: DoubleLinkNode) {
		this.data = data;
		this.next = next || null;
		this.prev = prev || null;
	}
}

export function arrayToDLL(arr: number[]) {
	if (arr.length === 0) return null;
	let head = new DoubleLinkNode(arr[0]);
	let temp = head;
	for (let i = 1; i < arr.length; i++) {
		let newNode = new DoubleLinkNode(arr[i]);
		newNode.prev = temp;
		temp.next = newNode;
		temp = newNode;
	}
	return head;
}

export function traverseDLL(head: DoubleLinkNode) {
	let temp = head;
	let str = ""
	while (temp) {
		str += `${temp.data} `
		temp = temp.next;
	}
	console.log(str);
}

//--------------------------------DELETION OPERATIONS--------------------------------

// delete head
export function deleteHeadDLL(head: DoubleLinkNode) {
	if (head === null || head.next === null) return head;
	let temp = head;
	head = head.next;
	head.prev = null;
	temp.next = null;
	return head;
}

// delete tail
export function deleteTailDLL(head: DoubleLinkNode) {
	if (head === null || head.next === null) return head;
	let tail = head;
	while (tail.next !== null) {
		tail = tail.next;
	}
	let newTail = tail.prev;
	tail.prev = null;
	newTail.next = null;
	return head;
}

// delete k position element
export function deletePositionDLL(head: DoubleLinkNode, k: number) {
	if (head === null) return head;
	let kNode = head;
	let cnt = 0;
	while (kNode) {
		cnt++;
		if (cnt == k) break;
		kNode = kNode.next;
	}
	if (kNode === null) return head;
	let prevNode = kNode.prev;
	let nextNode = kNode.next;
	if (prevNode === null && nextNode === null) return null; else if (prevNode === null) {
		// delete head function
		// return deleteHeadDLL(head);
		head = head.next;
		kNode.next = null;
		nextNode.prev = null;
		return head;
	} else if (nextNode === null) {
		// delete tail function
		// return deleteTailDLL(head);
		kNode.prev = null;
		prevNode.next = null;
		return head;
	}
	prevNode.next = nextNode;
	nextNode.prev = prevNode;
	return head;
}

export function deleteElementDLL(head: DoubleLinkNode, el: number) {
	if (head === null) return head;
	let kNode = head;
	while (kNode) {
		if (kNode.data === el) break;
		kNode = kNode.next;
	}
	if (kNode === null) return head;
	let prevNode = kNode.prev;
	let nextNode = kNode.next;
	if (prevNode === null && nextNode === null) return null; else if (prevNode === null) {
		// delete head function
		// return deleteHeadDLL(head);
		head = head.next;
		kNode.next = null;
		nextNode.prev = null;
		return head;
	} else if (nextNode === null) {
		// delete tail function
		// return deleteTailDLL(head);
		kNode.prev = null;
		prevNode.next = null;
		return head;
	}
	prevNode.next = nextNode;
	nextNode.prev = prevNode;
	return head;
}

//---------------------------INSERTION OPERATIONS---------------------------

// insert at head
export function insertHeadDLL(head: DoubleLinkNode, val: number) {
	if (head === null) return new DoubleLinkNode(val);
	let newHead = new DoubleLinkNode(val);
	newHead.next = head;
	head.prev = newHead;
	return newHead;
}

export function insertBeforeTailDLL(head: DoubleLinkNode, val: number) {
	if (head === null) return new DoubleLinkNode(val);
	if (head.next == null) {
		let newHead = new DoubleLinkNode(val);
		newHead.next = head;
		head.prev = newHead;
		return newHead;
	}
	let tail = head;
	while (tail.next !== null) tail = tail.next;
	let prevNode = tail.prev;
	let newNode = new DoubleLinkNode(val);
	newNode.prev = prevNode;
	newNode.next = tail;
	tail.prev = newNode;
	prevNode.next = newNode;
	return head;
}

// insert after tail
export function insertAfterTailDLL(head: DoubleLinkNode,  val: number) {
	if (head === null) return new DoubleLinkNode(val);
	let tail = head;
	while (tail.next !== null) {
		tail = tail.next;
	}
	let newTail = new DoubleLinkNode(val);
	newTail.prev = tail;
	tail.next = newTail;
	return head;
}

// length of linked list
export function lengthDLL(head: DoubleLinkNode) {
	let temp = head;
	let cnt = 0;
	while (temp !== null) {
		cnt++;
		temp = temp.next;
	}
	return cnt;
}

// insert at position
export function insertPositionDLL(head: DoubleLinkNode,val: number, pos: number) {
	if(pos <= 0) return head;
	if (head === null) {
		if (pos === 1) return new DoubleLinkNode(val);
		else return null;
	}
	if (pos === 1) {
		let newHead = new DoubleLinkNode(val);
		newHead.next = head;
		head.prev = newHead;
		return newHead;
	}
	let temp = head;
	let prevNode = null;
	let cnt = 0;
	while (temp != null) {
		cnt++;
		if (cnt == pos) break;
		prevNode = temp;
		temp = temp.next;
	}
	let len = lengthDLL(head);
	if (temp == null && (len + 1) == pos)  {
		let newNode = new DoubleLinkNode(val);
		newNode.prev = prevNode;
		prevNode.next = newNode;
		return head;
	} else if (temp == null) return head;
	let newNode = new DoubleLinkNode(val);
	prevNode = temp.prev;
	prevNode.next = newNode;
	newNode.next = temp;
	temp.prev = newNode;
	newNode.prev = prevNode;
	return head;
}

export function insertBeforeValueDLL(head: DoubleLinkNode, val: number, k: number) {
	if (head === null) return null;
	if (head.data === k) {
		let newHead = new DoubleLinkNode(val);
		newHead.next = head;
		head.prev = newHead;
		return newHead;
	}
	let temp = head;
	while (temp != null) {
		if (temp.data == k) break;
		temp = temp.next;
	}
	if (temp === null) return head;
	let prevNode = temp.prev;
	let newNode = new DoubleLinkNode(val);
	newNode.prev = prevNode;
	newNode.next = temp;
	temp.prev = newNode;
	prevNode.next = newNode;
	return head;
}
