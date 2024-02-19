#include<bits/stdc++.h>
#include "Node.h"

using namespace std;

bool detectLoop(Node *head) {
    Node *slow = head;
    Node *fast = head;
    while (fast && fast->next) {
        slow = slow->next;
        fast = fast->next->next;
        if (slow == fast) return true;
    }
    return false;
}

int main() {
    vector<int> arr1 = {1, 2, 3, 4, 5};
    vector<int> arr2 = {1, 2};

    Node *head1 = array_to_linkedlist(arr1);
    Node *head2 = array_to_linkedlist(arr2);

    Node *temp = head1;
    while (temp->next != nullptr) {
        temp = temp->next;
    }
    temp->next = head1;

    temp = head2;
    while (temp->next != nullptr) {
        temp = temp->next;
    }
    temp->next = head1;

    cout << detectLoop(head2);

    return 0;
}