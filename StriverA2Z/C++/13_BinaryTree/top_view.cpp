#include<bits/stdc++.h>
#include "Node.h"

using namespace std;

vector<int> topView(Node *root) {
    vector<int> ans;
    if (!root) return ans;
    queue<pair<Node *, int>> q;
    map<int, int> mpp;
    q.push({root, 0});
    while (!q.empty()) {
        Node *node = q.front().first;
        int level = q.front().second;
        q.pop();
        if (mpp.find(level) == mpp.end()) mpp[level] = node->data;
        if (node->left) {
            q.push({node->left, level - 1});
        }
        if (node->right) {
            q.push({node->right, level + 1});
        }
    }
    for (auto it: mpp) {
        ans.push_back(it.second);
    }
    return ans;
}

int main() {
    Node *root = arrayToBTLevelOrder({1, 2, 3, 4, 5, 6, 7});
    vector<int> ans = topView(root);
    for (int i: ans) {
        cout << i << " ";
    }
    return 0;
}
