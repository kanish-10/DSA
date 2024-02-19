"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const doublyLinkedList_1 = require("../../DoublyLinkedList/doublyLinkedList");
function removeDuplicates(head) {
    let temp = head;
    while (temp && temp.next) {
        let nextNode = temp.next;
        while (nextNode && nextNode.data === temp.data)
            nextNode = nextNode.next;
        temp.next = nextNode;
        if (nextNode)
            nextNode.prev = temp;
        temp = temp.next;
    }
    return head;
}
let head = (0, doublyLinkedList_1.arrayToDLL)([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 5, 5]);
head = removeDuplicates(head);
(0, doublyLinkedList_1.traverseDLL)(head);
