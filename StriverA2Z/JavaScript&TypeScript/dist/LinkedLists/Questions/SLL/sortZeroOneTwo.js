"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const singlyLinkedList_1 = require("../../SinglyLinkedList/singlyLinkedList");
function sortZeroOneTwo(head) {
    if (head === null || head.next === null)
        return head;
    let zeroHead = new singlyLinkedList_1.LinkNode(-1);
    let oneHead = new singlyLinkedList_1.LinkNode(-2);
    let twoHead = new singlyLinkedList_1.LinkNode(-3);
    let zero = zeroHead;
    let one = oneHead;
    let two = twoHead;
    let temp = head;
    while (temp) {
        if (temp.data === 0) {
            zero.next = temp;
            zero = temp;
        }
        else if (temp.data === 1) {
            one.next = temp;
            one = temp;
        }
        else {
            two.next = temp;
            two = temp;
        }
        temp = temp.next;
    }
    zero.next = oneHead.next !== null ? oneHead.next : twoHead.next;
    one.next = twoHead.next;
    two.next = null;
    return zeroHead.next;
}
let head = (0, singlyLinkedList_1.arrayToSLL)([0, 1, 0, 0, 0, 1, 2, 2, 1, 2]);
head = sortZeroOneTwo(head);
(0, singlyLinkedList_1.traverseSLL)(head);
