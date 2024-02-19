"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const singlyLinkedList_1 = require("../../SinglyLinkedList/singlyLinkedList");
function middle(head) {
    let fast = head;
    let slow = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}
let head = (0, singlyLinkedList_1.arrayToSLL)([1, 2, 3, 4, 5, 6]);
console.log(middle(head).data);
