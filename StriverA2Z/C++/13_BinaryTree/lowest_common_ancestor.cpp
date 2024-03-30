#include<bits/stdc++.h>
#include "Node.h"

using namespace std;

// for visual representation same as lca.
int getPath(Node *root, int a, int b) {
    if (root == nullptr) return INT_MIN;
    if (root->data == a) return a;
    if (root->data == b) return b;
    int left = getPath(root->left, a, b);
    int right = getPath(root->right, a, b);
    if (left != INT_MIN && right != INT_MIN) return root->data;
    return max(left, right);
}

Node *lca(Node *root, Node *a, Node *b) {
    if (root == nullptr || root == a || root == b) return root;
    Node *left = lca(root->left, a, b);
    Node *right = lca(root->right, a, b);
    if (left == nullptr) return right;
    else if (right == nullptr) return left;
    else return root;
}

int main() {
    Node *root = arrayToBTLevelOrder({1, 2, 3, 4, 5, 6, 7, 8});
    cout << getPath(root, 2, 4);
    return 0;
}