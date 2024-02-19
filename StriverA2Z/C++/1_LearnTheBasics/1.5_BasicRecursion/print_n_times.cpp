// O(n) -Both complexity

#include<bits/stdc++.h>

using namespace std;

void printNTimes(int n, int i = 1) {
    if (i > n) {
        return;
    }
    cout << "I love c++" << endl;
    printNTimes(++i, n);
}

int main() {
    int n;
    cout << "Enter the number:";
    cin >> n;
    printNTimes(n);
    return 0;
}