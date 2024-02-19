import {arrayToSLL, LinkNode, traverseSLL} from "../../SinglyLinkedList/singlyLinkedList";

function mergeLL(head1: LinkNode, head2: LinkNode) {
	let t1 = head1;
	let t2 = head2;
	let dNode = new LinkNode(1);
	let temp = dNode;

	while (t1 && t2) {
		if (t1.data < t2.data) {
			temp.next = t1;
			temp = t1;
			t1 = t1.next;
		} else {
			temp.next = t2;
			temp = t2;
			t2 = t2.next;
		}
	}

	if (t1) temp.next = t1; else temp.next = t2;
	return dNode.next;
}

let head1 = arrayToSLL([1, 2, 3, 4, 9]);
let head2 = arrayToSLL([2, 3, 4, 5, 7]);
let sort = mergeLL(head1, head2);
traverseSLL(sort);