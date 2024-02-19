import {arrayToSLL, LinkNode, traverseSLL} from "../../SinglyLinkedList/singlyLinkedList";

function deleteMiddle(head: LinkNode) {
	if (head === null || head.next === null) return null;
	let fast = head;
	let slow = head;
	fast = fast.next.next;
	while (fast && fast.next) {
		slow = slow.next;
		fast = fast.next.next;
	}
	slow.next = slow.next.next;
	return head;
}

let head = arrayToSLL([1,2,3,4,5]);
head = deleteMiddle(head);
traverseSLL(head);