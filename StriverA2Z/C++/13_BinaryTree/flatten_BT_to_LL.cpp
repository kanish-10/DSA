#include<bits/stdc++.h>
#include "Node.h"

using namespace std;

void flatten(Node *root) {
    Node *cur = root;
    while (cur) {
        if (cur->left) {
            Node *prev = cur->left;
            while (prev->right) prev = prev->right;
            prev->right = cur->right;
            cur->right = cur->left;
            cur->left = nullptr;
        }
        cur = cur->right;
    }
}

int main() {
    return 0;
}