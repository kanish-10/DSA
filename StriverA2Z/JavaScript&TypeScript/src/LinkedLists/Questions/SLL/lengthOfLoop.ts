import {arrayToSLL, LinkNode} from "../../SinglyLinkedList/singlyLinkedList";

function lengthOfLoop(head: LinkNode) {
	let slow = head;
	let fast = head;
	while (fast && fast.next) {
		slow = slow.next;
		fast = fast.next.next;
		if (slow === fast) {
			let cnt = 1;
			fast = fast.next;
			while (slow !== fast) {
				cnt++;
				fast = fast.next;
			}
			return cnt;
		}
	}
	return 0;
}

let head1 = arrayToSLL([1, 5, 3, 7, 5, 4, 5]);
let head2 = arrayToSLL([1, 9, 3]);

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
console.log(lengthOfLoop(head2));