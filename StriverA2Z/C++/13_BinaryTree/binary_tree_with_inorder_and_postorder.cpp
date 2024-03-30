#include<bits/stdc++.h>
#include "Node.h"

using namespace std;

Node *buildTree(vector<int> postorder, int postStart, int postEnd, vector<int> inorder, int inStart, int inEnd,
                map<int, int> inorderMap) {
    if (postStart > postEnd || inStart > inEnd) return nullptr;
    Node *root = new Node(postorder[postEnd]);
    int inRoot = inorderMap[root->data];
    int number = inRoot - inStart;
    root->left = buildTree(postorder, postStart, postStart + number - 1, inorder, inStart, inRoot - 1, inorderMap);
    root->right = buildTree(postorder, postStart + number, postEnd - 1, inorder, inRoot + 1, inEnd, inorderMap);
    return root;
}

Node *buildTree(vector<int> postorder, vector<int> inorder) {
    map<int, int> inorderMap;
    for (int i = 0; i < inorder.size(); i++) {
        inorderMap[inorder[i]] = i;
    }
    Node *root = buildTree(postorder, 0, postorder.size() - 1, inorder, 0, inorder.size() - 1, inorderMap);
    return root;
}

int main() {
    Node *root = buildTree({40, 50, 20, 60, 30, 10}, {40, 20, 50, 10, 60, 30});
    postorderTraversal(root);
    cout << endl;
    inorderTraversal(root);
    return 0;
}