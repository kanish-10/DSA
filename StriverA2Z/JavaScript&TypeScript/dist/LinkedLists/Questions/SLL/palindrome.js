"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const singlyLinkedList_1 = require("../../SinglyLinkedList/singlyLinkedList");
function reverseLL(head) {
    if (head === null || head.next === null)
        return head;
    let newHead = reverseLL(head.next);
    let front = head.next;
    front.next = head;
    head.next = null;
    return newHead;
}
function checkPalindrome(head) {
    if (head === null || head.next === null) {
        (0, singlyLinkedList_1.traverseSLL)(head);
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
let head = (0, singlyLinkedList_1.arrayToSLL)([1, 2, 3, 4, 2, 1]);
checkPalindrome(head);
