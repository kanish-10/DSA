"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const singlyLinkedList_1 = require("../../SinglyLinkedList/singlyLinkedList");
function add1(head) {
    const carry = helper(head);
    if (carry === 1) {
        let newNode = new singlyLinkedList_1.LinkNode(1);
        newNode.next = head;
        return newNode;
    }
    return head;
}
function helper(temp) {
    if (temp === null)
        return 1;
    let carry = helper(temp.next);
    temp.data = temp.data + carry;
    if (temp.data < 10)
        return 0;
    temp.data = 0;
    return 1;
}
let head = (0, singlyLinkedList_1.arrayToSLL)([9, 9, 9, 9]);
head = add1(head);
(0, singlyLinkedList_1.traverseSLL)(head);
