#include<iostream>

using namespace std;

int sumOfNumbers(int n) {
    if (n == 1) return 1;
    return n + sumOfNumbers(n - 1);
}

int main() {
    int n;
    cout << "Enter the number:";
    cin >> n;

    int sum = sumOfNumbers(n);
    cout << sum << endl;
    return 0;
}