#include<bits/stdc++.h>
#include "Node.h"

using namespace std;

Node *startPoint(Node *head) {
    Node *slow = head;
    Node *fast = head;
    while (fast && fast->next) {
        slow = slow->next;
        fast = fast->next->next;
        if (slow == fast) {
            slow = head;
            while (slow != fast) {
                slow = slow->next;
                fast = fast->next;
            }
            return slow;
        }
    }
    return nullptr;
}

int main() {
    vector<int> arr1 = {7, 4, 5};
    vector<int> arr2 = {1, 2, 3};

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

    cout << startPoint(head2)->data;
    return 0;
}