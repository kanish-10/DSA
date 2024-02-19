"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const doublyLinkedList_1 = require("../../DoublyLinkedList/doublyLinkedList");
function findSumPairs(head, sum) {
    let ans = [];
    if (head === null)
        return ans;
    let left = head;
    let right = head;
    while (right.next !== null)
        right = right.next;
    while (left.data < right.data) {
        let add = left.data + right.data;
        if (add === sum) {
            ans.push([left.data, right.data]);
            left = left.next;
            right = right.prev;
        }
        else if (add < sum)
            left = left.next;
        else
            right = right.prev;
    }
    return ans;
}
console.log(findSumPairs((0, doublyLinkedList_1.arrayToDLL)([1, 2, 3, 4, 9]), 5));
