#include "Node.h"

using namespace std;

bool check(Node *root1, Node *root2) {
    if (root1 == nullptr || root2 == nullptr) return root1 == root2;
    return (root1->data == root2->data) && (check(root1->left, root2->left)) && (check(root1->right, root2->right));
}

int main() {
    Node *root1 = arrayToBTLevelOrder({1, 2, 3, 4, 5, 6, 7});
    Node *root2 = arrayToBTLevelOrder({1, 2, 3, 4, 5, 6, 7});
    cout << check(root1, root2);
    return 0;
}