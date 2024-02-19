#include<bits/stdc++.h>
#include "Node.h"

using namespace std;

Node *deleteOccurenceOfKey(Node *head, int key) {
    Node *temp = head;
    while (temp) {
        if(temp->data == key) {
            if (temp == head) head = head->next;
            Node *prevNode = temp->prev;
            Node *nextNode = temp->next;
            if (prevNode) prevNode->next = nextNode;
            if (nextNode) nextNode->prev = prevNode;
            delete temp;
            temp = nextNode;
        } else temp = temp->next;
    }
    return head;
}

int main() {
    vector<int> arr = {10,4,10,10,6,10};
    Node *head = arrayToLinkedList(arr);
    head = deleteOccurenceOfKey(head, 10);
    traverseToLinkedList(head);
    return 0;
}