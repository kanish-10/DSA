// O(n)

#include<iostream>

using namespace std;

void printNTo1(int n) {
    if (n <= 0)return;
    cout << n << " ";
    printNTo1(--n);
}

int main() {
    int n;
    cout << "Enter the number: ";
    cin >> n;

    printNTo1(n);
    return 0;
}