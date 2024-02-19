#include<bits/stdc++.h>
#include "Node.h"

using namespace std;

Node *evenAndOdd(Node *head) {
    if (head == nullptr || head->next == nullptr) return head;
    Node *even = head->next;
    Node *odd = head;
    Node *evenHead = head->next;

    while (even && even->next) {
        odd->next = odd->next->next;
        even->next = even->next->next;

        odd = odd->next;
        even = even->next;
    }
    odd->next = evenHead;
    return head;
}

int main() {
    vector<int> vec = {2, 1, 3, 4};
    Node *head = array_to_linkedlist(vec);
    head = evenAndOdd(head);
    traverseLinkedList(head);
    return 0;
}