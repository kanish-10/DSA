import {arrayToSLL, LinkNode, traverseSLL} from "../../SinglyLinkedList/singlyLinkedList";

function evenAndOdd(head: LinkNode) {
	if (head === null || head.next === null) return head;
	let odd = head;
	let even = head.next;
	let evenHead = head.next;

	while (even !== null && even.next !== null) {
		odd.next = odd.next.next;
		even.next = even.next.next;

		odd = odd.next;
		even = even.next;
	}
	odd.next = evenHead;
	return head;
}

let head = arrayToSLL([1,2,3,4]);
head = evenAndOdd(head);
traverseSLL(head);