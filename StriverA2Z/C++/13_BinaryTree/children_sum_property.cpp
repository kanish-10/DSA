#include<bits/stdc++.h>
#include "Node.h"

using namespace std;

void childrenSum(Node *root) {
    if (!root) return;
    int child = 0;
    if (root->left) child += root->left->data;
    if (root->right) child += root->right->data;

    if (child >= root->data) root->data = child;
    else {
        if (root->left) root->left->data = root->data;
        if (root->right) root->right->data = root->data;
    }

    childrenSum(root->left);
    childrenSum(root->right);

    int tot = 0;
    if (root->left) tot += root->left->data;
    if (root->right) tot += root->right->data;
    if (root->left || root->right) root->data = tot;
}

int main() {
    Node *root = arrayToBTLevelOrder({40, 10, 20, 2, 5, 30, 40});
    childrenSum(root);
    inorderTraversal(root);
    return 0;
}