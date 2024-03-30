#include<bits/stdc++.h>
#include "Node.h"

using namespace std;

int maximumWidth(Node *root) {
    int ans = 0;
    if (!root) return ans;
    queue<pair<Node *, int>> q;
    q.push({root, 0});
    int first, last;
    while (!q.empty()) {
        int size = q.size();
        int minn = q.front().second;
        for (int i = 0; i < size; i++) {
            int curr_id = q.front().second - minn;
            Node *node = q.front().first;
            q.pop();
            if (i == 0) first = curr_id;
            if (i == size - 1) last = curr_id;
            if (node->left) q.push({node->left, 2 * curr_id + 1});
            if (node->right) q.push({node->right, 2 * curr_id + 2});
        }
        ans = max(ans, last - first + 1);
    }
    return ans;
}

int main() {
    Node *root = arrayToBTLevelOrder({1, 2, 3, 4, 5, 6});
    cout << maximumWidth(root);
    return 0;
}