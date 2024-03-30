#include<bits/stdc++.h>
#include "Node.h"

using namespace std;

bool isSymmetricHelp(Node *left, Node *right) {
    if (left == nullptr || right == nullptr) return left == right;
    if (left->data != right->data) return false;
    return isSymmetricHelp(left->left, right->right) && isSymmetricHelp(left->right, right->left);
}

bool isSymmetric(Node *root) {
    return root == nullptr || isSymmetricHelp(root->left, root->right);
}

int main() {
    Node *root = arrayToBTLevelOrder({1, 2, 2, 3, 4, 4, 3});
    cout << isSymmetric(root);
    return 0;
}