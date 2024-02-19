"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const singlyLinkedList_1 = require("../../SinglyLinkedList/singlyLinkedList");
function removeNElementFromEnd(head, N) {
    let fast = head;
    for (let i = 0; i < N; i++)
        fast = fast.next;
    if (fast === null)
        return head.next;
    let slow = head;
    while (fast.next !== null) {
        slow = slow.next;
        fast = fast.next;
    }
    slow.next = slow.next.next;
    return head;
}
let head = (0, singlyLinkedList_1.arrayToSLL)([1, 2, 3, 4, 5, 6, 7, 8, 9]);
head = removeNElementFromEnd(head, 9);
(0, singlyLinkedList_1.traverseSLL)(head);
