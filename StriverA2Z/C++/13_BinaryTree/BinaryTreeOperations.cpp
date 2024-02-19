#include<bits/stdc++.h>
#include "Node.h"

using namespace std;

int main() {

//    Node *root = new Node(1);
//    root->left = new Node(2);
//    root->right = new Node(3);
//    root->left->left = new Node(4);
//    root->left->right = new Node(5);
//    root->right->left = new Node(6);
//    root->right->right = new Node(7);

    Node *root = arrayToBTLevelOrder({1, 2, 3, 4, 5, 6, 7});

    preorderTraversal(root);
    cout << endl;
    inorderTraversal(root);
    cout << endl;
    postorderTraversal(root);
    cout << endl;
    levelOrder(root);
    cout << endl;
    preOrderTraversalIterative(root);
    cout << endl;
    inorderTraversalIterative(root);
    cout << endl;
    postorderTraversalIterative2Stack(root);
    cout << endl;
    postorderTraversalIterative1Stack(root);
    cout << endl;
    preInPostTraversal(root);

    return 0;
}