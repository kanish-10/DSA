#include<bits/stdc++.h>
#include "Node.h"

using namespace std;

int lengthOfLoop(Node *head) {
    Node *slow = head;
    Node *fast = head;
    while (fast && fast->next) {
        slow = slow->next;
        fast = fast->next->next;
        if (slow == fast) {
            int cnt = 1;
            fast = fast->next;
            while (slow != fast) {
                cnt++;
                fast = fast->next;
            }
            return cnt;
        }
    }
    return 0;
}

int main() {
    vector<int> arr1 = {1, 4, 7, 4, 5, 5, 1, 2};
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

    cout << lengthOfLoop(head2);

    return 0;
}