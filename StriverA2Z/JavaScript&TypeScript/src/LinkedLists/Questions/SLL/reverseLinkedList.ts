import {arrayToSLL, LinkNode, traverseSLL} from "../../SinglyLinkedList/singlyLinkedList";

function reverseNormal(head: LinkNode) {
	let prev = null;
	let temp = head;
	while (temp) {
		let front = temp.next;
		temp.next = prev;
		prev = temp;
		temp = front;
	}
	return prev;
}

function recursionReverse(head: LinkNode) {
	if (head === null || head.next === null) return head;
	let newHead = recursionReverse(head.next);
	let front = head.next;
	front.next = head;
	head.next = null;
	return newHead;
}

let head = arrayToSLL([1, 3, 2, 8]);
let reverseList = reverseNormal(head);
traverseSLL(reverseList);
let recursionList = recursionReverse(head);
traverseSLL(recursionList);