import {arrayToDLL, DoubleLinkNode, traverseDLL} from "../../DoublyLinkedList/doublyLinkedList";

function deleteAllOccureceOfKey(head: DoubleLinkNode, key: number) {
	let temp = head;
	while (temp) {
		if (temp.data === key) {
			if (temp === head) head = head.next;
			let prevNode = temp.prev;
			let nextNode = temp.next;
			if (prevNode) prevNode.next = nextNode;
			if (nextNode) nextNode.prev = prevNode;
			temp = nextNode;
		} else temp = temp.next;
	}
	return head;
}

let head = arrayToDLL([10,4,10,10,6,10]);
head = deleteAllOccureceOfKey(head, 10);
traverseDLL(head);