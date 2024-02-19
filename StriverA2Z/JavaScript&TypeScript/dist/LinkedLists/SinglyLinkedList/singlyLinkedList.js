"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertBeforeValue = exports.insertSpecificPosition = exports.insertTail = exports.insertHead = exports.deleteElement = exports.deleteAnyPosition = exports.deleteTail = exports.deleteHead = exports.searchElement = exports.lengthOfLinkedList = exports.traverseSLL = exports.arrayToSLL = exports.LinkNode = void 0;
class LinkNode {
    data;
    next;
    constructor(data, next) {
        this.data = data;
        this.next = next || null;
    }
}
exports.LinkNode = LinkNode;
// array to linked list
function arrayToSLL(arr) {
    if (arr.length === 0)
        return null;
    let head = new LinkNode(arr[0]);
    let mover = head;
    for (let i = 1; i < arr.length; i++) {
        let temp = new LinkNode(arr[i]);
        mover.next = temp;
        mover = temp;
    }
    return head;
}
exports.arrayToSLL = arrayToSLL;
// traversing a linked list
function traverseSLL(head) {
    let temp = head;
    let str = "";
    while (temp) {
        str += `${temp.data} `;
        temp = temp.next;
    }
    console.log(str);
}
exports.traverseSLL = traverseSLL;
// length of linked list
function lengthOfLinkedList(head) {
    let cnt = 0;
    let temp = head;
    while (temp) {
        cnt++;
        temp = temp.next;
    }
    console.log("Length of Linked List :- ", cnt);
}
exports.lengthOfLinkedList = lengthOfLinkedList;
// search an element in linked list
function searchElement(head, element) {
    let temp = head;
    while (temp) {
        if (temp.data === element) {
            console.log("Element found");
            return;
        }
        temp = temp.next;
    }
    console.log("Element not found");
}
exports.searchElement = searchElement;
//-------------------DELETION IN LINKED LIST-------------------
// delete head of linked list
function deleteHead(head) {
    if (head === null)
        return head;
    head = head.next;
    return head;
}
exports.deleteHead = deleteHead;
// delete tail in linked list
function deleteTail(head) {
    if (head === null || head.next === null)
        return head;
    let temp = head;
    while (temp.next.next !== null) {
        temp = temp.next;
    }
    temp.next = null;
    return head;
}
exports.deleteTail = deleteTail;
// delete any element at k position in linked list
function deleteAnyPosition(head, el) {
    if (head === null)
        return head;
    if (el == 1) {
        head = head.next;
        return head;
    }
    let temp = head;
    let prev = null;
    let cnt = 0;
    while (temp) {
        cnt++;
        if (cnt === el) {
            prev.next = prev.next.next;
            break;
        }
        prev = temp;
        temp = temp.next;
    }
    return head;
}
exports.deleteAnyPosition = deleteAnyPosition;
// delete any element
function deleteElement(head, el) {
    if (head === null)
        return head;
    if (head.data === el) {
        head = head.next;
        return head;
    }
    let temp = head;
    let prev = null;
    while (temp) {
        if (temp.data === el) {
            prev.next = prev.next.next;
            break;
        }
        prev = temp;
        temp = temp.next;
    }
    return head;
}
exports.deleteElement = deleteElement;
//-------------------INSERTION IN LINKED LIST-------------------
// insert at head
function insertHead(head, el) {
    if (head === null)
        return new LinkNode(10);
    let temp = new LinkNode(el);
    temp.next = head;
    return temp;
}
exports.insertHead = insertHead;
// insert at tail
function insertTail(head, el) {
    if (head === null)
        return new LinkNode(el);
    let temp = head;
    while (temp.next !== null) {
        temp = temp.next;
    }
    let newNode = new LinkNode(el);
    temp.next = newNode;
    return head;
}
exports.insertTail = insertTail;
// insert at specific position
function insertSpecificPosition(head, el, pos) {
    if (head === null)
        if (pos === 1)
            return new LinkNode(el);
    if (pos === 1) {
        let temp = new LinkNode(el);
        temp.next = head;
        return temp;
    }
    let temp = head;
    let cnt = 0;
    while (temp) {
        cnt++;
        if (cnt === (pos - 1)) {
            let newNode = new LinkNode(el);
            newNode.next = temp.next;
            temp.next = newNode;
            break;
        }
        temp = temp.next;
    }
    return head;
}
exports.insertSpecificPosition = insertSpecificPosition;
// insert at specific position
function insertBeforeValue(head, el, val) {
    if (head === null)
        return head;
    if (val === 1) {
        let temp = new LinkNode(el);
        temp.next = head;
        return temp;
    }
    let temp = head;
    let flag = false;
    while (temp.next !== null) {
        if (temp.next.data === val) {
            let newNode = new LinkNode(el);
            newNode.next = temp.next;
            temp.next = newNode;
            flag = true;
            break;
        }
        temp = temp.next;
    }
    if (!flag)
        console.log("Value was not present in the linked list");
    return head;
}
exports.insertBeforeValue = insertBeforeValue;
/*
    Insertion Operations :-

    head = insertHead(head, 10);
    traverseLinkedList(head);
    head = insertTail(head, 20);
    traverseLinkedList(head);
    head = insertSpecificPosition(head, 20, 5);
    traverseLinkedList(head);
    head = insertBeforeValue(head, 20, 6);
    traverseLinkedList(head);
*/
/*
    Basic operations :-

    traverseLinkedList(head);
    lengthOfLinkedList(head);
    searchElement(head, 3);
    searchElement(head, 6);
*/
/*
    Deletion cases :-

    head = deleteHead(head);
    traverseLinkedList(head);
    head = deleteTail(head);
    traverseLinkedList(head);
    head = deleteAnyPosition(head, 2);
    traverseLinkedList(head);
    head = deleteElement(head, 2);
    traverseLinkedList(head);
*/
