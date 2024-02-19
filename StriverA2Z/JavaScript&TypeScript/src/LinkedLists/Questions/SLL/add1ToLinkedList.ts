import {arrayToSLL, LinkNode, traverseSLL} from "../../SinglyLinkedList/singlyLinkedList";

function add1(head: LinkNode) {
	const carry = helper(head);
	if (carry === 1) {
		let newNode = new LinkNode(1);
		newNode.next = head;
		return newNode;
	}
	return head;
}

function helper(temp: LinkNode): number {
	if (temp === null) return 1;
	let carry = helper(temp.next);
	temp.data = temp.data + carry;
	if (temp.data < 10) return 0;
	temp.data = 0;
	return 1;
}

let head = arrayToSLL([9,9,9,9]);
head = add1(head);
traverseSLL(head);