#include<bits/stdc++.h>
#include "Node.h"

using namespace std;

Node *mergeKList(vector<Node *> arr) {
    priority_queue<pair<int, Node *>, vector<pair<int, Node *>>, greater<pair<int, Node *>>> pq;

    for (auto &i: arr) {
        if (i) {
            pq.push({i->data, i});
        }
    }

    Node *dNode = new Node(-1);
    Node *temp = dNode;

    while (!pq.empty()) {
        auto it = pq.top();
        pq.pop();
        if (it.second->next) pq.push({it.second->next->data, it.second->next});
        temp->next = it.second;
        temp = temp->next;
    }
    return dNode->next;
}

int main() {
    Node *head1 = array_to_linkedlist({2, 4, 6});
    Node *head2 = array_to_linkedlist({1, 5});
    Node *head3 = array_to_linkedlist({1, 1, 3, 7});
    Node *head4 = array_to_linkedlist({8});

    vector<Node *> arr = {head1, head2, head3, head4};

    Node *head = mergeKList(arr);
    traverseLinkedList(head);
    return 0;
}