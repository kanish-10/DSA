import {arrayToDLL, DoubleLinkNode, traverseDLL} from "../../DoublyLinkedList/doublyLinkedList";

function reverseDLL(head: DoubleLinkNode) {
	if (head === null || head.next === null) return head;
	let temp = head;
	let prevNode = null;
	while (temp != null) {
		prevNode = temp.prev;
		temp.prev = temp.next;
		temp.next = prevNode;
		temp = temp.prev;
	}
	return prevNode.prev;
}

let head = arrayToDLL([1,2,3]);
head = reverseDLL(head);
traverseDLL(head);