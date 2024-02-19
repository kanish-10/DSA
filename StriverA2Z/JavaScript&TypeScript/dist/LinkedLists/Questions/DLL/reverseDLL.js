"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const doublyLinkedList_1 = require("../../DoublyLinkedList/doublyLinkedList");
function reverseDLL(head) {
    if (head === null || head.next === null)
        return head;
    let temp = head;
    let prevNode = null;
    while (temp != null) {
        prevNode = temp.prev;
        temp.prev = temp.next;
        temp.next = prevNode;
        temp = temp.prev;
    }
    return prevNode.prev;
}
let head = (0, doublyLinkedList_1.arrayToDLL)([1, 2, 3]);
head = reverseDLL(head);
(0, doublyLinkedList_1.traverseDLL)(head);
