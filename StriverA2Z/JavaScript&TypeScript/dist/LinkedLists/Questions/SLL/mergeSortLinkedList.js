"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const singlyLinkedList_1 = require("../../SinglyLinkedList/singlyLinkedList");
function mergeTwoList(t1, t2) {
    let dNode = new singlyLinkedList_1.LinkNode(1);
    let temp = dNode;
    while (t1 && t2) {
        if (t1.data < t2.data) {
            temp.next = t1;
            temp = t1;
            t1 = t1.next;
        }
        else {
            temp.next = t2;
            temp = t2;
            t2 = t2.next;
        }
    }
    if (t1)
        temp.next = t1;
    else
        temp.next = t2;
    return dNode.next;
}
function findMiddle(head) {
    let slow = head;
    let fast = head.next;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}
function mergeSortLinkedList(head) {
    if (head === null || head.next === null)
        return head;
    let middle = findMiddle(head);
    let left = head;
    let right = middle.next;
    middle.next = null;
    left = mergeSortLinkedList(left);
    right = mergeSortLinkedList(right);
    return mergeTwoList(left, right);
}
let head = (0, singlyLinkedList_1.arrayToSLL)([2, 1, 5, 4, 3]);
head = mergeSortLinkedList(head);
(0, singlyLinkedList_1.traverseSLL)(head);
