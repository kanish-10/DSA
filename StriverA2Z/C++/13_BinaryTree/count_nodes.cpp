#include<bits/stdc++.h>
#include "Node.h"

using namespace std;

int leftHeight(Node *node) {
    int h = 0;
    while (node) {
        h++;
        node = node->left;
    }
    return h;
}

int rightHeight(Node *node) {
    int h = 0;
    while (node) {
        h++;
        node = node->right;
    }
    return h;
}

int countNodes(Node *root) {
    if (root == nullptr) return 0;
    int lh = leftHeight(root);
    int rh = rightHeight(root);
    if (lh == rh) return pow(2, lh) - 1;
    return 1 + countNodes(root->left) + countNodes(root->right);
}

int main() {
    Node *root = arrayToBTLevelOrder({1, 2, 3, 4, 5, 6, 7, 8});
    cout << countNodes(root);
    return 0;
}