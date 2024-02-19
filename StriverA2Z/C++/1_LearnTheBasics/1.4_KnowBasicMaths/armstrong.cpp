#include<bits/stdc++.h>

using namespace std;

int main() {
    int n;
    cout << "Enter the number: ";
    cin >> n;
    cout << endl;

    int temp = n;

    int armstrong = 0;
    int lastDigit = 0;
    while (n > 0) {
        lastDigit = n % 10;
        armstrong = armstrong + (lastDigit * lastDigit * lastDigit);
        n = n / 10;
    }

    temp == armstrong ? cout << "The number is armstrong number " : cout << "The number is not armstrong number ";

    return 0;
}