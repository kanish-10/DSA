#include<bits/stdc++.h>
#include "Node.h"

using namespace std;

vector<vector<int>> zigZagTraversal(Node *root) {
    vector<vector<int>> result;
    if (root == nullptr) return result;
    queue<Node *> q;
    q.push(root);
    bool left = true;
    while (!q.empty()) {
        int size = q.size();
        vector<int> row(size);
        for (int i = 0; i < size; i++) {
            Node *node = q.front();
            q.pop();
            int index = left ? i : (size - 1 - i);
            row[index] = node->data;
            if (node->left) q.push(node->left);
            if (node->right) q.push(node->right);
        }
        left = !left;
        result.push_back(row);
    }
    return result;
}

int main() {
    Node *root = arrayToBTLevelOrder({1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11});
    vector<vector<int>> result = zigZagTraversal(root);
    for (vector<int> x: result) {
        for (int i: x) {
            cout << i << " ";
        }
    }
    return 0;
}