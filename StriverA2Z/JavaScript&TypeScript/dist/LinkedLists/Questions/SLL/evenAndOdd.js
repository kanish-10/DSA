"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const singlyLinkedList_1 = require("../../SinglyLinkedList/singlyLinkedList");
function evenAndOdd(head) {
    if (head === null || head.next === null)
        return head;
    let odd = head;
    let even = head.next;
    let evenHead = head.next;
    while (even !== null && even.next !== null) {
        odd.next = odd.next.next;
        even.next = even.next.next;
        odd = odd.next;
        even = even.next;
    }
    odd.next = evenHead;
    return head;
}
let head = (0, singlyLinkedList_1.arrayToSLL)([1, 2, 3, 4]);
head = evenAndOdd(head);
(0, singlyLinkedList_1.traverseSLL)(head);
