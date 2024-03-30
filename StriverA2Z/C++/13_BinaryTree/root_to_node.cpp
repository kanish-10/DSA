#include<bits/stdc++.h>
#include "Node.h"

using namespace std;

bool getPath(Node *root, int x, vector<int> &arr) {
    if (root == nullptr) return false;
    arr.push_back(root->data);
    if (root->data == x) return true;
    if (getPath(root->left, x, arr) || getPath(root->right, x, arr)) return true;
    arr.pop_back();
    return false;
}

vector<int> solve(Node *root, int x) {
    vector<int> arr;
    if (root == nullptr) return arr;
    getPath(root, x, arr);
    return arr;
}

void solve(Node *root, string s, vector<string> &arr) {
    if (root == nullptr) return;
    s += std::to_string(root->data);
    s += " ";
    if (root->left == nullptr && root->right == nullptr) {
        arr.push_back(s);
        return;
    }
    solve(root->left, s, arr);
    solve(root->right, s, arr);
}

vector <string> allRootToLeaf(Node * root) {
    vector<string> arr;
    if (!root) return arr;
    string s = "";
    solve(root, s, arr);
    return arr;
}

int main() {
    Node *root = arrayToBTLevelOrder({1, 2, 3, 4, 5, 6, 7});
    vector<string> arr = allRootToLeaf(root);
    for (string i: arr) {
        cout << i << " ";
    }
    return 0;
}