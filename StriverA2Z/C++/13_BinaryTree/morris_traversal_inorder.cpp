#include<bits/stdc++.h>
#include "Node.h"

using namespace std;

void getInorder(Node *root) {
    vector<int> inorder;
    Node *cur = root;
    while (cur) {
        if (!cur->left) {
            inorder.push_back(cur->data);
            cur = cur->right;
        } else {
            Node *prev = cur->left;
            while (prev->right && prev->right != cur) {
                prev = prev->right;
            }
            if (!prev->right) {
                prev->right = cur;
                cur = cur->left;
            } else {
                prev->right = nullptr;
                inorder.push_back(cur->data);
                cur = cur->right;
            }
        }
    }
    for (int i: inorder) cout << i << " ";
}

int main() {
    Node *root = arrayToBTLevelOrder({1,2,3,4,5,6,7,8});
    getInorder(root);
    return 0;
}