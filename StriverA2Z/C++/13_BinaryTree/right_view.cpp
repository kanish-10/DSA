#include<bits/stdc++.h>
#include "Node.h"

using namespace std;

void rightView(Node *root, int level, vector<int> &ans) {
    if (root == nullptr) return;
    if (level == ans.size()) ans.push_back(root->data);
    rightView(root->right, level + 1, ans);
    rightView(root->left, level + 1, ans);
}

int main() {
    Node *root = arrayToBT({1, 2, 3, 4, 5, 6, 7, 8});
    vector<int> ans;
    int level = 0;
    rightView(root, level, ans);
    for (int i: ans) {
        cout << i << " ";
    }
    return 0;
}