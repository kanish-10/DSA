"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertBeforeValueDLL = exports.insertPositionDLL = exports.lengthDLL = exports.insertAfterTailDLL = exports.insertBeforeTailDLL = exports.insertHeadDLL = exports.deleteElementDLL = exports.deletePositionDLL = exports.deleteTailDLL = exports.deleteHeadDLL = exports.traverseDLL = exports.arrayToDLL = exports.DoubleLinkNode = void 0;
class DoubleLinkNode {
    data;
    next;
    prev;
    constructor(data, next, prev) {
        this.data = data;
        this.next = next || null;
        this.prev = prev || null;
    }
}
exports.DoubleLinkNode = DoubleLinkNode;
function arrayToDLL(arr) {
    if (arr.length === 0)
        return null;
    let head = new DoubleLinkNode(arr[0]);
    let temp = head;
    for (let i = 1; i < arr.length; i++) {
        let newNode = new DoubleLinkNode(arr[i]);
        newNode.prev = temp;
        temp.next = newNode;
        temp = newNode;
    }
    return head;
}
exports.arrayToDLL = arrayToDLL;
function traverseDLL(head) {
    let temp = head;
    let str = "";
    while (temp) {
        str += `${temp.data} `;
        temp = temp.next;
    }
    console.log(str);
}
exports.traverseDLL = traverseDLL;
//--------------------------------DELETION OPERATIONS--------------------------------
// delete head
function deleteHeadDLL(head) {
    if (head === null || head.next === null)
        return head;
    let temp = head;
    head = head.next;
    head.prev = null;
    temp.next = null;
    return head;
}
exports.deleteHeadDLL = deleteHeadDLL;
// delete tail
function deleteTailDLL(head) {
    if (head === null || head.next === null)
        return head;
    let tail = head;
    while (tail.next !== null) {
        tail = tail.next;
    }
    let newTail = tail.prev;
    tail.prev = null;
    newTail.next = null;
    return head;
}
exports.deleteTailDLL = deleteTailDLL;
// delete k position element
function deletePositionDLL(head, k) {
    if (head === null)
        return head;
    let kNode = head;
    let cnt = 0;
    while (kNode) {
        cnt++;
        if (cnt == k)
            break;
        kNode = kNode.next;
    }
    if (kNode === null)
        return head;
    let prevNode = kNode.prev;
    let nextNode = kNode.next;
    if (prevNode === null && nextNode === null)
        return null;
    else if (prevNode === null) {
        // delete head function
        // return deleteHeadDLL(head);
        head = head.next;
        kNode.next = null;
        nextNode.prev = null;
        return head;
    }
    else if (nextNode === null) {
        // delete tail function
        // return deleteTailDLL(head);
        kNode.prev = null;
        prevNode.next = null;
        return head;
    }
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    return head;
}
exports.deletePositionDLL = deletePositionDLL;
function deleteElementDLL(head, el) {
    if (head === null)
        return head;
    let kNode = head;
    while (kNode) {
        if (kNode.data === el)
            break;
        kNode = kNode.next;
    }
    if (kNode === null)
        return head;
    let prevNode = kNode.prev;
    let nextNode = kNode.next;
    if (prevNode === null && nextNode === null)
        return null;
    else if (prevNode === null) {
        // delete head function
        // return deleteHeadDLL(head);
        head = head.next;
        kNode.next = null;
        nextNode.prev = null;
        return head;
    }
    else if (nextNode === null) {
        // delete tail function
        // return deleteTailDLL(head);
        kNode.prev = null;
        prevNode.next = null;
        return head;
    }
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    return head;
}
exports.deleteElementDLL = deleteElementDLL;
//---------------------------INSERTION OPERATIONS---------------------------
// insert at head
function insertHeadDLL(head, val) {
    if (head === null)
        return new DoubleLinkNode(val);
    let newHead = new DoubleLinkNode(val);
    newHead.next = head;
    head.prev = newHead;
    return newHead;
}
exports.insertHeadDLL = insertHeadDLL;
function insertBeforeTailDLL(head, val) {
    if (head === null)
        return new DoubleLinkNode(val);
    if (head.next == null) {
        let newHead = new DoubleLinkNode(val);
        newHead.next = head;
        head.prev = newHead;
        return newHead;
    }
    let tail = head;
    while (tail.next !== null)
        tail = tail.next;
    let prevNode = tail.prev;
    let newNode = new DoubleLinkNode(val);
    newNode.prev = prevNode;
    newNode.next = tail;
    tail.prev = newNode;
    prevNode.next = newNode;
    return head;
}
exports.insertBeforeTailDLL = insertBeforeTailDLL;
// insert after tail
function insertAfterTailDLL(head, val) {
    if (head === null)
        return new DoubleLinkNode(val);
    let tail = head;
    while (tail.next !== null) {
        tail = tail.next;
    }
    let newTail = new DoubleLinkNode(val);
    newTail.prev = tail;
    tail.next = newTail;
    return head;
}
exports.insertAfterTailDLL = insertAfterTailDLL;
// length of linked list
function lengthDLL(head) {
    let temp = head;
    let cnt = 0;
    while (temp !== null) {
        cnt++;
        temp = temp.next;
    }
    return cnt;
}
exports.lengthDLL = lengthDLL;
// insert at position
function insertPositionDLL(head, val, pos) {
    if (pos <= 0)
        return head;
    if (head === null) {
        if (pos === 1)
            return new DoubleLinkNode(val);
        else
            return null;
    }
    if (pos === 1) {
        let newHead = new DoubleLinkNode(val);
        newHead.next = head;
        head.prev = newHead;
        return newHead;
    }
    let temp = head;
    let prevNode = null;
    let cnt = 0;
    while (temp != null) {
        cnt++;
        if (cnt == pos)
            break;
        prevNode = temp;
        temp = temp.next;
    }
    let len = lengthDLL(head);
    if (temp == null && (len + 1) == pos) {
        let newNode = new DoubleLinkNode(val);
        newNode.prev = prevNode;
        prevNode.next = newNode;
        return head;
    }
    else if (temp == null)
        return head;
    let newNode = new DoubleLinkNode(val);
    prevNode = temp.prev;
    prevNode.next = newNode;
    newNode.next = temp;
    temp.prev = newNode;
    newNode.prev = prevNode;
    return head;
}
exports.insertPositionDLL = insertPositionDLL;
function insertBeforeValueDLL(head, val, k) {
    if (head === null)
        return null;
    if (head.data === k) {
        let newHead = new DoubleLinkNode(val);
        newHead.next = head;
        head.prev = newHead;
        return newHead;
    }
    let temp = head;
    while (temp != null) {
        if (temp.data == k)
            break;
        temp = temp.next;
    }
    if (temp === null)
        return head;
    let prevNode = temp.prev;
    let newNode = new DoubleLinkNode(val);
    newNode.prev = prevNode;
    newNode.next = temp;
    temp.prev = newNode;
    prevNode.next = newNode;
    return head;
}
exports.insertBeforeValueDLL = insertBeforeValueDLL;
