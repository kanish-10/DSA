import {arrayToSLL, LinkNode} from "../../SinglyLinkedList/singlyLinkedList";

function startPoint(head: LinkNode) {
	let slow = head;
	let fast = head;
	while (fast && fast.next) {
		slow = slow.next;
		fast = fast.next.next;
		if (slow === fast) {
			slow = head;
			while (slow !== fast) {
				slow = slow.next;
				fast = fast.next;
			}
			return slow;
		}
	}
	return null;
}

let head1 = arrayToSLL([1,5,3,4,5]);
let head2 = arrayToSLL([1,9]);

let temp = head1;
while (temp.next !== null) {
	temp = temp.next;
}
temp.next = head1;

temp = head2;
while (temp.next !== null) {
	temp = temp.next;
}
temp.next = head1;
console.log(startPoint(head2));