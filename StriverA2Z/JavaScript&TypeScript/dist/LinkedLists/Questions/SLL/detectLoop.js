"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const singlyLinkedList_1 = require("../../SinglyLinkedList/singlyLinkedList");
function detectLoop(head) {
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast)
            return true;
    }
    return false;
}
let head1 = (0, singlyLinkedList_1.arrayToSLL)([1, 2, 3, 4, 5]);
let head2 = (0, singlyLinkedList_1.arrayToSLL)([1, 2]);
let temp = head1;
while (temp.next !== null) {
    temp = temp.next;
}
temp.next = head1;
temp = head2;
while (temp.next !== null) {
    temp = temp.next;
}
temp.next = head1;
console.log(detectLoop(head2));
