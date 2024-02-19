"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const singlyLinkedList_1 = require("../../SinglyLinkedList/singlyLinkedList");
function rotateLinkedList(head, rotation) {
    if (head === null || rotation === 0)
        return head;
    let tail = head;
    let len = 1;
    while (tail.next) {
        len++;
        tail = tail.next;
    }
    if (rotation % len === 0)
        return head;
    rotation = rotation % len | 0;
    tail.next = head;
    let newLastNode = findNthNode(head, len - rotation);
    head = newLastNode.next;
    newLastNode.next = null;
    return head;
}
function findNthNode(temp, k) {
    let cnt = 1;
    while (temp) {
        if (cnt === k)
            return temp;
        cnt++;
        temp = temp.next;
    }
    return temp;
}
let head = (0, singlyLinkedList_1.arrayToSLL)([1, 2, 3, 4, 5]);
head = rotateLinkedList(head, 4);
(0, singlyLinkedList_1.traverseSLL)(head);
