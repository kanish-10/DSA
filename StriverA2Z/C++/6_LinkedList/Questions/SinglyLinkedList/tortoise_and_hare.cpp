#include<bits/stdc++.h>
#include "Node.h"

using namespace std;

Node *middle(Node *head) {
    Node *slow = head;
    Node *fast = head;
    while (fast && fast->next) {
        slow = slow->next;
        fast = fast->next->next;
    }
    return slow;
}

int main() {
    vector<int> arr = {1,2,3,4,5,6};
    Node *head = array_to_linkedlist(arr);
    Node *mid = middle(head);
    cout << mid->data;
    return 0;
}