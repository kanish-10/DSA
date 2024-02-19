#include<bits/stdc++.h>
#include "Node.h"

using namespace std;

Node *reverse(Node *head) {
    if (head == nullptr || head->next == nullptr) return head;
    Node *newHead = reverse(head->next);
    Node *front = head->next;
    front->next = head;
    head->next = nullptr;
    return newHead;
}

void checkPalindrome(Node *head) {
    if (head == nullptr || head->next == nullptr) {
        traverseLinkedList(head);
        return;
    }
    Node *fast = head;
    Node *slow = head;
    while (fast->next != nullptr && fast->next->next != nullptr) {
        slow = slow->next;
        fast = fast->next->next;
    }
    Node *newHead = reverse(slow->next);
    Node *first = head;
    Node *second = newHead;
    while (second != nullptr) {
        if (first->data != second->data) {
            reverse(newHead);
            cout << "Not a Palindrome" << endl;
            return;
        }
        first = first->next;
        second = second->next;
    }
    reverse(newHead);
    cout << "Is a Palindrome" << endl;
}

int main() {
    vector<int> arr = {1, 2, 3, 2, 1};
    Node *head = array_to_linkedlist(arr);
    checkPalindrome(head);
    return 0;
}