#include<iostream>
#include "Node.h"

using namespace std;

Node *reverseDLL(Node *head) {
    if (head == nullptr || head->next == nullptr) return head;
    Node *temp = head;
    Node *prevNode = nullptr;
    while (temp) {
        prevNode = temp->prev;
        temp->prev = temp->next;
        temp->next = prevNode;
        temp = temp->prev;
    }
    return prevNode->prev;
}

int main() {
    Node *head = arrayToLinkedList({12, 8, 5, 7});
    traverseToLinkedList(head);
    head = reverseDLL(head);
    traverseToLinkedList(head);
    return 0;
}