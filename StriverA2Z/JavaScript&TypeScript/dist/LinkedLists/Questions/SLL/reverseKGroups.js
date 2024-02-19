"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const singlyLinkedList_1 = require("../../SinglyLinkedList/singlyLinkedList");
function reverseKGroups(head, k) {
    let temp = head;
    let prev = null;
    while (temp) {
        let kthNode = getKthNode(temp, k);
        if (kthNode === null) {
            if (prev)
                prev.next = temp;
            break;
        }
        let nextNode = kthNode.next;
        kthNode.next = null;
        reverseLinkedList(temp);
        if (temp === head) {
            head = kthNode;
        }
        else {
            prev.next = kthNode;
        }
        prev = temp;
        temp = nextNode;
    }
    return head;
}
function getKthNode(temp, k) {
    k--;
    while (temp && k > 0) {
        k--;
        temp = temp.next;
    }
    return temp;
}
function reverseLinkedList(head) {
    let temp = head;
    let prev = null;
    while (temp) {
        let front = temp.next;
        temp.next = prev;
        prev = temp;
        temp = front;
    }
    return prev;
}
let head = (0, singlyLinkedList_1.arrayToSLL)([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
head = reverseKGroups(head, 3);
(0, singlyLinkedList_1.traverseSLL)(head);
