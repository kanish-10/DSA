#include<bits/stdc++.h>
#include "Node.h"

using namespace std;

Node *findMiddle(Node *head) {
    Node *slow = head;
    Node *fast = head->next;
    while (fast && fast->next) {
        slow = slow->next;
        fast = fast->next->next;
    }
    return slow;
}

Node *mergeTwoList(Node *l1, Node *l2) {
    Node *dNode = new Node(-1);
    Node *temp = dNode;
    while (l1 && l2) {
        if (l1->data < l2->data) {
            temp->next = l1;
            temp = l1;
            l1 = l1->next;
        } else {
            temp->next = l2;
            temp = l2;
            l2 = l2->next;
        }
    }
    if (l1) temp->next = l1;
    else temp->next = l2;

    return dNode->next;
}

Node *mergeSort(Node *head) {
    if (head == nullptr || head->next == nullptr) return head;
    Node *middle = findMiddle(head);
    Node *left = head;
    Node *right = middle->next;
    middle->next = nullptr;
    left = mergeSort(left);
    right = mergeSort(right);
    return mergeTwoList(left, right);
}

int main() {
    Node *head = array_to_linkedlist({2, 1, 5, 4, 3});
    head = mergeSort(head);
    traverseLinkedList(head);
    return 0;
}