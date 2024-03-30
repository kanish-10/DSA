#include "Node.h"

using namespace std;

int heightCheck(Node *root) {
    if (root == nullptr) return 0;
    int l = heightCheck(root->left);
    if (l == -1) return -1;
    int r = heightCheck(root->right);
    if (r == -1) return -1;

    if (abs(l - r) > 1) return -1;
    return max(l, r) + 1;
}

bool checkBalancedTree(Node *root) {
    return heightCheck(root) != -1;
}

int main() {
    Node *root = arrayToBTLevelOrder({1,2,3,4,5,6});

//    Node *root = new Node(1);
//    root->left = new Node(2);
//    root->right = new Node(3);
//    root->left->left = new Node(4);
//    root->left->left->left = new Node(5);

    cout << checkBalancedTree(root);
    return 0;
}