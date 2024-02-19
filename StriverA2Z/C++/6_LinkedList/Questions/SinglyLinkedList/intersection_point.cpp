#include<bits/stdc++.h>
#include "Node.h"

using namespace std;

Node *intersection(Node *head1, Node *head2) {
    if (head1 == nullptr || head2 == nullptr) return nullptr;
    Node *t1 = head1;
    Node *t2 = head2;
    while (t1 != t2) {
        t1 = t1->next;
        t2 = t2->next;
        if (t1 == t2) return t1;
        if (t1 == nullptr) t1 = head2;
        if (t2 == nullptr) t2 = head1;
    }
    return t1;
}

int main() {
    vector<int> arr1 = {1, 3};
    vector<int> arr2 = {1, 2, 3, 4};
    vector<int> arr3 = {5, 6, 7, 8};
    Node *head1 = array_to_linkedlist(arr1);
    Node *head2 = array_to_linkedlist(arr2);
    Node *head3 = array_to_linkedlist(arr3);

    Node *temp = head1;
    while (temp->next != nullptr) temp = temp->next;
    temp->next = head3;

    temp = head2;
    while (temp->next != nullptr) temp = temp->next;
    temp->next = head3;

    traverseLinkedList(head1);
    traverseLinkedList(head2);

    Node *intersect = intersection(head1, head2);
    cout << intersect->data << " " << intersect;

    return 0;
}