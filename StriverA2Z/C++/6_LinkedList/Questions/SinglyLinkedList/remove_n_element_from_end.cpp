#include<bits/stdc++.h>
#include "Node.h";

using namespace std;

Node *removeElementFromEnd(Node *head, int N) {
    Node *fast = head;
    for (int i = 0; i < N; i++) fast = fast->next;
    if (fast == nullptr) {
        Node *newHead = head->next;
        delete head;
        return newHead;
    }
    Node *slow = head;

    while (fast->next != nullptr) {
        slow = slow->next;
        fast = fast->next;
    }
    Node *delNode = slow->next;
    slow->next = slow->next->next;
    delete delNode;
    return head;
}

int main() {
    vector<int> vec = {1, 2, 3, 4, 5, 6, 7, 8, 9};
    Node *head = array_to_linkedlist(vec);
    head = removeElementFromEnd(head, 10);
    traverseLinkedList(head);
    return 0;
}