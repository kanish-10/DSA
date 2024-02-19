"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const singlyLinkedList_1 = require("../../SinglyLinkedList/singlyLinkedList");
function deleteMiddle(head) {
    if (head === null || head.next === null)
        return null;
    let fast = head;
    let slow = head;
    fast = fast.next.next;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    slow.next = slow.next.next;
    return head;
}
let head = (0, singlyLinkedList_1.arrayToSLL)([1, 2, 3, 4, 5]);
head = deleteMiddle(head);
(0, singlyLinkedList_1.traverseSLL)(head);
