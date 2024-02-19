// O(log10(n))

#include<bits/stdc++.h>

using namespace std;

int main() {
    int n;
    cout << "Enter the number: ";
    cin >> n;
    cout << endl;

    int reverse = 0;
    int lastDigit = 0;
    while (n > 0) {
        lastDigit = n % 10;
        reverse = (reverse * 10) + lastDigit;
        n = n / 10;
    }

    cout << "The reverse is " << reverse;
    return 0;
}