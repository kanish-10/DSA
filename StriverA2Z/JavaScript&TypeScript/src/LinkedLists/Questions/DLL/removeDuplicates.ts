import {arrayToDLL, DoubleLinkNode, traverseDLL} from "../../DoublyLinkedList/doublyLinkedList";

function removeDuplicates(head: DoubleLinkNode) {
	let temp = head;
	while (temp && temp.next) {
		let nextNode = temp.next;
		while (nextNode && nextNode.data === temp.data) nextNode = nextNode.next;
		temp.next = nextNode;
		if (nextNode) nextNode.prev = temp;
		temp = temp.next;
	}
	return head;
}

let head = arrayToDLL([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 5, 5]);
head = removeDuplicates(head);
traverseDLL(head);