"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const doublyLinkedList_1 = require("../../DoublyLinkedList/doublyLinkedList");
function deleteAllOccureceOfKey(head, key) {
    let temp = head;
    while (temp) {
        if (temp.data === key) {
            if (temp === head)
                head = head.next;
            let prevNode = temp.prev;
            let nextNode = temp.next;
            if (prevNode)
                prevNode.next = nextNode;
            if (nextNode)
                nextNode.prev = prevNode;
            temp = nextNode;
        }
        else
            temp = temp.next;
    }
    return head;
}
let head = (0, doublyLinkedList_1.arrayToDLL)([10, 4, 10, 10, 6, 10]);
head = deleteAllOccureceOfKey(head, 10);
(0, doublyLinkedList_1.traverseDLL)(head);
