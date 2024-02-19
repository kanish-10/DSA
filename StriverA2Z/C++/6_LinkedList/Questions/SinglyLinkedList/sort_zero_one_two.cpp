#include<bits/stdc++.h>
#include "Node.h"

using namespace std;

Node *sortZeroOneTwo(Node *head) {
    if (head == nullptr || head->next == nullptr) return head;
    Node *zeroHead = new Node(-1);
    Node *oneHead = new Node(-2);
    Node *twoHead = new Node(-3);
    Node *zero = zeroHead;
    Node *one = oneHead;
    Node *two = twoHead;
    Node *temp = head;

    while (temp) {
        if (temp->data == 0) {
            zero->next = temp;
            zero = temp;
        } else if (temp->data == 1) {
            one->next = temp;
            one = temp;
        } else {
            two->next = temp;
            two = temp;
        }
        temp = temp->next;
    }
    zero->next = oneHead->next ? oneHead->next : twoHead->next;
    one->next = twoHead->next;
    two->next = nullptr;

    Node *newHead = zeroHead->next;
    delete zeroHead;
    delete oneHead;
    delete twoHead;
    return newHead;
}

int main() {
    vector<int> vec = {0, 1, 2, 0, 1, 2, 0, 1, 1};
    Node *head = array_to_linkedlist(vec);
    head = sortZeroOneTwo(head);
    traverseLinkedList(head);
    return 0;
}