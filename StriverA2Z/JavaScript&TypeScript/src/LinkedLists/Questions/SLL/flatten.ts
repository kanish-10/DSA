import {LinkNode} from "../../SinglyLinkedList/singlyLinkedList";

class FlattenNode {
	child: FlattenNode | null;
	next: FlattenNode | null;
	data: any;

	constructor(data: any) {
		this.data = data;
		this.child = null;
		this.next = null;
	}
}

function flatten(head: FlattenNode) {
	if (head === null || head.next === null) return head;
	let mergeHead = flatten(head.next);
	return merge2List(head, mergeHead);
}

function merge2List(l1: FlattenNode, l2: FlattenNode) {
	let dNode = new FlattenNode(-1);
	let temp = dNode;

	while (l1 && l2) {
		if (l1.data < l2.data) {
			temp.child = l1;
			temp = l1;
			l1 = l1.child;
		} else {
			temp.child = l2;
			temp = l2;
			l2 = l2.child;
		}
		temp.next = null;
	}

	if (l1) temp.child = l1; else temp.child = l2;

	return dNode.child;
}

function print(head: FlattenNode) {
	let temp = head;
	let str = "";
	while (temp) {
		str += `${temp.data} `;
		temp = temp.child;
	}
	console.log(str);
}

function arrayToFLL(arr: any[]) {
	if (arr.length === 0) return null;
	let head = new FlattenNode(arr[0]);
	let temp = head;
	for (let i = 1; i < arr.length; i++) {
		temp.child = new FlattenNode(arr[i]);
		temp = temp.child;
	}
	return head;
}

let head = arrayToFLL([3]);
let head2 = arrayToFLL([2, 10]);
let head3 = arrayToFLL([1, 7, 11, 12]);
let head4 = arrayToFLL([4, 9]);
let head5 = arrayToFLL([5, 6, 8]);

head.next = head2;
head2.next = head3;
head3.next = head4;
head4.next = head5;

head = flatten(head);
print(head);