import {DoubleLinkNode} from "../../DoublyLinkedList/doublyLinkedList";

class Browser {
	currentPage: DoubleLinkNode;

	constructor(homepage: number) {
		this.currentPage = new DoubleLinkNode(homepage);
	}

	visit(url: number) {
		let newNode = new DoubleLinkNode(url);
		newNode.prev = this.currentPage;
		this.currentPage.next = newNode;
		this.currentPage = newNode;
	}

	forward(steps: number) {
		while (steps) {
			if (this.currentPage.next) this.currentPage = this.currentPage.next; else break;
			steps--;
		}
		return this.currentPage.data;
	}

	back(steps: number) {
		while (steps) {
			if (this.currentPage.prev) this.currentPage = this.currentPage.prev; else break;
			steps--;
		}
		return this.currentPage.data;
	}
}