export class LinkNode {
	data: number;
	next: LinkNode | null;

	constructor(data: number, next?: LinkNode | null) {
		this.data = data;
		this.next = next || null;
	}

}

// array to linked list
export function arrayToSLL(arr: number[]): LinkNode {
	if (arr.length === 0) return null;
	let head = new LinkNode(arr[0]);
	let mover = head;
	for (let i = 1; i < arr.length; i++) {
		let temp = new LinkNode(arr[i]);
		mover.next = temp;
		mover = temp;
	}
	return head;
}

// traversing a linked list
export function traverseSLL(head: LinkNode) {
	let temp = head;
	let str = "";
	while (temp) {
		str += `${temp.data} `;
		temp = temp.next;
	}
	console.log(str);
}

// length of linked list
export function lengthOfLinkedList(head: LinkNode) {
	let cnt = 0;
	let temp = head;
	while (temp) {
		cnt++;
		temp = temp.next;
	}
	console.log("Length of Linked List :- ", cnt);
}

// search an element in linked list
export function searchElement(head: LinkNode, element: number) {
	let temp = head;
	while (temp) {
		if (temp.data === element) {
			console.log("Element found");
			return;
		}
		temp = temp.next;
	}
	console.log("Element not found");
}

//-------------------DELETION IN LINKED LIST-------------------

// delete head of linked list
export function deleteHead(head: LinkNode) {
	if (head === null) return head;
	head = head.next;
	return head;
}

// delete tail in linked list
export function deleteTail(head: LinkNode) {
	if (head === null || head.next === null) return head;
	let temp = head;
	while (temp.next.next !== null) {
		temp = temp.next;
	}
	temp.next = null;
	return head
}

// delete any element at k position in linked list
export function deleteAnyPosition(head: LinkNode, el: number) {
	if (head === null) return head;
	if (el == 1) {
		head = head.next;
		return head;
	}
	let temp = head;
	let prev = null;
	let cnt = 0;
	while (temp) {
		cnt++;
		if (cnt === el) {
			prev.next = prev.next.next;
			break;
		}
		prev = temp;
		temp = temp.next;
	}
	return head;
}

// delete any element
export function deleteElement(head: LinkNode, el: number) {
	if (head === null) return head;
	if (head.data === el) {
		head = head.next;
		return head;
	}
	let temp = head;
	let prev = null;
	while (temp) {
		if (temp.data === el) {
			prev.next = prev.next.next;
			break;
		}
		prev = temp;
		temp = temp.next;
	}
	return head;
}

//-------------------INSERTION IN LINKED LIST-------------------

// insert at head
export function insertHead(head: LinkNode, el: number) {
	if (head === null) return new LinkNode(10);
	let temp = new LinkNode(el);
	temp.next = head;
	return temp;
}

// insert at tail
export function insertTail(head: LinkNode, el: number) {
	if (head === null) return new LinkNode(el);
	let temp = head;
	while (temp.next !== null) {
		temp = temp.next;
	}
	let newNode = new LinkNode(el);
	temp.next = newNode;
	return head;
}

// insert at specific position
export function insertSpecificPosition(head: LinkNode, el: number, pos: number) {
	if (head === null) if (pos === 1) return new LinkNode(el);
	if (pos === 1) {
		let temp = new LinkNode(el);
		temp.next = head;
		return temp;
	}
	let temp = head;
	let cnt = 0;
	while (temp) {
		cnt++;
		if (cnt === (pos - 1)) {
			let newNode = new LinkNode(el);
			newNode.next = temp.next;
			temp.next = newNode;
			break;
		}
		temp = temp.next;
	}
	return head;
}

// insert at specific position
export function insertBeforeValue(head: LinkNode, el: number, val: number) {
	if (head === null) return head;
	if (val === 1) {
		let temp = new LinkNode(el);
		temp.next = head;
		return temp;
	}
	let temp = head;
	let flag = false;
	while (temp.next !== null) {
		if (temp.next.data === val) {
			let newNode = new LinkNode(el);
			newNode.next = temp.next;
			temp.next = newNode;
			flag = true
			break;
		}
		temp = temp.next;
	}
	if (!flag) console.log("Value was not present in the linked list")
	return head;
}

/*
	Insertion Operations :-

	head = insertHead(head, 10);
	traverseLinkedList(head);
	head = insertTail(head, 20);
	traverseLinkedList(head);
	head = insertSpecificPosition(head, 20, 5);
	traverseLinkedList(head);
	head = insertBeforeValue(head, 20, 6);
	traverseLinkedList(head);
*/

/*
	Basic operations :-

	traverseLinkedList(head);
	lengthOfLinkedList(head);
	searchElement(head, 3);
	searchElement(head, 6);
*/

/*
	Deletion cases :-

	head = deleteHead(head);
	traverseLinkedList(head);
	head = deleteTail(head);
	traverseLinkedList(head);
	head = deleteAnyPosition(head, 2);
	traverseLinkedList(head);
	head = deleteElement(head, 2);
	traverseLinkedList(head);
*/
