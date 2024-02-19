#include<bits/stdc++.h>

using namespace std;

class Node {
public:
    Node *child;
    Node *next;
    int data;

    Node(int data) {
        this->data = data;
        this->child = nullptr;
        this->next = nullptr;
    }
};

Node *arrayToLL(vector<int> arr) {
    if (arr.empty()) return nullptr;
    Node *head = new Node(arr[0]);
    Node *temp = head;
    for (int i = 1; i < arr.size(); i++) {
        Node *newNode = new Node(arr[i]);
        temp->child = newNode;
        temp = temp->child;
    }
    return head;
}

Node *merge2List(Node *l1, Node *l2) {
    Node *dNode = new Node(-1);
    Node *temp = dNode;
    while (l1 && l2) {
        if (l1->data < l2->data) {
            temp->child = l1;
            temp = l1;
            l1 = l1->child;
        } else {
            temp->child = l2;
            temp = l2;
            l2 = l2->child;
        }
        temp->next = nullptr;
    }
    if (l1) temp->child = l1;
    else temp->child = l2;

    return dNode->child;
}

Node *flatten(Node *head) {
    if (head == nullptr || head->next == nullptr) return head;
    Node *mergeHead = flatten(head->next);
    return merge2List(head, mergeHead);
}

void print(Node *head) {
    Node *temp = head;
    while (temp) {
        cout << temp->data << " ";
        temp = temp->child;
    }
    cout << endl;
}

int main() {
    Node *head = arrayToLL({3});
    Node *head2 = arrayToLL({2, 10});
    Node *head3 = arrayToLL({1, 7, 11, 12});
    Node *head4 = arrayToLL({4, 9});
    Node *head5 = arrayToLL({5, 6, 8});

    head->next = head2;
    head2->next = head3;
    head3->next = head4;
    head4->next = head5;

    head = flatten(head);
    print(head);
    return 0;
}