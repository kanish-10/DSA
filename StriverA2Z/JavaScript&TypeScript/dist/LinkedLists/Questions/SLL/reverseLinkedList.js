"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const singlyLinkedList_1 = require("../../SinglyLinkedList/singlyLinkedList");
function reverseNormal(head) {
    let prev = null;
    let temp = head;
    while (temp) {
        let front = temp.next;
        temp.next = prev;
        prev = temp;
        temp = front;
    }
    return prev;
}
function recursionReverse(head) {
    if (head === null || head.next === null)
        return head;
    let newHead = recursionReverse(head.next);
    let front = head.next;
    front.next = head;
    head.next = null;
    return newHead;
}
let head = (0, singlyLinkedList_1.arrayToSLL)([1, 3, 2, 8]);
let reverseList = reverseNormal(head);
(0, singlyLinkedList_1.traverseSLL)(reverseList);
let recursionList = recursionReverse(head);
(0, singlyLinkedList_1.traverseSLL)(recursionList);
