import {arrayToSLL, LinkNode, traverseSLL} from "../../SinglyLinkedList/singlyLinkedList";

function sortZeroOneTwo (head: LinkNode) {
	if (head === null || head.next === null) return head;
	let zeroHead = new LinkNode(-1);
	let oneHead = new LinkNode(-2);
	let twoHead = new LinkNode(-3);
	let zero = zeroHead;
	let one = oneHead;
	let two = twoHead;
	let temp = head;

	while (temp) {
		if (temp.data === 0) {
			zero.next = temp;
			zero = temp;
		} else if (temp.data === 1) {
			one.next = temp;
			one = temp;
		} else {
			two.next = temp;
			two = temp;
		}
		temp = temp.next;
	}
	zero.next = oneHead.next !== null ? oneHead.next : twoHead.next;
	one.next = twoHead.next;
	two.next = null;
	return zeroHead.next;
}

let head = arrayToSLL([0,1,0,0,0,1,2,2,1,2]);
head = sortZeroOneTwo(head);
traverseSLL(head);