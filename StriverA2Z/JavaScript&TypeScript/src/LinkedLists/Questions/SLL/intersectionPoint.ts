import {arrayToSLL, LinkNode} from "../../SinglyLinkedList/singlyLinkedList";

function intersectionPoint(head1: LinkNode, head2: LinkNode) {
	if (head1 === null || head2 === null) return null;
	let t1 = head1;
	let t2 = head2;
	while (t1 !== t2) {
		t1 = t1.next;
		t2 = t2.next;
		if (t1 === t2) return t1;
		if (t1 === null) t1 = head2;
		if (t2 === null) t2 = head1;
	}
	return t1;
}

let head1 = arrayToSLL([1, 3, 4]);
let head2 = arrayToSLL([1, 2, 3, 4]);
let head3 = arrayToSLL([]);

let temp = head1;
while (temp.next != null) temp = temp.next;
temp.next = head3;

temp = head2;
while (temp.next != null) temp = temp.next;
temp.next = head3;

let intersect = intersectionPoint(head1, head2);
console.log(intersect);