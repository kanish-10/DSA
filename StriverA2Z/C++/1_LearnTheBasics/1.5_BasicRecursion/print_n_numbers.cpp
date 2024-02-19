#include<bits/stdc++.h>

using namespace std;

void printNNumber(int n, int i = 1) {
    if (i > n) {
        return;
    }
    cout << i << " ";
    printNNumber(++i, n);
}

int main() {
    int n;
    cout << "Enter the number: ";
    cin >> n;

    printNNumber(n);
    return 0;
}