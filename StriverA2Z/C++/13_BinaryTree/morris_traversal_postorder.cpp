#include<bits/stdc++.h>
#include "Node.h"

using namespace std;

void getPostorder(Node *root) {
    vector<int> postorder;
    Node *cur = root;
    while (cur) {
        if (!cur->right) {
            postorder.push_back(cur->data);
            cur = cur->left;
        } else {
            Node *prev = cur->right;
            while (prev->left && prev->left != cur) {
                prev = prev->left;
            }
            if (!prev->left) {
                prev->left = cur;
                postorder.push_back(cur->data);
                cur = cur->right;
            } else {
                prev->left = nullptr;
                cur = cur->left;
            }
        }
    }
    reverse(postorder.begin(), postorder.end());
    for (int i: postorder) cout << i << " ";
}

int main() {
    Node *root = arrayToBTLevelOrder({1,2,3,4,5,6,7,8});
    getPostorder(root);
    cout << endl;
    postorderTraversal(root);
    return 0;
}