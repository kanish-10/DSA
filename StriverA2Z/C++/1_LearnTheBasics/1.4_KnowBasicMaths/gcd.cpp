// O(log (min(a,b)))

#include<bits/stdc++.h>

using namespace std;

int main() {
    int a, b;
    cout << "Enter the first number:";
    cin >> a;
    cout << "Enter the second number:";
    cin >> b;

    while (a > 0 && b > 0) {
        if (a > b) a = a % b;
        else b = b % a;
    }
    if (a == 0) cout << "GCD is " << b;
    else cout << "GCD is " << a;


    return 0;
}