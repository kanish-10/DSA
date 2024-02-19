#include<bits/stdc++.h>
#include "Node.h"

using namespace std;

Node *removeDuplicates(Node *head) {
    Node *temp = head;
    while (temp && temp->next) {
        Node *nextNode = temp->next;
        while (nextNode && nextNode->data == temp->data) {
            Node *duplicate = nextNode;
            nextNode = nextNode->next;
            free(duplicate);
        }
        temp->next = nextNode;
        if (nextNode) nextNode->prev = temp;
        temp = temp->next;
    }
    return head;
}

int main() {
    Node *head = arrayToLinkedList({1,1,1,2,3,3,4});
    head = removeDuplicates(head);
    traverseToLinkedList(head);
    return 0;
}