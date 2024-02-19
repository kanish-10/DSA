import {arrayToSLL, LinkNode, traverseSLL} from "../../SinglyLinkedList/singlyLinkedList";

function addTwoNumberLinkedList(head1: LinkNode, head2: LinkNode) {
	let temp1 = head1;
	let temp2 = head2;
	let dummyNode = new LinkNode(-1);
	let curr = dummyNode;
	let carry = 0;

	while (temp1 || temp2) {
		let sum = carry;
		if (temp1) sum += temp1.data;
		if (temp2) sum += temp2.data;
		let newNode = new LinkNode(sum % 10);
		carry = Math.floor(sum / 10);

		curr.next = newNode;
		curr = curr.next;

		if (temp1) temp1 = temp1.next;
		if (temp2) temp2 = temp2.next;
	}
	if(carry > 0) {
		curr.next = new LinkNode(carry);
	}
	return dummyNode.next;
}

let head1 = arrayToSLL([2,4,6]);
let head2 = arrayToSLL([3,8,7]);
let head = addTwoNumberLinkedList(head1, head2);
traverseSLL(head);
