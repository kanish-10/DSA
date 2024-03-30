#include<bits/stdc++.h>
#include "Node.h"

using namespace std;

vector<vector<int>> verticalTraversal(Node *root) {
    queue<pair<Node *, pair<int, int>>> q;
    map<int, map<int, multiset<int>>> nodes;
    q.push({root, {0, 0}});
    while (!q.empty()) {
        auto p = q.front();
        q.pop();
        Node *node = p.first;
        int vertical = p.second.first;
        int level = p.second.second;
        nodes[vertical][level].insert(node->data);
        if (node->left) {
            q.push({node->left, {vertical - 1, level + 1}});
        }
        if (node->right) {
            q.push({node->right, {vertical + 1, level + 1}});
        }
    }
    vector<vector<int>> ans;
    for (auto i: nodes) {
        vector<int> col;
        for (auto j: i.second) {
            col.insert(col.end(), j.second.begin(), j.second.end());
        }
        ans.push_back(col);
    }
    return ans;
}

int main() {
    Node *root = arrayToBTLevelOrder({1, 2, 3, 4, 5, 6, 7});
    vector<vector<int>> arr = verticalTraversal(root);
    for (vector<int> x: arr) {
        for (int i: x) {
            cout << i << " ";
        }
    }
    return 0;
}