"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const doublyLinkedList_1 = require("../../DoublyLinkedList/doublyLinkedList");
class Browser {
    currentPage;
    constructor(homepage) {
        this.currentPage = new doublyLinkedList_1.DoubleLinkNode(homepage);
    }
    visit(url) {
        let newNode = new doublyLinkedList_1.DoubleLinkNode(url);
        newNode.prev = this.currentPage;
        this.currentPage.next = newNode;
        this.currentPage = newNode;
    }
    forward(steps) {
        while (steps) {
            if (this.currentPage.next)
                this.currentPage = this.currentPage.next;
            else
                break;
            steps--;
        }
        return this.currentPage.data;
    }
    back(steps) {
        while (steps) {
            if (this.currentPage.prev)
                this.currentPage = this.currentPage.prev;
            else
                break;
            steps--;
        }
        return this.currentPage.data;
    }
}
