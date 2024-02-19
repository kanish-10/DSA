import {arrayToSLL, LinkNode} from "../../SinglyLinkedList/singlyLinkedList";

function middle(head: LinkNode) {
	let fast = head;
	let slow = head;
	while (fast && fast.next) {
		slow = slow.next;
		fast = fast.next.next;
	}
	return slow;
}

let head = arrayToSLL([1,2,3,4,5,6])
console.log(middle(head).data);