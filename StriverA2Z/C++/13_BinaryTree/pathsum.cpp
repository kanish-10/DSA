#include<bits/stdc++.h>
#include "Node.h"

using namespace std;

int height(Node *root, int &sum) {
    if (root == nullptr) return 0;
    int left = max(0, height(root->left, sum));
    int right = max(0, height(root->right, sum));
    sum = max(sum, left + right + root->data);
    return root->data + max(left, right);
}

int pathsum(Node *root) {
    int sum = INT_MIN;
    height(root, sum);
    return sum;
}

int main() {
    Node *root = new Node(-10);
    root->left = new Node(9);
    root->right = new Node(20);
    root->right->right = new Node(7);
    root->right->left = new Node(15);

    int sum = pathsum(root);
    cout << sum;
    return 0;
}