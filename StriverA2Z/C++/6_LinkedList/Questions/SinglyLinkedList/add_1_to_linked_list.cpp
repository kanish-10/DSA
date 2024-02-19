#include<bits/stdc++.h>
#include "Node.h"

using namespace std;

int helper(Node *temp) {
    if (temp == nullptr) return 1;
    int carry = helper(temp->next);
    temp->data = temp->data + carry;
    if (temp->data < 10) return 0;
    temp->data = 0;
    return 1;
}

Node *add1(Node *head) {
    int carry = helper(head);
    if (carry == 1) {
        Node *newNode = new Node(1);
        newNode->next = head;
        return newNode;
    }
    return head;
}

int main() {
    vector<int> arr = {9, 9, 9, 9};
    Node *head = array_to_linkedlist(arr);
    head = add1(head);
    traverseLinkedList(head);
    return 0;
}