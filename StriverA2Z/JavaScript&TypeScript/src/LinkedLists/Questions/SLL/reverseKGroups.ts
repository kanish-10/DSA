import {arrayToSLL, LinkNode, traverseSLL} from "../../SinglyLinkedList/singlyLinkedList";

function reverseKGroups(head: LinkNode, k: number) {
	let temp = head;
	let prev = null;
	while (temp) {
		let kthNode = getKthNode(temp, k);
		if (kthNode === null) {
			if (prev) prev.next = temp;
			break;
		}
		let nextNode = kthNode.next;
		kthNode.next = null;
		reverseLinkedList(temp);
		if (temp === head) {
			head = kthNode;
		} else {
			prev.next = kthNode;
		}
		prev = temp;
		temp = nextNode;
	}
	return head;
}

function getKthNode(temp: LinkNode, k: number) {
	k--;
	while (temp && k > 0) {
		k--;
		temp = temp.next;
	}
	return temp;
}

function reverseLinkedList(head: LinkNode) {
	let temp = head;
	let prev = null;
	while (temp) {
		let front = temp.next;
		temp.next = prev;
		prev = temp;
		temp = front;
	}
	return prev;
}

let head = arrayToSLL([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
head = reverseKGroups(head, 3);
traverseSLL(head);