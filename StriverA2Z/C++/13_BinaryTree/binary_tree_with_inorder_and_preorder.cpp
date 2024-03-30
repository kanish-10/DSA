#include<bits/stdc++.h>
#include "Node.h"

using namespace std;

Node *buildTree(vector<int> &preorder, int preStart, int preEnd, vector<int> &inorder, int inStart, int inEnd, map<int, int> inMap) {
    if (inStart > inEnd || preStart > preEnd) return nullptr;
    Node *root = new Node(preorder[preStart]);
    int inRoot = inMap[root->data];
    int number = inRoot - inStart;
    root->left = buildTree(preorder, preStart + 1, preStart + number, inorder, inStart, inRoot - 1, inMap);
    root->right = buildTree(preorder, preStart + number + 1, preEnd, inorder, inRoot + 1, inEnd, inMap);
    return root;
}


Node *buildTree(vector<int> preorder, vector<int> inorder) {
    map<int, int> inMap;
    for (int i = 0; i < inorder.size(); i++) {
        inMap[inorder[i]] = i;
    }
    Node *root = buildTree(preorder, 0, preorder.size() - 1, inorder, 0, inorder.size() - 1, inMap);
    return root;
}

int main() {
    Node *root = buildTree({10, 20, 40, 50, 30, 60}, {40, 20, 50, 10, 60, 30});
    inorderTraversal(root);
    cout << endl;
    preorderTraversal(root);
    return 0;
}