#include<bits/stdc++.h>
#include "Node.h"

using namespace std;

Node *mergeLL(Node *head1, Node *head2) {
    Node *t1 = head1;
    Node *t2 = head2;
    Node *dNode = new Node(-1);
    Node *temp = dNode;

    while (t1 && t2) {
        if (t1->data <= t2->data) {
            temp->next = t1;
            temp = t1;
            t1 = t1->next;
        } else {
            temp->next = t2;
            temp = t2;
            t2 = t2->next;
        }
    }

    if (t1) temp->next = t1;
    else temp->next = t2;

    return dNode->next;
}

int main() {
    vector<int> arr1 = {1, 2, 3, 4};
    vector<int> arr2 = {2, 3, 4, 6};

    Node *head1 = array_to_linkedlist(arr1);
    Node *head2 = array_to_linkedlist(arr2);

    Node *sortedLL = mergeLL(head1, head2);
    traverseLinkedList(sortedLL);
    return 0;
}