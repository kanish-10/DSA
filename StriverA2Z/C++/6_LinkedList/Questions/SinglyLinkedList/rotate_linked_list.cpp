#include<bits/stdc++.h>
#include "Node.h"

using namespace std;

Node *findNthNode(Node *temp, int k) {
    int cnt = 1;
    while (temp) {
        if (cnt == k) return temp;
        temp = temp->next;
        cnt++;
    }
    return temp;
}

Node *rotate(Node *head, int rotation) {
    if (head == nullptr || rotation == 0) return head;
    Node *tail = head;
    int len = 1;
    while (tail->next) {
        len++;
        tail = tail->next;
    }
    if (rotation % len == 0) return head;
    rotation = rotation % len;
    tail->next = head;
    Node *newLastNode = findNthNode(head, len - rotation);
    head = newLastNode->next;
    newLastNode->next = nullptr;
    return head;
}

int main() {
    Node *head = array_to_linkedlist({1, 2, 3, 4, 5});
    head = rotate(head, 4);
    traverseLinkedList(head);
    return 0;
}