#include<bits/stdc++.h>

using namespace std;

int main() {
    int n;
    cout << "Enter the number: ";
    cin >> n;
    cout << endl;

    int temp = n;

    int reverse = 0;
    int lastDigit = 0;
    while (n > 0) {
        lastDigit = n % 10;
        reverse = (reverse * 10) + lastDigit;
        n = n / 10;
    }

    temp == reverse ? cout << "is Palindrome" : cout << "Not a palindrome";

    return 0;
}