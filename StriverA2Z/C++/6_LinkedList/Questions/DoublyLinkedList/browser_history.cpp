#include<bits/stdc++.h>

using namespace std;

class Node {
public:
    Node *next;
    Node *prev;
    string data;

    Node(string data) {
        this->data = data;
        this->next = nullptr;
        this->prev = nullptr;
    }
};

class Browser {
public:
    Node *currentPage;

    Browser(string data) {
        currentPage = new Node(data);
    }

    void visit(string url) {
        Node *newNode = new Node(url);
        newNode->prev = currentPage;
        currentPage->next = newNode;
        currentPage = newNode;
    }

    string forward(int steps) {
        while (steps) {
            if (currentPage->next) currentPage = currentPage->next;
            else break;
            steps--;
        }
        return currentPage->data;
    }

    string back(int steps) {
        while (steps) {
            if (currentPage->prev) currentPage = currentPage->prev;
            else break;
            steps--;
        }
        return currentPage->data;
    }
};

int main() {
    return 0;
}