#include<bits/stdc++.h>
#include "Node.h"

using namespace std;

Node *reverseLinkedList(Node *head) {
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

Node *getKthNode(Node *temp, int k) {
    k--;
    while (temp && k > 0) {
        k--;
        temp = temp->next;
    }
    return temp;
}

Node *reverseKGroups(Node *head, int k) {
    Node *temp = head;
    Node *prev = nullptr;
    while (temp) {
        Node *kthNode = getKthNode(temp, k);
        if (kthNode == nullptr) {
            if (prev) prev->next = temp;
            break;
        }
        Node *nextNode = kthNode->next;
        kthNode->next = nullptr;
        reverseLinkedList(temp);
        if (temp == head) {
            head = kthNode;
        } else {
            prev->next = kthNode;
        }
        prev = temp;
        temp = nextNode;
    }
    return head;
}

Node *getListAfterReverseOperation(Node *head, int n, int b[]){
    Node *temp = head;
    Node *prev = nullptr;
    for (int i = 0; i < n; i++) {
        if (b[i] == 0) continue;
        Node *kthNode = getKthNode(temp, b[i]);
        if (kthNode == nullptr) {
            if (prev) prev->next = reverseLinkedList(temp);
            else head = reverseLinkedList(head);
            return head;
        }
        Node *nextNode = kthNode->next;
        kthNode->next = nullptr;
        reverseLinkedList(temp);
        if (temp == head) {
            head = kthNode;
        } else {
            prev->next = kthNode;
        }
        prev = temp;
        temp = nextNode;
    }
    if (temp && prev) prev->next = temp;
    return head;
}

int main() {
    Node *head = array_to_linkedlist({0,6,1,5});
    int b[] = {2,3};
    head = getListAfterReverseOperation(head, 2, b);
    traverseLinkedList(head);
    return 0;
}