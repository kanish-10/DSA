import {arrayToSLL, LinkNode, traverseSLL} from "../../SinglyLinkedList/singlyLinkedList";

function reverseLL(head: LinkNode) {
	if (head === null || head.next === null) return head;
	let newHead = reverseLL(head.next);
	let front = head.next;
	front.next = head;
	head.next = null;
	return newHead;
}

function checkPalindrome(head: LinkNode) {
	if (head === null || head.next === null) {
		traverseSLL(head);
		return;
	}
	let fast = head;
	let slow = head;
	while (fast.next !== null && fast.next.next !== null) {
		slow = slow.next;
		fast = fast.next.next;
	}
	let newHead = reverseLL(slow.next);
	let first = head;
	let second = newHead;
	while (second) {
		if (first.data !== second.data) {
			reverseLL(newHead);
			console.log("Not a Palindrome");
			return;
		}
		second = second.next;
		first = first.next;
	}
	reverseLL(newHead);
	console.log("Is a Palindrome");
}

let head = arrayToSLL([1,2,3,4,2,1]);
checkPalindrome(head);