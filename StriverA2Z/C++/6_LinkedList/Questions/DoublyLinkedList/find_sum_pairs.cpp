#include<bits/stdc++.h>
#include "Node.h"

using namespace std;

vector<pair<int, int>> findSumPairs(Node *head, int sum) {
    vector<pair<int, int>> ans;
    if (head == nullptr) return ans;
    Node *left = head;
    Node *right = head;
    while (right->next) right = right->next;
    while (left->data < right->data) {
        int add = left->data + right->data;
        if (add == sum) {
            ans.emplace_back(left->data, right->data);
            left = left->next;
            right = right->prev;
        } else if (add < sum) left = left->next;
        else right = right->prev;
    }
    return ans;
}

int main() {
    Node *head = arrayToLinkedList({1, 2, 3, 4, 9});
    vector<pair<int, int>> ans = findSumPairs(head, 5);
    for (pair<int, int> x : ans) {
        cout << "{" << x.first << ", " << x.second << "}" << endl;
    }
    return 0;
}