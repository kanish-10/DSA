#include<bits/stdc++.h>
#include "Node.h"

using namespace std;

int heightOfBT(Node *root) {
    if (root == nullptr) return 0;
    int left = heightOfBT(root->left);
    int right = heightOfBT(root->right);
    return 1 + max(left, right);
}

int main() {
    Node *root = arrayToBTLevelOrder({1, 2, 3, 4, 5, 6, 7, 8, 9});
    int len = heightOfBT(root);
    cout << len;
    return 0;
}