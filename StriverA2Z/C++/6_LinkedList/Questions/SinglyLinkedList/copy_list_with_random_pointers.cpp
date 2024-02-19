#include<bits/stdc++.h>

using namespace std;

class Node {
public:
    int val;
    Node *next;
    Node *random;

    Node(int value) {
        val = value;
        next = nullptr;
        random = nullptr;
    }
};

Node *copyRandomList(Node *head) {
    Node *temp = head;
    while (temp) {
        Node *copy = new Node(temp->val);
        copy->next = temp->next;
        temp->next = copy;
        temp = temp->next->next;
    }
    temp = head;
    while (temp) {
        Node *copy = temp->next;
        if (temp->random) copy->random = temp->random->next;
        else copy->random = nullptr;
        temp = temp->next->next;
    }
    Node *dNode = new Node(-1);
    Node *res = dNode;
    temp = head;
    while (temp) {
        res->next = temp->next;
        temp->next = temp->next->next;
        res = res->next;
        temp = temp->next;
    }
    return dNode->next;
}

void printList(Node *head) {
    while (head != nullptr) {
        cout << head->val << ':';
        head->next != nullptr ? cout << head->next->val : cout << "NULL";
        head->random != nullptr ? cout << "," << head->random->val : cout << ",NULL";
        cout << endl;
        head = head->next;
    }
}

int main() {
    Node *head = nullptr;

    Node *node1 = new Node(1);
    Node *node2 = new Node(2);
    Node *node3 = new Node(3);
    Node *node4 = new Node(4);

    head = node1;
    head->next = node2;
    head->next->next = node3;
    head->next->next->next = node4;

    head->random = node4;
    head->next->random = node1;
    head->next->next->random = nullptr;
    head->next->next->next->random = node2;

    cout << "Original list:(current node:node pointed by next pointer,node pointed by random pointer)\n";
    printList(head);

    cout << "Copy list:(current node:node pointed by next pointer,node pointed by random pointer)\n";
    Node *newHead = copyRandomList(head);
    printList(newHead);
    return 0;
}