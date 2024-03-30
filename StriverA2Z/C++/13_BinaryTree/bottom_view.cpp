#include<bits/stdc++.h>
#include "Node.h"

using namespace std;

vector<int> bottomView(Node *root) {
    vector<int> ans;
    if (root == nullptr) return ans;
    queue<pair<Node *, int>> q;
    map<int, int> mpp;
    q.push({root, 0});
    while(!q.empty()) {
        auto it = q.front();
        q.pop();
        Node *node = it.first;
        int level = it.second;
        mpp[level] = node->data;
        if (node->left) q.push({node->left, level - 1});
        if (node->right) q.push({node->right, level + 1});
    }
    for (auto it : mpp) {
        ans.push_back(it.second);
    }
    return ans;
}

int main() {
    Node *root = arrayToBTLevelOrder({1,2,3,4,5,6,7});
    vector<int> ans = bottomView(root);
    for (int i : ans) {
        cout << i << " ";
    }
    return 0;
}