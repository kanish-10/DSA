#include<bits/stdc++.h>
#include "Node.h"

using namespace std;

Node *reverseNormal(Node *head) {
    Node *temp = head;
    Node *prev = nullptr;
    while (temp) {
        Node *front = temp->next;
        temp->next = prev;
        prev = temp;
        temp = front;
    }
    return prev;
}

Node *reverseRecursion(Node *head) {
    if (head == nullptr || head->next == nullptr) {
        return head;
    }
    Node *newHead = reverseRecursion(head->next);
    Node *front = head->next;
    front->next = head;
    head->next = nullptr;
    return newHead;
}

int main() {
    vector<int> arr = {1, 3, 2, 8};
    Node *head = array_to_linkedlist(arr);
    Node *reverseList = reverseNormal(head);
    Node *recursiveReverse = reverseRecursion(head);
    traverseLinkedList(recursiveReverse);
    traverseLinkedList(reverseList);
    return 0;
}