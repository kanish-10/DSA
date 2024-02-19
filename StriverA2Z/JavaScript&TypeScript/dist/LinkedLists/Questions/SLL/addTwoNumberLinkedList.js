"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const singlyLinkedList_1 = require("../../SinglyLinkedList/singlyLinkedList");
function addTwoNumberLinkedList(head1, head2) {
    let temp1 = head1;
    let temp2 = head2;
    let dummyNode = new singlyLinkedList_1.LinkNode(-1);
    let curr = dummyNode;
    let carry = 0;
    while (temp1 || temp2) {
        let sum = carry;
        if (temp1)
            sum += temp1.data;
        if (temp2)
            sum += temp2.data;
        let newNode = new singlyLinkedList_1.LinkNode(sum % 10);
        carry = Math.floor(sum / 10);
        curr.next = newNode;
        curr = curr.next;
        if (temp1)
            temp1 = temp1.next;
        if (temp2)
            temp2 = temp2.next;
    }
    if (carry > 0) {
        curr.next = new singlyLinkedList_1.LinkNode(carry);
    }
    return dummyNode.next;
}
let head1 = (0, singlyLinkedList_1.arrayToSLL)([2, 4, 6]);
let head2 = (0, singlyLinkedList_1.arrayToSLL)([3, 8, 7]);
let head = addTwoNumberLinkedList(head1, head2);
(0, singlyLinkedList_1.traverseSLL)(head);
