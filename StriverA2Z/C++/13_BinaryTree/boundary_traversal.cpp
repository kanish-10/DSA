#include<bits/stdc++.h>
#include "Node.h"

using namespace std;

bool isLeaf(Node *node) {
    return node->left == nullptr && node->right == nullptr;
}

void leftBoundary(Node *root, vector<int> &result) {
    Node *cur = root->left;
    while (cur) {
        if (!isLeaf(cur)) result.push_back(cur->data);
        if (cur->left) cur = cur->left;
        else cur = cur->right;
    }
}

void rightBoundary(Node *root, vector<int> &result) {
    Node *cur = root->right;
    vector<int> temp;
    while (cur) {
        if (!isLeaf(cur)) temp.push_back(cur->data);
        if (cur->right) cur = cur->right;
        else cur = cur->left;
    }
    for (int i = temp.size() - 1; i >= 0; i--) {
        result.push_back(temp[i]);
    }
}

void leafNode(Node *root, vector<int> &result) {
    if (isLeaf(root)) {
        result.push_back(root->data);
        return;
    }
    if (root->left) leafNode(root->left, result);
    if (root->right) leafNode(root->right, result);
}

void boundaryTraversal(Node *root, vector<int> &result) {
    if (root == nullptr) return;
    if (!isLeaf(root)) result.push_back(root->data);
    leftBoundary(root, result);
    leafNode(root, result);
    rightBoundary(root, result);
}

int main() {
    vector<int> result;
    Node *root = arrayToBTLevelOrder({1, 2, 3, 4, 5, 6, 7});
    boundaryTraversal(root, result);

    for (int i: result) {
        cout << i << " ";
    }
    return 0;
}