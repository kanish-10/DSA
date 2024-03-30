#include "Node.h"

using namespace std;

int height(Node *root, int &diameter) {
    if (root == nullptr) return 0;
    int l = height(root->left, diameter);
    int r = height(root->right, diameter);
    diameter = max(diameter, l + r);
    return 1 + max(l, r);
}

int main() {
    Node *root = arrayToBTLevelOrder({1, 2, 3, 4, 5, 6, 7, 8, 9});
    int diameter = 0;
    height(root, diameter);
    cout << diameter;
    return 0;
}