#include<bits/stdc++.h>
#include "Node.h"

using namespace std;

Node *deleteMiddle(Node *head) {
    if (head == nullptr || head->next == nullptr) return nullptr;
    Node *slow = head;
    Node *fast = head;
    fast = fast->next->next;
    while (fast && fast->next) {
        slow = slow->next;
        fast = fast->next->next;
    }
    Node *middle = slow->next;
    slow->next = slow->next->next;
    delete middle;
    return head;
}

int main() {
    vector<int> arr = {1, 2, 3, 5, 6};
    Node *head = array_to_linkedlist(arr);
    head = deleteMiddle(head);
    traverseLinkedList(head);
    return 0;
}