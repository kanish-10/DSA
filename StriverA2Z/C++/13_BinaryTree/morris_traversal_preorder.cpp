#include<bits/stdc++.h>
#include "Node.h"

using namespace std;

void getPreorder(Node *root) {
    vector<int> preorder;
    Node *cur = root;
    while (cur) {
        if (!cur->left) {
            preorder.push_back(cur->data);
            cur = cur->right;
        } else {
            Node *prev = cur->left;
            while (prev->right && prev->right != cur) {
                prev = prev->right;
            }
            if (!prev->right) {
                prev->right = cur;
                preorder.push_back(cur->data);
                cur = cur->left;
            } else {
                prev->right = nullptr;
                cur = cur->right;
            }
        }
    }
    for (int i: preorder) cout << i << " ";
}

int main() {
    Node *root = arrayToBTLevelOrder({1,2,3,4,5,6,7,8});
    getPreorder(root);
    return 0;
}