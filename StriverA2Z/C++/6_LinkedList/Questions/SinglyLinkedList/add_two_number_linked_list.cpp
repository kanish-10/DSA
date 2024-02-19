#include<bits/stdc++.h>
#include "Node.h"

using namespace std;

Node *addTwoLinkedList(Node *head1, Node *head2) {
    Node *temp1 = head1;
    Node *temp2 = head2;
    Node *dummyNode = new Node(-1);
    Node *curr = dummyNode;
    int carry = 0;

    while (temp1 != nullptr || temp2 != nullptr) {
        int sum = carry;
        if (temp1) sum += temp1->data;
        if (temp2) sum += temp2->data;
        Node *newNode = new Node(sum % 10);
        carry = sum / 10;
        curr->next = newNode;
        curr = curr->next;

        if (temp1) temp1 = temp1->next;
        if (temp2) temp2 = temp2->next;
    }

    if (carry > 0) {
        Node *newNode = new Node(carry);
        curr->next = newNode;
    }
    return dummyNode->next;
}

int main() {
    vector<int> v1 = {2, 4, 6};
    vector<int> v2 = {3, 8, 7};
    Node *head1 = array_to_linkedlist(v1);
    Node *head2 = array_to_linkedlist(v2);
    Node *head = addTwoLinkedList(head1, head2);
    traverseLinkedList(head);
    return 0;
}