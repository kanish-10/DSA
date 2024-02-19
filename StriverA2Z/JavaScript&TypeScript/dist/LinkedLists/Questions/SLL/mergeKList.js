"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const singlyLinkedList_1 = require("../../SinglyLinkedList/singlyLinkedList");
function mergeKList(arr) {
    const pq = [];
    for (const i of arr) {
        if (i) {
            pq.push([i.data, i]);
        }
    }
    pq.sort((a, b) => a[0] - b[0]);
    const dNode = new singlyLinkedList_1.LinkNode(-1);
    let temp = dNode;
    while (pq.length > 0) {
        const [value, node] = pq.shift();
        if (node.next !== null) {
            pq.push([node.next.data, node.next]);
            pq.sort((a, b) => a[0] - b[0]);
        }
        temp.next = node;
        temp = temp.next;
    }
    return dNode.next;
}
let head1 = (0, singlyLinkedList_1.arrayToSLL)([2, 4, 6]);
let head2 = (0, singlyLinkedList_1.arrayToSLL)([1, 5]);
let head3 = (0, singlyLinkedList_1.arrayToSLL)([1, 1, 3, 7]);
let head4 = (0, singlyLinkedList_1.arrayToSLL)([8]);
let head = mergeKList([head1, head2, head3, head4]);
(0, singlyLinkedList_1.traverseSLL)(head);
